// CareerCard.js 

import React from 'react';

const CareerCard = ({ career, openCard, toggleCard }) => {
  const isOpen = openCard === career.id;

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="flex items-center mb-4" onClick={() => toggleCard(career.id)}>
        <div className="text-3xl mr-4">{career.icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-emerald-800">{career.title}</h3>
          <p className="text-emerald-600 font-medium">{career.salary}</p>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4 fade-in">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-emerald-800">Job Description</h4>
            <p className="text-sm text-gray-600">{career.description}</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-emerald-800">Education Requirements</h4>
            <p className="text-sm text-gray-600">{career.education}</p>
          </div>
          <div className="border-l-4 border-amber-600 pl-4">
            <h4 className="font-semibold text-emerald-800">Daily Tasks</h4>
            <p className="text-sm text-gray-600">{career.dailyTasks}</p>
          </div>
          <div className="bg-emerald-50 p-3 rounded-lg">
            <p className="text-sm">
              <strong>Growth Outlook:</strong> {career.outlook} <strong>Key Point:</strong> {career.challenge}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCard;