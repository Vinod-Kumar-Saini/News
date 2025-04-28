import React from 'react';
function Login() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="flex flex-col gap-4 w-80">
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Login</button>
        </form>
      </div>
    );
  }
  export default Login;
