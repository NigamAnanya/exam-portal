import React, { useState } from 'react';
import Image from 'next/image';

// Logo/Header Component with Tailwind CSS
const LogoHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-800 text-white">
      {/* Placeholder for logo */}
      <Image src="/assets/images/LOGo.jpg" width={200} height={100} alt="Org Logo" className="pb-4"/>
      <h2 className="text-xl font-semibold">Candidate Name</h2>
    </header>
  );
};

// Instructions List Component with Tailwind CSS
const InstructionsList = () => {
  const instructions = [
    "This is a test of spatial abilities...",
    "You are required to answer all the questions.",
    // ...add all other instruction points
  ];

  return (
    <ol className="list-decimal list-inside bg-white shadow-md rounded-lg p-6 space-y-2">
      {instructions.map((instruction, index) => (
        <li key={index} className="text-gray-700 text-base">{instruction}</li>
      ))}
    </ol>
  );
};

// Action Button Component with Tailwind CSS
const ActionButton = ({ text, onClick, disabled, isPrimary = false }) => {
  const primaryStyles = "text-white bg-blue-600 hover:bg-blue-700";
  const defaultStyles = "text-gray-800 bg-gray-200 hover:bg-gray-300";
  const disabledStyles = "bg-gray-400 text-gray-600 cursor-not-allowed";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${disabled ? disabledStyles : isPrimary ? primaryStyles : defaultStyles}`}
    >
      {text}
    </button>
  );
};

// Main Page Layout Component with Tailwind CSS
const ExamInstructionsPage = () => {
  const [hasReadInstructions, setHasReadInstructions] = useState(false);

  const handleReadInstructions = () => {
    setHasReadInstructions(true);
  };

  const handleExit = () => {
    console.log('Exit clicked');
    // Perform exit operations here
  };

  return (
    <div className="flex flex-col h-screen">
      <LogoHeader />
      <main className="flex-grow p-8 bg-slate-200">
        <h1 className="text-2xl font-bold mb-4 text-black">General Instructions</h1>
        <InstructionsList />
        <div className="flex justify-end space-x-4 mt-6">
          <ActionButton text="Exit" onClick={handleExit} />
          <ActionButton
            text={hasReadInstructions ? "Ready to start" : "I have read & understood the instructions"}
            onClick={handleReadInstructions}
            disabled={hasReadInstructions}
            isPrimary={true}
          />
        </div>
      </main>
    </div>
  );
};

export default ExamInstructionsPage;
