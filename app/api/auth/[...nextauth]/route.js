import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "../../../../lib/dbConnect";
// import { dbConnect } from "@/lib/dbConnect"; // your file path

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        const usersCollection = dbConnect("users");

        // Find existing user
        const existing = await usersCollection.findOne({ email: user.email });

        if (!existing) {
          // Insert new user
          await usersCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user",
            createdAt: new Date(),
          });
        } else {
          // Update existing user
          await usersCollection.updateOne(
            { email: user.email },
            {
              $set: {
                name: user.name,
                image: user.image,
                lastLogin: new Date(),
              },
            }
          );
        }
        return true;
      } catch (error) {
        console.error("Google Login Error:", error);
        return false;
      }
    },

    async session({ session }) {
      const usersCollection = dbConnect("users");

      const dbUser = await usersCollection.findOne({
        email: session.user.email,
      });

      // attach DB data to session  
      session.user.id = dbUser?._id;
      session.user.role = dbUser?.role || "user";

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
