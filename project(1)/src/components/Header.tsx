import React, { useState } from 'react';
import { Menu, X, Globe, User, Bell } from 'lucide-react';
import { SupportedLanguage } from '../utils/translations';

interface HeaderProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  showNotifications: boolean;
  setShowNotifications: (show: boolean) => void;
  isAuthenticated: boolean;
  userProfile: any;
  setShowAuthModal: (show: boolean) => void;
  setIsAuthenticated?: (auth: boolean) => void;
  setUserProfile?: (profile: any) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  showNotifications,
  setShowNotifications,
  isAuthenticated,
  userProfile,
  setShowAuthModal,
  setIsAuthenticated,
  setUserProfile
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const languages: Array<{ code: SupportedLanguage; name: string; native: string }> = [
    { code: 'en' as SupportedLanguage, name: 'English', native: 'English' },
    { code: 'hi' as SupportedLanguage, name: 'Hindi', native: 'हिन्दी' },
    { code: 'bn' as SupportedLanguage, name: 'Bengali', native: 'বাংলা' },
    { code: 'ta' as SupportedLanguage, name: 'Tamil', native: 'தமிழ்' },
    { code: 'te' as SupportedLanguage, name: 'Telugu', native: 'తెలుগు' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/bimafy.jpg" 
              alt="BimaFy Logo" 
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              BimaFy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-justify">
            <a href="#recommendations" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {currentLanguage === 'en' ? 'Recommendations' :
               currentLanguage === 'hi' ? 'सिफारिशें' :
               currentLanguage === 'bn' ? 'সুপারিশ' :
               currentLanguage === 'ta' ? 'பரிந்துரைகள்' :
               'సిఫార్సులు'}
            </a>
            <a href="#risk-profile" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {currentLanguage === 'en' ? 'Risk Profile' :
               currentLanguage === 'hi' ? 'जोखिम प्रोफ़ाइल' :
               currentLanguage === 'bn' ? 'ঝুঁকি প্রোফাইল' :
               currentLanguage === 'ta' ? 'அபாய சுயவिवरম்' :
               'రిస్క్ ప్రొఫైల్'}
            </a>
            <a href="#compare" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {currentLanguage === 'en' ? 'Compare Plans' :
               currentLanguage === 'hi' ? 'योजनाओं की तुलना' :
               currentLanguage === 'bn' ? 'পরিকল্পনা তুলনা' :
               currentLanguage === 'ta' ? 'திட்டங்களை ஒப்பிடு' :
               'ప్రణాళికలను పోల్చండి'}
            </a>
            <a href="#community" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {currentLanguage === 'en' ? 'Community Pools' :
               currentLanguage === 'hi' ? 'समुदायिक पूल' :
               currentLanguage === 'bn' ? 'কমিউনিটি পুল' :
               currentLanguage === 'ta' ? 'சமூக குளங்கள்' :
               'కమ్యూనిటీ పూల్స్'}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {currentLanguage === 'en' ? 'Contact' :
               currentLanguage === 'hi' ? 'संपर्क' :
               currentLanguage === 'bn' ? 'যোগাযোগ' :
               currentLanguage === 'ta' ? 'தொடர்பு' :
               'సంప్రదించండి'}
            </a>
            <a href="#subscription" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              {currentLanguage === 'en' ? 'Subscription' :
               currentLanguage === 'hi' ? 'सब्सक्रिप्शन' :
               currentLanguage === 'bn' ? 'সাবস্ক্রিপশন' :
               currentLanguage === 'ta' ? 'சந்தா' :
               'సబ్స్క్రిప్షన్'}
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            {/* <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-gray-100 transition-colors text-justify"
              >
               {currentLanguage === 'en' ? '' :
                currentLanguage === 'hi' ? '' :
                currentLanguage === 'bn' ? '' :
                currentLanguage === 'ta' ? '' :
                ''}
                <span className="text-sm font-medium">{languages.find(l => l.code === currentLanguage)?.native}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 text-justify">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors text-justify ${
                        currentLanguage === lang.code ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex justify-between">
                        <span>{lang.native}</span>
                        <span className="text-gray-500">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div> */}

            {/* Notifications */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-justify"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>

            {/* User Profile */}
            <div className="relative text-justify">
              {isAuthenticated ? (
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{userProfile?.name || 'User'}</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
                >
                  Login
                </button>
              )}
              {showUserMenu && isAuthenticated && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-10 text-justify">
                  <a href="#profile" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-justify">Profile</a>
                  <a href="#policies" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-justify">My Policies</a>
                  <a href="#settings" className="block px-4 py-2 hover:bg-gray-50 transition-colors text-justify">Settings</a>
                  <hr className="my-2" />
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-red-600 text-justify"
                    onClick={() => {
                      setIsAuthenticated && setIsAuthenticated(false);
                      setUserProfile && setUserProfile(null);
                      setShowUserMenu(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
                {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2 text-justify">
             <a href="#recommendations" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
               {currentLanguage === 'en' ? 'Recommendations' :
                currentLanguage === 'hi' ? 'सिफारिशें' :
                currentLanguage === 'bn' ? 'সুপারিশ' :
                currentLanguage === 'ta' ? 'பரிந்துரைகள்' :
                'సిఫార్సులు'}
              </a>
             <a href="#risk-profile" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
               {currentLanguage === 'en' ? 'Risk Profile' :
                currentLanguage === 'hi' ? 'जोखिम प्रोफ़ाइल' :
                currentLanguage === 'bn' ? 'ঝুঁকি প্রোফাইল' :
                currentLanguage === 'ta' ? 'அபாய சুयவিवরम்' :
                'రిస్క్ ప్రొఫైల్'}
              </a>
             <a href="#compare" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
               {currentLanguage === 'en' ? 'Compare Plans' :
                currentLanguage === 'hi' ? 'योजनाओं की तुलना' :
                currentLanguage === 'bn' ? 'পরিকল্পনা তুলনা' :
                currentLanguage === 'ta' ? 'திட்டங்களை ஒப்பிடு' :
                'ప్రణాళికలను పోల్చండి'}
              </a>
             <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
               {currentLanguage === 'en' ? 'Community Pools' :
                currentLanguage === 'hi' ? 'समुदायिक पूल' :
                currentLanguage === 'bn' ? 'কমিউনিটি পুল' :
                currentLanguage === 'ta' ? 'சமூக குளங்கள்' :
                'కమ్యూనిటీ పూల్స్'}
              </a>
             <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
               {currentLanguage === 'en' ? 'Contact' :
                currentLanguage === 'hi' ? 'संपर्क' :
                currentLanguage === 'bn' ? 'যোগাযোগ' :
                currentLanguage === 'ta' ? 'தொடர்பு' :
                'సంప్రదించండి'}
              </a>
             <a href="#subscription" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-colors">
               {currentLanguage === 'en' ? 'Subscription' :
                currentLanguage === 'hi' ? 'सब्सक्रिप्शन' :
                currentLanguage === 'bn' ? 'সাবস্ক্রিপশন' :
                currentLanguage === 'ta' ? 'சந்தா' :
                'సబ్స్క్రిప్షన్'}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
