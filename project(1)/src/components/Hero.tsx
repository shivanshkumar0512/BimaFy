import React from 'react';
import { Shield, Brain, Users, Globe } from 'lucide-react';
import { getTranslation, SupportedLanguage } from '../utils/translations';


interface HeroProps {
  currentLanguage: SupportedLanguage;
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ currentLanguage, onGetStarted }) => {
  return (
    <>
     

      {/* Second Section (Features) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {getTranslation(currentLanguage, 'heroTitle')}
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {getTranslation(currentLanguage, 'heroSubtitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-justify">
              {getTranslation(currentLanguage, 'heroDescription')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => {
                  const element = document.getElementById('recommendations');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center cursor-pointer"
              >
                {getTranslation(currentLanguage, 'getStarted')}
              </button>
                
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-white bg-opacity-10 text-white border border-white border-opacity-30 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
              >
                <span className="mr-2">💬</span>
                <span>Contact Us</span>
              </button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-white">
                <div className="bg-white bg-opacity-10 p-4 rounded-full mb-3 backdrop-blur-sm">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-1">{getTranslation(currentLanguage, 'aiRecommendations')}</h3>
                <p className="text-sm text-gray-300 text-justify">
                  {getTranslation(currentLanguage, 'aiRecommendationsDesc')}
                </p>
              </div>

              <div className="flex flex-col items-center text-white">
                <div className="bg-white bg-opacity-10 p-4 rounded-full mb-3 backdrop-blur-sm">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-1">{getTranslation(currentLanguage, 'regionalLanguages')}</h3>
                <p className="text-sm text-gray-300 text-justify">
                  {getTranslation(currentLanguage, 'regionalLanguagesDesc')}
                </p>
              </div>

              <div className="flex flex-col items-center text-white">
                <div className="bg-white bg-opacity-10 p-4 rounded-full mb-3 backdrop-blur-sm">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-1">{getTranslation(currentLanguage, 'riskAnalysis')}</h3>
                <p className="text-sm text-gray-300 text-justify">
                  {getTranslation(currentLanguage, 'riskAnalysisDesc')}
                </p>
              </div>

              <div className="flex flex-col items-center text-white">
                <div className="bg-white bg-opacity-10 p-4 rounded-full mb-3 backdrop-blur-sm">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-1">{getTranslation(currentLanguage, 'communityPools')}</h3>
                <p className="text-sm text-gray-300 text-justify">
                  {getTranslation(currentLanguage, 'communityPoolsDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
