import React, { useState } from 'react';
import Image from 'next/image';

type SignUpFormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [formState, setFormState] = useState<SignUpFormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add validation for form fields here
    if (formState.password !== formState.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }
    console.log('Form submitted:', formState);
    // Handle the form submission, e.g., send data to the server
  };

  // Functions to handle social sign-ups
  const handleFacebookSignUp = () => {
    console.log('Continue with Facebook');
    // Implement Facebook sign-up logic
  };

  const handleGoogleSignUp = () => {
    console.log('Continue with Google');
    // Implement Google sign-up logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image src="/assets/images/DRDO_background.jpg" layout="fill" className="object-cover" alt="Background Image" />
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">Sign Up</h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            </div>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="First Name"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Confirm Password"
                    value={formState.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button type="submit" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
