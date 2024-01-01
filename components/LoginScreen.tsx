import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Update the form validity whenever email or password changes
  useEffect(() => {
    setIsFormValid(email.trim().length > 0 && password.length > 0);
  }, [email, password]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      return; // Do nothing if the form is not valid
    }
    console.log('Logging in with:', email, password);
    // Implement login logic here
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log('Redirecting to forgot password page...');
    // Redirect to Forgot Password page or modal
  };

  const handleSignUpNavigation = () => {
    // Navigate to the Sign Up page
    console.log('Navigating to Sign Up page...');
    // Implement navigation logic here, e.g., window.location.href = '/signup';
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      <Image src="/assets/images/DRDO_background.jpg" layout="fill" className="object-cover" alt="Background Image" />
      <div className="w-full max-w-lg p-5 absolute">
        <div className="bg-white bg-opacity-75 rounded-lg shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Welcome Back!</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-bold text-black block mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 bg-opacity-50 text-black border border-gray-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-bold text-black block mb-2">Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 bg-opacity-50 text-black border border-gray-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 bg-gray-800 rounded border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-black">Remember</label>
              </div>
              <button onClick={handleForgotPassword} type="button" className="text-sm text-blue-800 hover:underline">
                Forgot Password?
              </button>
            </div>
            <Link href='/user' className='flex justify-start items-center w-full gap-4 pl-5 text-lg rounded-lg '>
            <button type="submit" disabled={!isFormValid} className={`w-full py-3 mt-4 ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300'} rounded-lg text-white font-bold`}>Login</button>
            </Link>
          </form>
          <div className="mt-6 text-center">
            <button onClick={handleSignUpNavigation} className="text-sm text-blue-800 hover:underline">
              Don't have an account? Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
