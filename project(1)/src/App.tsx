import React, { useState, useEffect} from 'react';
import { SupportedLanguage } from './utils/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceRecommendations from './components/InsuranceRecommendations';
import RiskProfiler from './components/RiskProfiler';
import PolicyComparison from './components/PolicyComparison';
import CommunityPools from './components/CommunityPools';
import WhatsAppIntegration from './components/WhatsAppIntegration';
import NotificationPanel from './components/NotificationPanel';
import ChatBot from './components/ChatBot';
import AuthModal from './components/AuthModal';
import Contact from './components/Contact';
import Subscription from './components/Subscription';
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
  const google: any;
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
  const script = document.createElement("script");
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,bn,ta,te",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );

    // Inject custom styles for a better widget look
    setTimeout(() => {
      if (!document.getElementById("custom-google-translate-style")) {
        const style = document.createElement("style");
        style.id = "custom-google-translate-style";
        style.innerHTML = `
          .goog-te-combo {
            background: #f3f4f6 !important;
            color: #1f2937 !important;
            border: 1px solid #d1d5db !important;
            border-radius: 0.5rem !important;
            padding: 0.5rem 1rem !important;
            font-size: 0.875rem !important;
            outline: none !important;
            transition: border 0.2s !important;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04) !important;
          }
          .goog-te-combo:focus {
            border-color: #6366f1 !important;
          }
        `;
        document.head.appendChild(style);
      }
    }, 1000);
  };
}, []);


  const handleLanguageChange = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
  };

  const scrollToRecommendations = () => {
    const element = document.getElementById('recommendations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        showNotifications={showNotifications}
        setShowNotifications={setShowNotifications}
        isAuthenticated={isAuthenticated}
        userProfile={userProfile}
        setShowAuthModal={setShowAuthModal}
      />

<div className="fixed top-20 right-6 z-50">
{/* Globe Icon Button */}
<button
  onClick={() => {
    const el = document.getElementById("google_translate_element");
    if (el) el.classList.toggle("hidden");
  }}
  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
>
  🌐
</button>

{/* Google Translate widget (hidden initially) */}
<div
  id="google_translate_element"
  className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-2 hidden"
></div>
</div>

      
      <main>
        <Hero 
          currentLanguage={currentLanguage}
          onGetStarted={scrollToRecommendations}
        />
        <InsuranceRecommendations currentLanguage={currentLanguage} />
        <RiskProfiler />
        <PolicyComparison />
        <CommunityPools />
        <WhatsAppIntegration />
        <Contact currentLanguage={currentLanguage} />
        
        {/* Subscription Section */}
        <section id="subscription" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Get <span className="text-indigo-600">Premium Access</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Unlock advanced AI recommendations, unlimited policy comparisons, and priority support with our subscription plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowSubscription(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View Subscription Plans
              </button>
              
            </div>
          </div>
        </section>

        {/* Subscription Modal */}
        {showSubscription && (
          <Subscription 
            isOpen={showSubscription}
            onClose={() => setShowSubscription(false)}
            currentLanguage={currentLanguage}
          />
        )}
        {showNotifications && (
        <NotificationPanel 
          currentLanguage={currentLanguage}
          onClose={() => setShowNotifications(false)}
        />
      )}
        {showAuthModal && (
        <AuthModal 
          currentLanguage={currentLanguage}
          onClose={() => setShowAuthModal(false)}
          onAuth={(profile) => {
            setIsAuthenticated(true);
            setUserProfile(profile);
            setShowAuthModal(false);
          }}
        />
      )}
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">BimaFy</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                {currentLanguage === 'en' ? 
                  "Democratizing insurance access for all Indians through AI-powered recommendations, simplified explanations, and community-driven solutions." :
                  currentLanguage === 'hi' ?
                  "एआई-संचालित सिफारिशों, सरलीकृत व्याख्याओं और समुदाय-संचालित समाधानों के माध्यम से सभी भारतीयों के लिए बीमा पहुंच का लोकतंत्रीकरण।" :
                  currentLanguage === 'bn' ?
                  "এআই-চালিত সুপারিশ, সরলীকৃত ব্যাখ্যা এবং কমিউনিটি-চালিত সমাধানের মাধ্যমে সমস্ত ভারতীয়দের জন্য বীমা অ্যাক্সেসের গণতন্ত্রীকরণ।" :
                  currentLanguage === 'ta' ?
                  "ஏஐ-இயக்கப்படும் பரிந்துரைகள், எளிமைப்படுத்தப்பட்ட விளக்கங்கள் மற்றும் சமூக-உந்துதல் தீர்வுகள் மூலம் அனைத்து இந்தியர்களுக்கும் காப்பீட்டு அணுகலை ஜனநாயகமாக்குதல்।" :
                  "ఏఐ-ఆధారిత సిఫార్సులు, సరళీకృత వివరణలు మరియు కమ్యూనిటీ-ఆధారిత పరిష్కారాల ద్వారా అన్ని భారతీయులకు బీమా యాక్సెస్‌ను ప్రజాస్వామ్యీకరించడం।"
                }
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <span className="text-sm">🇮🇳 Made in India</span>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <span className="text-sm">🤖 AI Powered</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {currentLanguage === 'en' ? 'Quick Links' :
                 currentLanguage === 'hi' ? 'त्वरित लिंक' :
                 currentLanguage === 'bn' ? 'দ্রুত লিঙ্ক' :
                 currentLanguage === 'ta' ? 'விரைவான இணைப்புகள்' :
                 'త్వరిత లింక్‌లు'}
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#recommendations" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Recommendations' :
                   currentLanguage === 'hi' ? 'सिफारिशें' :
                   currentLanguage === 'bn' ? 'সুপারিশ' :
                   currentLanguage === 'ta' ? 'பரிந்துரைகள்' :
                   'సిఫార్సులు'}
                </a></li>
                <li><a href="#risk-profile" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Risk Assessment' :
                   currentLanguage === 'hi' ? 'जोखिम मूल्यांकन' :
                   currentLanguage === 'bn' ? 'ঝুঁকি মূল্যায়ন' :
                   currentLanguage === 'ta' ? 'அபாய மதிப்பீடு' :
                   'రిస్క్ అసెస్మెంట్'}
                </a></li>
                <li><a href="#compare" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Compare Plans' :
                   currentLanguage === 'hi' ? 'योजनाओं की तुलना करें' :
                   currentLanguage === 'bn' ? 'পরিকল্পনা তুলনা করুন' :
                   currentLanguage === 'ta' ? 'திட்டங்களை ஒப்பிடுங்கள்' :
                   'ప్రణాళికలను పోల్చండి'}
                </a></li>
                <li><a href="#community" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Community Pools' :
                   currentLanguage === 'hi' ? 'समुदायिक पूल' :
                   currentLanguage === 'bn' ? 'কমিউনিটি পুল' :
                   currentLanguage === 'ta' ? 'சமூக குளங்கள்' :
                   'కమ్యూనిటీ పూల్స్'}
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {currentLanguage === 'en' ? 'Support' :
                 currentLanguage === 'hi' ? 'सहायता' :
                 currentLanguage === 'bn' ? 'সহায়তা' :
                 currentLanguage === 'ta' ? 'ஆதரவு' :
                 'మద్దతు'}
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Help Center' :
                   currentLanguage === 'hi' ? 'सहायता केंद्र' :
                   currentLanguage === 'bn' ? 'সহায়তা কেন্দ্র' :
                   currentLanguage === 'ta' ? 'உதவி மையம்' :
                   'సహాయ కేంద్రం'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Contact Us' :
                   currentLanguage === 'hi' ? 'संपर्क करें' :
                   currentLanguage === 'bn' ? 'যোগাযোগ করুন' :
                   currentLanguage === 'ta' ? 'எங்களைத் தொடர்பு கொள்ளுங்கள்' :
                   'మమ్మల్ని సంప్రదించండి'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Privacy Policy' :
                   currentLanguage === 'hi' ? 'गोपनीयता नीति' :
                   currentLanguage === 'bn' ? 'গোপনীয়তা নীতি' :
                   currentLanguage === 'ta' ? 'தனியுரிமைக் கொள்கை' :
                   'గోప్యతా విధానం'}
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors">
                  {currentLanguage === 'en' ? 'Terms of Service' :
                   currentLanguage === 'hi' ? 'सेवा की शर्तें' :
                   currentLanguage === 'bn' ? 'সেবার শর্তাবলী' :
                   currentLanguage === 'ta' ? 'சேவை விதிமுறைகள்' :
                   'సేవా నిబంధనలు'}
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>
              {currentLanguage === 'en' ? '© 2024 BimaFy. All rights reserved. Empowering every Indian with smart insurance decisions.' :
               currentLanguage === 'hi' ? '© 2024 BimaFy। सभी अधिकार सुरक्षित। स्मार्ट बीमा निर्णयों के साथ हर भारतीय को सशक्त बनाना।' :
               currentLanguage === 'bn' ? '© ২০২৪ BimaFy। সমস্ত অধিকার সংরক্ষিত। স্মার্ট বীমা সিদ্ধান্তের সাথে প্রতিটি ভারতীয়কে ক্ষমতায়ন।' :
               currentLanguage === 'ta' ? '© 2024 BimaFy. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. ஸ்மார்ட் காப்பீட்டு முடிவுகளுடன் ஒவ்வொரு இந்தியரையும் மேம்படுத்துதல்.' :
               '© 2024 BimaFy. అన్ని హక్కులు రక్షించబడ్డాయి. స్మార్ట్ బీమా నిర్ణయాలతో ప్రతి భారతీయుడిని శక్తివంతం చేయడం.'}
            </p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;