// index.js 

import React, { useState } from 'react';
import CareerCard from '../components/CareerCard';
import careers from '../data/careers';
import Head from 'next/head'; 

const EnvironmentalCareersApp = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (cardId) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };



  return (
    <>
      <Head>
        <title>Environmental Careers Guide</title>
        <link rel="icon" type="image/png" href="../public/pine.png" />
      </Head>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header
        className="relative bg-cover bg-center text-white py-16"
        style={{ backgroundImage: 'url("/bkgd.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-in fade-in duration-700">
            🌍 Environmental Careers Guide
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-in fade-in duration-700 delay-200">
            Discover Your Path to Making a Difference in 2025
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto animate-in fade-in duration-700 delay-300">
            <p className="text-lg">
              The environmental sector is experiencing <strong>7% projected growth</strong> from <strong>2023-2033</strong>, 
              creating exciting opportunities for passionate professionals to tackle climate change and sustainability challenges.
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <a href="#overview" className="text-emerald-800 hover:text-emerald-600 font-medium transition-colors flex items-center space-x-2">
              <span>🔍</span>
              <span>Overview</span>
            </a>
            <a href="#careers" className="text-emerald-800 hover:text-emerald-600 font-medium transition-colors flex items-center space-x-2">
              <span>💼</span>
              <span>Careers</span>
            </a>
            <a href="#growth" className="text-emerald-800 hover:text-emerald-600 font-medium transition-colors flex items-center space-x-2">
              <span>📊</span>
              <span>Market Trends</span>
            </a>
            <a href="#resources" className="text-emerald-800 hover:text-emerald-600 font-medium transition-colors flex items-center space-x-2">
              <span>📚</span>
              <span>Resources</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Why Choose Environmental Science?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Environmental science offers diverse career paths where you can directly contribute to solving 
              the world's most pressing challenges while building a rewarding professional future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Growing Field</h3>
              <p className="text-gray-600">7% projected growth rate, faster than average for all occupations</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Competitive Salaries</h3>
              <p className="text-gray-600">Starting salaries from $45K-$65K, senior positions $80K-$400K+</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-gray-600">Direct contribution to environmental protection and sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">10 Environmental Careers to Explore</h2>
            <p className="text-xl text-gray-600">
              Click on each career to learn more about requirements, salaries, and daily responsibilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {careers.map((career) => (
              <CareerCard
                key={career.id}
                career={career}
                openCard={openCard}
                toggleCard={toggleCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section id="growth" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Market Trends & Growth</h2>
            <p className="text-xl text-gray-600">
              Environmental careers are expanding rapidly due to increased focus on sustainability and climate change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">7%</div>
              <p className="text-sm text-emerald-800 font-medium">Annual Growth Rate</p>
              <p className="text-xs text-gray-600 mt-2">Faster than average for all occupations</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">8,500</div>
              <p className="text-sm text-emerald-800 font-medium">Annual Job Openings</p>
              <p className="text-xs text-gray-600 mt-2">Expected through 2033</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl">
              <div className="text-3xl font-bold text-emerald-800 mb-2">56K</div>
              <p className="text-sm text-emerald-800 font-medium">Current Professionals</p>
              <p className="text-xs text-gray-600 mt-2">Environmental scientists in the US</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-xl">
              <div className="text-3xl font-bold text-amber-700 mb-2">$60K</div>
              <p className="text-sm text-emerald-800 font-medium">Average Salary</p>
              <p className="text-xs text-gray-600 mt-2">Entry to mid-level positions</p>
            </div>
          </div>

          {/* <div className="mt-12 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Professional Insight</h3>
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "The environmental sector is experiencing unprecedented growth as companies and governments prioritize sustainability. 
              We're seeing demand for professionals who can bridge traditional environmental science with emerging technologies like AI and data analytics."
            </blockquote>
            <p className="text-sm text-gray-600">- Dr. Sarah Chen, Senior Environmental Consultant, EcoTech Solutions</p>
          </div> */}
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Getting Started Resources</h2>
            <p className="text-xl text-gray-600">Essential steps to launch your environmental career</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Education Pathways</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Research accredited environmental programs</li>
                <li>• Consider internship opportunities</li>
                <li>• Explore graduate specializations</li>
                <li>• Look into professional certifications</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Professional Networks</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Join environmental organizations</li>
                <li>• Attend sustainability conferences</li>
                <li>• Connect with professionals on LinkedIn</li>
                <li>• Participate in local environmental groups</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Build Experience</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Volunteer for environmental projects</li>
                <li>• Seek entry-level positions</li>
                <li>• Develop technical skills</li>
                <li>• Create a portfolio of projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">Ready to start your environmental career journey?</p>
          <p className="text-emerald-200">The planet needs passionate professionals like you.</p>
          <div className="flex justify-center items-center space-x-2 mt-4">
            <a 
              href="https://github.com/shuknuk/environmental-careers-guide" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-emerald-300 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.604-2.665-.3-5.467-1.335-5.467-5.933 0-1.312.47-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.222 0 4.61-2.807 5.63-5.48 5.922.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
          <p className="text-sm font-bold text-emerald-300 mt-2">© 2025 Kinshuk Goel | All Rights Reserved</p>
        </div>
      </footer>
      </div>
    </>
  );
};

export default EnvironmentalCareersApp;