export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 shadow rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input className="border p-2 w-full mb-4 rounded" placeholder="Name" />
        <input className="border p-2 w-full mb-4 rounded" placeholder="Email" />
        <input className="border p-2 w-full mb-6 rounded" type="password" placeholder="Password" />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Create Account
        </button>

        <p className="mt-4 text-center text-gray-600">
          Or <a href="/login" className="text-blue-600">Login with Google</a>
        </p>
      </div>
    </div>
  );
}
