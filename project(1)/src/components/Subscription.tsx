import React, { useState } from 'react';
import { Check, Star, Crown, Shield, Zap, Users, FileText, TrendingUp, X } from 'lucide-react';
import { SupportedLanguage } from '../utils/translations';

type BillingCycle = 'monthly' | 'quarterly' | 'yearly';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  pricing: {
    monthly: number;
    quarterly: number;
    yearly: number;
  };
  originalPricing?: {
    monthly: number;
    quarterly: number;
    yearly: number;
  };
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonStyle: string;
}

interface SubscriptionProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: SupportedLanguage;
}

const Subscription: React.FC<SubscriptionProps> = ({ isOpen, onClose, currentLanguage }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const plans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: currentLanguage === 'en' ? 'Basic' :
            currentLanguage === 'hi' ? 'बेसिक' :
            currentLanguage === 'bn' ? 'বেসিক' :
            currentLanguage === 'ta' ? 'அடிப்படை' :
            'బేసిక్',
      description: currentLanguage === 'en' ? 'Perfect for individuals starting their insurance journey' :
                   currentLanguage === 'hi' ? 'अपनी बीमा यात्रा शुरू करने वाले व्यक्तियों के लिए सही' :
                   currentLanguage === 'bn' ? 'তাদের বীমা যাত্রা শুরু করা ব্যক্তিদের জন্য উপযুক্ত' :
                   currentLanguage === 'ta' ? 'தங்கள் காப்பீட்டு பயணத்தைத் தொடங்கும் தனிநபர்களுக்கு ஏற்றது' :
                   'వారి బీమా ప్రయాణాన్ని ప్రారంభిస్తున్న వ్యక్తులకు సరైనది',
      icon: Shield,
      pricing: {
        monthly: 0,
        quarterly: 0,
        yearly: 0
      },
      features: [
        { feature: currentLanguage === 'en' ? 'Basic AI Recommendations' :
                  currentLanguage === 'hi' ? 'बेसिक एआई सिफारिशें' :
                  currentLanguage === 'bn' ? 'বেসিক এআই সুপারিশ' :
                  currentLanguage === 'ta' ? 'அடிப்படை ஏஐ பரிந்துரைகள்' :
                  'బేసిక్ ఏఐ సిఫార్సులు', included: true },
        { feature: currentLanguage === 'en' ? 'Compare up to 3 policies' :
                  currentLanguage === 'hi' ? '3 पॉलिसियों तक की तुलना करें' :
                  currentLanguage === 'bn' ? '৩টি পর্যন্ত পলিসি তুলনা করুন' :
                  currentLanguage === 'ta' ? '3 பாலிசிகள் வரை ஒப்பிடுங்கள்' :
                  '3 పాలసీల వరకు పోల్చండి', included: true },
        { feature: currentLanguage === 'en' ? 'Risk Assessment' :
                  currentLanguage === 'hi' ? 'जोखिम मूल्यांकन' :
                  currentLanguage === 'bn' ? 'ঝুঁকি মূল্যায়ন' :
                  currentLanguage === 'ta' ? 'ஆபত்து மதிப்பீடு' :
                  'రిస్క్ అసెస్‌మెంట్', included: true },
        { feature: currentLanguage === 'en' ? 'Regional Language Support' :
                  currentLanguage === 'hi' ? 'क्षेत्रीय भाषा समर्थन' :
                  currentLanguage === 'bn' ? 'আঞ্চলিক ভাষা সহায়তা' :
                  currentLanguage === 'ta' ? 'பிராந்திய மொழி ஆதரவு' :
                  'ప్రాంతీయ భాషా మద్దతు', included: true },
        { feature: currentLanguage === 'en' ? 'WhatsApp Notifications' :
                  currentLanguage === 'hi' ? 'व्हाट्सऐप नोटिफिकेशन' :
                  currentLanguage === 'bn' ? 'হোয়াটসঅ্যাপ বিজ্ঞপ্তি' :
                  currentLanguage === 'ta' ? 'வாட்ஸ்அப் அறிவிப்புகள்' :
                  'వాట్సాప్ నోటిఫికేషన్లు', included: true },
        { feature: currentLanguage === 'en' ? 'Priority Support' :
                  currentLanguage === 'hi' ? 'प्राथमिकता समर्थन' :
                  currentLanguage === 'bn' ? 'অগ্রাধিকার সহায়তা' :
                  currentLanguage === 'ta' ? 'முன்னுரிமை ஆதரவு' :
                  'ప్రాధాన్యత మద్దతు', included: false },
        { feature: currentLanguage === 'en' ? 'Advanced Analytics' :
                  currentLanguage === 'hi' ? 'उन्नत विश्लेषिकी' :
                  currentLanguage === 'bn' ? 'উন্নত বিশ্লেষণ' :
                  currentLanguage === 'ta' ? 'மேம்பட்ட பகுப்பாய்வு' :
                  'అధునాతన విశ్లేషణలు', included: false },
        { feature: currentLanguage === 'en' ? 'Premium Insights' :
                  currentLanguage === 'hi' ? 'प्रीमियम अंतर्दृष्टि' :
                  currentLanguage === 'bn' ? 'প্রিমিয়াম অন্তর্দৃষ্টি' :
                  currentLanguage === 'ta' ? 'பிரீமியம் நுண்ணறிவு' :
                  'ప్రీమియం అంతర్దృష్టులు', included: false },
        { feature: currentLanguage === 'en' ? 'Unlimited Comparisons' :
                  currentLanguage === 'hi' ? 'असीमित तुलना' :
                  currentLanguage === 'bn' ? 'সীমাহীন তুলনা' :
                  currentLanguage === 'ta' ? 'வரம்பற்ற ஒப்பீடுகள்' :
                  'అపరిమిత పోలికలు', included: false },
        { feature: currentLanguage === 'en' ? 'Dedicated Account Manager' :
                  currentLanguage === 'hi' ? 'समर्पित खाता प्रबंधक' :
                  currentLanguage === 'bn' ? 'নিবেদিত অ্যাকাউন্ট ম্যানেজার' :
                  currentLanguage === 'ta' ? 'அர்ப்பணிப்புள்ள கணக்கு மேலாளர்' :
                  'అంకిత ఖాతా నిర్వాహకుడు', included: false }
      ],
      buttonText: currentLanguage === 'en' ? 'Get Started Free' :
                  currentLanguage === 'hi' ? 'मुफ्त में शुरुआत करें' :
                  currentLanguage === 'bn' ? 'বিনামূল্যে শুরু করুন' :
                  currentLanguage === 'ta' ? 'இலவசமாக தொடங்கவும்' :
                  'ఉచితంగా ప్రారంభించండి',
      buttonStyle: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    },
    {
      id: 'premium',
      name: currentLanguage === 'en' ? 'Premium' :
            currentLanguage === 'hi' ? 'प्रीमियम' :
            currentLanguage === 'bn' ? 'প্রিমিয়াম' :
            currentLanguage === 'ta' ? 'பிரீமியம்' :
            'ప్రీమియం',
      description: currentLanguage === 'en' ? 'Ideal for individuals and small families seeking comprehensive coverage' :
                   currentLanguage === 'hi' ? 'व्यापक कवरेज चाहने वाले व्यक्तियों और छोटे परिवारों के लिए आदर्श' :
                   currentLanguage === 'bn' ? 'ব্যাপক কভারেজ খোঁজা ব্যক্তি এবং ছোট পরিবারের জন্য আদর্শ' :
                   currentLanguage === 'ta' ? 'விரிவான கவரேஜ் தேடும் தனிநபர்கள் மற்றும் சிறிய குடும்பங்களுக்கு ஏற்றது' :
                   'సమగ్ర కవరేజీని కోరుకునే వ్యక్తులు మరియు చిన్న కుటుంబాలకు అనువైనది',
      icon: Star,
      popular: true,
      pricing: {
        monthly: 299,
        quarterly: 799,
        yearly: 2999
      },
      originalPricing: {
        monthly: 399,
        quarterly: 1197,
        yearly: 4788
      },
      features: [
        { feature: currentLanguage === 'en' ? 'Everything in Basic' :
                  currentLanguage === 'hi' ? 'बेसिक में सब कुछ' :
                  currentLanguage === 'bn' ? 'বেসিকের সবকিছু' :
                  currentLanguage === 'ta' ? 'அடிப்படையில் எல்லாம்' :
                  'బేసిక్‌లో అన్నీ', included: true },
        { feature: currentLanguage === 'en' ? 'Advanced AI Recommendations' :
                  currentLanguage === 'hi' ? 'उन्नत एआई सिफारिशें' :
                  currentLanguage === 'bn' ? 'উন্নত এআই সুপারিশ' :
                  currentLanguage === 'ta' ? 'மேம்பட்ட ஏஐ பரிந்துரைகள்' :
                  'అధునాతన ఏఐ సిఫార్సులు', included: true },
        { feature: currentLanguage === 'en' ? 'Unlimited Policy Comparisons' :
                  currentLanguage === 'hi' ? 'असीमित पॉलिसी तुलना' :
                  currentLanguage === 'bn' ? 'সীমাহীন পলিসি তুলনা' :
                  currentLanguage === 'ta' ? 'வரம்பற்ற பாலிசி ஒப்பீடுகள்' :
                  'అపరిమిత పాలసీ పోలికలు', included: true },
        { feature: currentLanguage === 'en' ? 'Priority Support (24/7)' :
                  currentLanguage === 'hi' ? 'प्राथमिकता समर्थन (24/7)' :
                  currentLanguage === 'bn' ? 'অগ্রাধিকার সহায়তা (২৪/৭)' :
                  currentLanguage === 'ta' ? 'முன்னுரிமை ஆதரவு (24/7)' :
                  'ప్రాధాన్యత మద్దతు (24/7)', included: true },
        { feature: currentLanguage === 'en' ? 'Detailed Analytics Dashboard' :
                  currentLanguage === 'hi' ? 'विस्तृत विश्लेषिकी डैशबोर्ड' :
                  currentLanguage === 'bn' ? 'বিস্তারিত বিশ্লেষণ ড্যাশবোর্ড' :
                  currentLanguage === 'ta' ? 'விரிவான பகுப்பாய்வு டாஷ்போர்டு' :
                  'వివరణాత్మక విశ్లేషణలు డాష్‌బోర్డ్', included: true },
        { feature: currentLanguage === 'en' ? 'Premium Market Insights' :
                  currentLanguage === 'hi' ? 'प्रीमियम बाजार अंतर्दृष्टि' :
                  currentLanguage === 'bn' ? 'প্রিমিয়াম বাজার অন্তর্দৃষ্টি' :
                  currentLanguage === 'ta' ? 'பிரீமியம் சந்தை நுண்ணறிவு' :
                  'ప్రీమియం మార్కెట్ అంతర్దృష్టులు', included: true },
        { feature: currentLanguage === 'en' ? 'Custom Risk Reports' :
                  currentLanguage === 'hi' ? 'कस्टम जोखिम रिपोर्ट' :
                  currentLanguage === 'bn' ? 'কাস্টম ঝুঁকি রিপোর্ট' :
                  currentLanguage === 'ta' ? 'தனிப்பயன் ஆபத்து அறிக்கைகள்' :
                  'కస్టమ్ రిస్క్ రిపోర్ట్‌లు', included: true },
        { feature: currentLanguage === 'en' ? 'Email & SMS Alerts' :
                  currentLanguage === 'hi' ? 'ईमेल और एसएमएस अलर्ट' :
                  currentLanguage === 'bn' ? 'ইমেইল এবং এসএমএস সতর্কতা' :
                  currentLanguage === 'ta' ? 'மின்னஞ்சல் மற்றும் எஸ்எம்எஸ் எச்சரிக்கைகள்' :
                  'ఇమెయిల్ మరియు SMS అలర్ట్‌లు', included: true },
        { feature: currentLanguage === 'en' ? 'Dedicated Account Manager' :
                  currentLanguage === 'hi' ? 'समर्पित खाता प्रबंधक' :
                  currentLanguage === 'bn' ? 'নিবেদিত অ্যাকাউন্ট ম্যানেজার' :
                  currentLanguage === 'ta' ? 'அர்ப்பணிப்புள்ள கணக்கு மேலாளர்' :
                  'అంకిత ఖాతా నిర్వాహకుడు', included: false },
        { feature: currentLanguage === 'en' ? 'White-label Solutions' :
                  currentLanguage === 'hi' ? 'व्हाइट-लेबल समाधान' :
                  currentLanguage === 'bn' ? 'হোয়াইট-লেবেল সমাধান' :
                  currentLanguage === 'ta' ? 'வைட்-லேபல் தீர்வுகள்' :
                  'వైట్-లేబల్ సొల్యూషన్స్', included: false }
      ],
      buttonText: currentLanguage === 'en' ? 'Start Premium Trial' :
                  currentLanguage === 'hi' ? 'प्रीमियम ट्रायल शुरू करें' :
                  currentLanguage === 'bn' ? 'প্রিমিয়াম ট্রায়াল শুরু করুন' :
                  currentLanguage === 'ta' ? 'பிரீமியம் சோதனை தொடங்கவும்' :
                  'ప్రీమియం ట్రయల్ ప్రారంభించండి',
      buttonStyle: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
    },
    {
      id: 'enterprise',
      name: currentLanguage === 'en' ? 'Enterprise' :
            currentLanguage === 'hi' ? 'एंटरप्राइज' :
            currentLanguage === 'bn' ? 'এন্টারপ্রাইজ' :
            currentLanguage === 'ta' ? 'நிறுவன' :
            'ఎంటర్‌ప్రైజ్',
      description: currentLanguage === 'en' ? 'Complete solution for businesses and insurance professionals' :
                   currentLanguage === 'hi' ? 'व्यवसायों और बीमा पेशेवरों के लिए पूर्ण समाधान' :
                   currentLanguage === 'bn' ? 'ব্যবসা এবং বীমা পেশাদারদের জন্য সম্পূর্ণ সমাধান' :
                   currentLanguage === 'ta' ? 'வணிகங்கள் மற்றும் காப்பீட்டு நிபுணர்களுக்கான முழுமையான தீர்வு' :
                   'వ్యాపారాలు మరియు బీమా నిపుణులకు పూర్తి పరిష్కారం',
      icon: Crown,
      pricing: {
        monthly: 899,
        quarterly: 2399,
        yearly: 8999
      },
      originalPricing: {
        monthly: 1199,
        quarterly: 3597,
        yearly: 14388
      },
      features: [
        { feature: currentLanguage === 'en' ? 'Everything in Premium' :
                  currentLanguage === 'hi' ? 'प्रीमियम में सब कुछ' :
                  currentLanguage === 'bn' ? 'প্রিমিয়ামের সবকিছু' :
                  currentLanguage === 'ta' ? 'பிரீமியத்தில் எல்லாம்' :
                  'ప్రీమియంలో అన్నీ', included: true },
        { feature: currentLanguage === 'en' ? 'Dedicated Account Manager' :
                  currentLanguage === 'hi' ? 'समर्पित खाता प्रबंधक' :
                  currentLanguage === 'bn' ? 'নিবেদিত অ্যাকাউন্ট ম্যানেজার' :
                  currentLanguage === 'ta' ? 'அர்ப்பணிப்புள்ள கணக்கு மேலாளர்' :
                  'అంకిత ఖాతా నిర్వాహకుడు', included: true },
        { feature: currentLanguage === 'en' ? 'White-label Solutions' :
                  currentLanguage === 'hi' ? 'व्हाइट-लेबल समाधान' :
                  currentLanguage === 'bn' ? 'হোয়াইট-লেবেল সমাধান' :
                  currentLanguage === 'ta' ? 'வைட்-லேபல் தீர்வுகள்' :
                  'వైట్-లేబల్ సొల్యూషన్స్', included: true },
        { feature: currentLanguage === 'en' ? 'API Access' :
                  currentLanguage === 'hi' ? 'एपीआई एक्सेस' :
                  currentLanguage === 'bn' ? 'এপিআই অ্যাক্সেস' :
                  currentLanguage === 'ta' ? 'ஏபிஐ அணுகல்' :
                  'API యాక్సెస్', included: true },
        { feature: currentLanguage === 'en' ? 'Custom Integrations' :
                  currentLanguage === 'hi' ? 'कस्टम एकीकरण' :
                  currentLanguage === 'bn' ? 'কাস্টম ইন্টিগ্রেশন' :
                  currentLanguage === 'ta' ? 'தனிப்பயன் ஒருங்கிணைப்புகள்' :
                  'కస్టమ్ ఇంటిగ్రేషన్స్', included: true },
        { feature: currentLanguage === 'en' ? 'Advanced Team Analytics' :
                  currentLanguage === 'hi' ? 'उन्नत टीम विश्लेषिकी' :
                  currentLanguage === 'bn' ? 'উন্নত টিম বিশ্লেষণ' :
                  currentLanguage === 'ta' ? 'மேம்பட்ட குழு பகுப்பாய்வு' :
                  'అధునాతన టీమ్ అనలిటిక్స్', included: true },
        { feature: currentLanguage === 'en' ? 'Multi-user Dashboard' :
                  currentLanguage === 'hi' ? 'मल्टी-यूजर डैशबोर्ड' :
                  currentLanguage === 'bn' ? 'মাল্টি-ইউজার ড্যাশবোর্ড' :
                  currentLanguage === 'ta' ? 'பல பயனர் டாஷ்போர்டு' :
                  'మల్టీ-యూజర్ డాష్‌బోర్డ్', included: true },
        { feature: currentLanguage === 'en' ? 'Priority Phone Support' :
                  currentLanguage === 'hi' ? 'प्राथमिकता फोन समर्थन' :
                  currentLanguage === 'bn' ? 'অগ্রাধিকার ফোন সহায়তা' :
                  currentLanguage === 'ta' ? 'முன்னுரிமை தொலைபேசி ஆதரவு' :
                  'ప్రాధాన్యత ఫోన్ మద్దతు', included: true },
        { feature: currentLanguage === 'en' ? 'Custom Training Sessions' :
                  currentLanguage === 'hi' ? 'कस्टम प्रशिक्षण सत्र' :
                  currentLanguage === 'bn' ? 'কাস্টম প্রশিক্ষণ সেশন' :
                  currentLanguage === 'ta' ? 'தனிப்பயன் பயிற்சி அமர்வுகள்' :
                  'కస్టమ్ ట్రైనింగ్ సెషన్స్', included: true },
        { feature: currentLanguage === 'en' ? 'SLA Guarantee (99.9% uptime)' :
                  currentLanguage === 'hi' ? 'एसएलए गारंटी (99.9% अपटाइम)' :
                  currentLanguage === 'bn' ? 'এসএলএ গ্যারান্টি (৯৯.৯% আপটাইম)' :
                  currentLanguage === 'ta' ? 'எஸ்எல்ஏ உத்தரவாதம் (99.9% அப்டைம்)' :
                  'SLA హామీ (99.9% అప్‌టైమ్)', included: true }
      ],
      buttonText: currentLanguage === 'en' ? 'Contact Sales' :
                  currentLanguage === 'hi' ? 'सेल्स से संपर्क करें' :
                  currentLanguage === 'bn' ? 'বিক্রয়ের সাথে যোগাযোগ করুন' :
                  currentLanguage === 'ta' ? 'விற்பனையைத் தொடர்பு கொள்ளவும்' :
                  'సేల్స్‌ను సంప్రదించండి',
      buttonStyle: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
    }
  ];

  const getBillingDiscount = (cycle: BillingCycle): string => {
    switch (cycle) {
      case 'quarterly':
        return 'Save 33%';
      case 'yearly':
        return 'Save 50%';
      default:
        return '';
    }
  };

  const formatPrice = (price: number): string => {
    if (price === 0) return currentLanguage === 'en' ? 'Free' :
                          currentLanguage === 'hi' ? 'मुफ्त' :
                          currentLanguage === 'bn' ? 'বিনামূল্যে' :
                          currentLanguage === 'ta' ? 'இலவசம்' :
                          'ఉచితం';
    return `₹${price.toLocaleString()}`;
  };

  const calculateSavings = (plan: SubscriptionPlan, cycle: BillingCycle): number => {
    if (!plan.originalPricing) return 0;
    return plan.originalPricing[cycle] - plan.pricing[cycle];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>
        
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' ? 'Choose Your ' :
               currentLanguage === 'hi' ? 'अपना ' :
               currentLanguage === 'bn' ? 'আপনার ' :
               currentLanguage === 'ta' ? 'உங்கள் ' :
               'మీ '}
              <span className="text-indigo-600">
                {currentLanguage === 'en' ? 'Perfect Plan' :
                 currentLanguage === 'hi' ? 'सही प्लान चुनें' :
                 currentLanguage === 'bn' ? 'নিখুঁত পরিকল্পনা বেছে নিন' :
                 currentLanguage === 'ta' ? 'சரியான திட்டத்தைத் தேர்ந்தெடுக்கவும்' :
                 'సరైన ప్రణాళికను ఎంచుకోండి'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {currentLanguage === 'en' ? 'Get access to AI-powered insurance recommendations, advanced analytics, and priority support. Start with our free plan and upgrade as you grow.' :
               currentLanguage === 'hi' ? 'एआई-संचालित बीमा सिफारिशों, उन्नत विश्लेषिकी और प्राथमिकता समर्थन तक पहुंच प्राप्त करें। हमारी मुफ्त योजना से शुरुआत करें और बढ़ते जाएं।' :
               currentLanguage === 'bn' ? 'এআই-চালিত বীমা সুপারিশ, উন্নত বিশ্লেষণ এবং অগ্রাধিকার সহায়তার অ্যাক্সেস পান। আমাদের বিনামূল্যে পরিকল্পনা দিয়ে শুরু করুন এবং বৃদ্ধির সাথে সাথে আপগ্রেড করুন।' :
               currentLanguage === 'ta' ? 'ஏஐ-இயக்கப்படும் காப்பீட்டு பரிந்துரைகள், மேம்பட்ட பகுப்பாய்வு மற்றும் முன்னுரிமை ஆதரவைப் பெறுங்கள். எங்கள் இலவச திட்டத்துடன் தொடங்கி வளர்ச்சியுடன் மேம்படுத்துங்கள்।' :
               'ఏఐ-ఆధారిత బీమా సిఫార్సులు, అధునాతన విశ్లేషణలు మరియు ప్రాధాన్యత మద్దతుకు యాక్సెస్ పొందండి. మా ఉచిత ప్రణాళికతో ప్రారంభించి, పెరుగుతున్న కొద్దీ అప్‌గ్రేడ్ చేయండి।'}
            </p>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gray-100 rounded-2xl p-2 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-1">
                  {(['monthly', 'quarterly', 'yearly'] as BillingCycle[]).map((cycle) => (
                    <button
                      key={cycle}
                      onClick={() => setBillingCycle(cycle)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all relative ${
                        billingCycle === cycle
                          ? 'bg-indigo-600 text-white shadow-lg'
                          : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="capitalize">
                        {cycle === 'monthly' ? (
                          currentLanguage === 'en' ? 'Monthly' :
                          currentLanguage === 'hi' ? 'मासिक' :
                          currentLanguage === 'bn' ? 'মাসিক' :
                          currentLanguage === 'ta' ? 'மாதாந்திர' :
                          'నెలవారీ'
                        ) : cycle === 'quarterly' ? (
                          currentLanguage === 'en' ? 'Quarterly' :
                          currentLanguage === 'hi' ? 'त्रैमासिक' :
                          currentLanguage === 'bn' ? 'ত্রৈমাসিক' :
                          currentLanguage === 'ta' ? 'காலாண்டு' :
                          'త్రైమాసిక'
                        ) : (
                          currentLanguage === 'en' ? 'Yearly' :
                          currentLanguage === 'hi' ? 'वार्षिक' :
                          currentLanguage === 'bn' ? 'বার্ষিক' :
                          currentLanguage === 'ta' ? 'வருடாந்திர' :
                          'వార్షిక'
                        )}
                      </span>
                      {getBillingDiscount(cycle) && (
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          {cycle === 'quarterly' ? (
                            currentLanguage === 'en' ? 'Save 33%' :
                            currentLanguage === 'hi' ? '33% बचाएं' :
                            currentLanguage === 'bn' ? '৩৩% সাশ্রয়' :
                            currentLanguage === 'ta' ? '33% சேமிக்கவும்' :
                            '33% ఆదా చేయండి'
                          ) : (
                            currentLanguage === 'en' ? 'Save 50%' :
                            currentLanguage === 'hi' ? '50% बचाएं' :
                            currentLanguage === 'bn' ? '৫০% সাশ্রয়' :
                            currentLanguage === 'ta' ? '50% சேமிக்கவும்' :
                            '50% ఆదా చేయండి'
                          )}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            const currentPrice = plan.pricing[billingCycle];
            const savings = calculateSavings(plan, billingCycle);

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-indigo-500 scale-105 transform' 
                    : 'hover:shadow-2xl transition-shadow'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>
                        {currentLanguage === 'en' ? 'Most Popular' :
                         currentLanguage === 'hi' ? 'सबसे लोकप्रिय' :
                         currentLanguage === 'bn' ? 'সবচেয়ে জনপ্রিয়' :
                         currentLanguage === 'ta' ? 'மிகவும் பிரபலமான' :
                         'అత్యంత ప্రాచుর్యం'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                    plan.id === 'basic' ? 'bg-gray-100' :
                    plan.id === 'premium' ? 'bg-blue-100' :
                    'bg-purple-100'
                  }`}>
                    <PlanIcon className={`h-8 w-8 ${
                      plan.id === 'basic' ? 'text-gray-600' :
                      plan.id === 'premium' ? 'text-blue-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {formatPrice(currentPrice)}
                      </span>
                      {currentPrice > 0 && (
                        <span className="text-gray-500 ml-2">
                          /{billingCycle === 'yearly' ? (
                            currentLanguage === 'en' ? 'year' :
                            currentLanguage === 'hi' ? 'वर्ष' :
                            currentLanguage === 'bn' ? 'বছর' :
                            currentLanguage === 'ta' ? 'வருடம்' :
                            'సంవత్సరం'
                          ) : billingCycle === 'quarterly' ? (
                            currentLanguage === 'en' ? 'quarter' :
                            currentLanguage === 'hi' ? 'त्रैमासिक' :
                            currentLanguage === 'bn' ? 'ত্রৈমাসিক' :
                            currentLanguage === 'ta' ? 'காலாண்டு' :
                            'త్రైమాసికం'
                          ) : (
                            currentLanguage === 'en' ? 'month' :
                            currentLanguage === 'hi' ? 'माह' :
                            currentLanguage === 'bn' ? 'মাস' :
                            currentLanguage === 'ta' ? 'மாதம்' :
                            'నెల'
                          )}
                        </span>
                      )}
                    </div>
                    
                    {savings > 0 && (
                      <div className="text-sm text-green-600 font-medium">
                        {currentLanguage === 'en' ? `Save ₹${savings.toLocaleString()} compared to monthly billing` :
                         currentLanguage === 'hi' ? `मासिक बिलिंग की तुलना में ₹${savings.toLocaleString()} बचाएं` :
                         currentLanguage === 'bn' ? `মাসিক বিলিংয়ের তুলনায় ৳${savings.toLocaleString()} সাশ্রয় করুন` :
                         currentLanguage === 'ta' ? `மாதாந்திர பில்லிங்குடன் ஒப்பிடும்போது ₹${savings.toLocaleString()} சேமிக்கவும்` :
                         `నెలవారీ బిల్లింగ్‌తో పోల్చితే ₹${savings.toLocaleString()} ఆదా చేయండి`}
                      </div>
                    )}
                    
                    {plan.originalPricing && plan.originalPricing[billingCycle] > currentPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ₹{plan.originalPricing[billingCycle].toLocaleString()}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {currentLanguage === 'en' ? "What's included:" :
                     currentLanguage === 'hi' ? 'क्या शामिल है:' :
                     currentLanguage === 'bn' ? 'কী অন্তর্ভুক্ত:' :
                     currentLanguage === 'ta' ? 'என்ன சேர்க்கப்பட்டுள்ளது:' :
                     'ఏం చేర్చబడింది:'}
                  </h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {currentLanguage === 'en' ? 'Why Choose BimaFy Subscription?' :
             currentLanguage === 'hi' ? 'BimaFy सब्सक्रिप्शन क्यों चुनें?' :
             currentLanguage === 'bn' ? 'কেন BimaFy সাবস্ক্রিপশন বেছে নেবেন?' :
             currentLanguage === 'ta' ? 'ஏன் BimaFy சந்தாவைத் தேர்ந்தெடுக்க வேண்டும்?' :
             'ఎందుకు BimaFy సబ్‌స్క్రిప్షన్ ఎంచుకోవాలి?'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'AI-Powered' :
                 currentLanguage === 'hi' ? 'एआई-संचालित' :
                 currentLanguage === 'bn' ? 'এআই-চালিত' :
                 currentLanguage === 'ta' ? 'ஏஐ-இயக்கப்படும்' :
                 'ఏఐ-ఆధారిత'}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' ? 'Advanced algorithms analyze your profile for personalized recommendations' :
                 currentLanguage === 'hi' ? 'उन्नत एल्गोरिदम व्यक्तिगत सिफारिशों के लिए आपकी प्रोफ़ाइल का विश्लेषण करते हैं' :
                 currentLanguage === 'bn' ? 'উন্নত অ্যালগরিদম ব্যক্তিগত সুপারিশের জন্য আপনার প্রোফাইল বিশ্লেষণ করে' :
                 currentLanguage === 'ta' ? 'மேம்பட்ட அல்காரிதங்கள் தனிப்பயனாக்கப்பட்ட பரிந்துரைகளுக்காக உங்கள் சுயவிவரத்தை பகுப்பாய்வு செய்கின்றன' :
                 'అధునాతన అల్గోరిదంలు వ్యక్తిగత సిఫార్సుల కోసం మీ ప్రొఫైల్‌ను విశ్లేషిస్తాయి'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-2xl inline-block mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'Expert Support' :
                 currentLanguage === 'hi' ? 'विशेषज्ञ समर्थन' :
                 currentLanguage === 'bn' ? 'বিশেষজ্ঞ সহায়তা' :
                 currentLanguage === 'ta' ? 'நிபுணர் ஆதரவு' :
                 'నిపుణుల మద్దతు'}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' ? '24/7 access to insurance experts and dedicated account managers' :
                 currentLanguage === 'hi' ? 'बीमा विशेषज्ञों और समर्पित खाता प्रबंधकों तक 24/7 पहुंच' :
                 currentLanguage === 'bn' ? 'বীমা বিশেষজ্ঞ এবং নিবেদিত অ্যাকাউন্ট ম্যানেজারদের কাছে ২৪/৭ অ্যাক্সেস' :
                 currentLanguage === 'ta' ? 'காப்பீட்டு நிபுணர்கள் மற்றும் அர்ப்பணிப்புள்ள கணக்கு மேலாளர்களுக்கு 24/7 அணுகல்' :
                 'బీమా నిపుణులు మరియు అంకిత ఖాతా నిర్వాహకులకు 24/7 యాక్సెస్'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-3 rounded-2xl inline-block mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'Market Insights' :
                 currentLanguage === 'hi' ? 'बाजार अंतर्दृष्टि' :
                 currentLanguage === 'bn' ? 'বাজার অন্তর্দৃষ্টি' :
                 currentLanguage === 'ta' ? 'சந்தை நுண்ணறிவு' :
                 'మార్కెట్ అంతర్దృష్టులు'}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' ? 'Real-time market data and premium insights to make informed decisions' :
                 currentLanguage === 'hi' ? 'सूचित निर्णय लेने के लिए रियल-टाइम बाजार डेटा और प्रीमियम अंतर्दृष्टि' :
                 currentLanguage === 'bn' ? 'সচেতন সিদ্ধান্ত নেওয়ার জন্য রিয়েল-টাইম বাজার ডেটা এবং প্রিমিয়াম অন্তর্দৃষ্টি' :
                 currentLanguage === 'ta' ? 'தகவலறிந்த முடிவுகள் எடுக்க நிகழ்நேர சந்தை தரவு மற்றும் பிரீமியம் நுண்ணறிவு' :
                 'సమాచారప్రకారమైన నిర్ణయాలు తీసుకోవడానికి రియల్-టైమ్ మార్కెట్ డేటా మరియు ప్రీమియం అంతర్దృష్టులు'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-2xl inline-block mb-4">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'Detailed Reports' :
                 currentLanguage === 'hi' ? 'विस्तृत रिपोर्ट' :
                 currentLanguage === 'bn' ? 'বিস্তারিত রিপোর্ট' :
                 currentLanguage === 'ta' ? 'விரிவான அறிக்கைகள்' :
                 'వివరణాత్మక రిపోర్ట్‌లు'}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' ? 'Comprehensive PDF reports and analytics for better understanding' :
                 currentLanguage === 'hi' ? 'बेहतर समझ के लिए व्यापक पीडीएफ रिपोर्ट और विश्लेषिकी' :
                 currentLanguage === 'bn' ? 'ভালো বোঝার জন্য ব্যাপক পিডিএফ রিপোর্ট এবং বিশ্লেষণ' :
                 currentLanguage === 'ta' ? 'சிறந்த புரிதலுக்காக விரிவான PDF அறிக்கைகள் மற்றும் பகுப்பாய்வு' :
                 'మెరుగైన అవగాహన కోసం సమగ్ర PDF రిపోర్ట్‌లు మరియు అనలిటిక్స్'}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {currentLanguage === 'en' ? 'Frequently Asked Questions' :
             currentLanguage === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' :
             currentLanguage === 'bn' ? 'প্রায়শই জিজ্ঞাসিত প্রশ্ন' :
             currentLanguage === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' :
             'తరచుగా అడిగే ప్రశ్నలు'}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'Can I switch plans anytime?' :
                 currentLanguage === 'hi' ? 'क्या मैं कभी भी प्लान बदल सकता हूं?' :
                 currentLanguage === 'bn' ? 'আমি কি যেকোনো সময় পরিকল্পনা পরিবর্তন করতে পারি?' :
                 currentLanguage === 'ta' ? 'நான் எப்போது வேண்டுமானாலும் திட்டங்களை மாற்ற முடியுமா?' :
                 'నేను ఎప్పుడైనా ప్రణాళికలను మార్చగలనా?'}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {currentLanguage === 'en' ? 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.' :
                 currentLanguage === 'hi' ? 'हां! आप किसी भी समय अपना प्लान अपग्रेड या डाउनग्रेड कर सकते हैं। परिवर्तन आपके अगले बिलिंग चक्र में दिखाई देंगे।' :
                 currentLanguage === 'bn' ? 'হ্যাঁ! আপনি যেকোনো সময় আপনার পরিকল্পনা আপগ্রেড বা ডাউনগ্রেড করতে পারেন। পরিবর্তনগুলি আপনার পরবর্তী বিলিং চক্রে প্রতিফলিত হবে।' :
                 currentLanguage === 'ta' ? 'ஆம்! நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் திட்டத்தை மேம்படுத்தலாம் அல்லது தரம் குறைக்கலாம். மாற்றங்கள் உங்கள் அடுத்த பில்லிங் சுழற்சியில் பிரதிபலிக்கும்।' :
                 'అవును! మీరు ఎప్పుడైనా మీ ప్రణాళికను అప్‌గ్రేడ్ లేదా డౌన్‌గ్రేడ్ చేయవచ్చు. మార్పులు మీ తదుపరి బిల్లింగ్ సైకిల్‌లో ప్రతిబింబిస్తాయి।'}
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'Is there a free trial?' :
                 currentLanguage === 'hi' ? 'क्या कोई मुफ्त ट्रायल है?' :
                 currentLanguage === 'bn' ? 'কি কোনো বিনামূল্যে ট্রায়াল আছে?' :
                 currentLanguage === 'ta' ? 'இলவச சோதனை உள்ளதா?' :
                 'ఉచిత ట్రయల్ ఉందా?'}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' ? 'Premium and Enterprise plans come with a 14-day free trial. No credit card required to start.' :
                 currentLanguage === 'hi' ? 'प्रीमियम और एंटरप्राइज प्लान 14-दिन के मुफ्त ट्रायल के साथ आते हैं। शुरुआत के लिए क्रेडिट कार्ड की आवश्यकता नहीं।' :
                 currentLanguage === 'bn' ? 'প্রিমিয়াম এবং এন্টারপ্রাইজ পরিকল্পনা ১৪-দিনের বিনামূল্যে ট্রায়ালের সাথে আসে। শুরু করতে ক্রেডিট কার্ডের প্রয়োজন নেই।' :
                 currentLanguage === 'ta' ? 'பிரீமியம் மற்றும் நிறுவன திட்டங்கள் 14-நாள் இலவச சோதனையுடன் வருகின்றன. தொடங்க கிரெடிட் கார்டு தேவையில்லை।' :
                 'ప్రీమియం మరియు ఎంటర్‌ప్రైజ్ ప్రణాళికలు 14-రోజుల ఉచిత ట్రయల్‌తో వస్తాయి. ప్రారంభించడానికి క్రెడిట్ కార్డ్ అవసరం లేదు।'}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'What payment methods do you accept?' :
                 currentLanguage === 'hi' ? 'आप कौन से भुगتान तरीके स्वीకार करते हैं?' :
                 currentLanguage === 'bn' ? 'আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?' :
                 currentLanguage === 'ta' ? 'நீங்கள் எந்த கட்டண முறைகளை ஏற்றுக்கொள்கிறீர்கள்?' :
                 'మీరు ఏ చెల్లింపు పద్ధతులను అంగీకరిస్తారు?'}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {currentLanguage === 'en' ? 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets.' :
                 currentLanguage === 'hi' ? 'हम सभी प्रमुख क्रेडिट कार्ड, डेबिट कार्ड, यूपीआई, नेट बैंकिंग और डिजिटल वॉलेट स्वीकार करते हैं।' :
                 currentLanguage === 'bn' ? 'আমরা সমস্ত প্রধান ক্রেডিট কার্ড, ডেবিট কার্ড, ইউপিআই, নেট ব্যাংকিং এবং ডিজিটাল ওয়ালেট গ্রহণ করি।' :
                 currentLanguage === 'ta' ? 'நாங்கள் அனைத்து முக்கிய கிரெடிட் கார்டுகள், டெபிட் கார்டுகள், UPI, நெட் பேங்கிங் மற்றும் டிஜிட்டல் வாலெட்டுகளை ஏற்றுக்கொள்கிறோம்।' :
                 'మేము అన్ని ప్రధాన క్రెడిట్ కార్డులు, డెబిట్ కార్డులు, UPI, నెట్ బ్యాంకింగ్ మరియు డిజిటల్ వాలెట్లను అంగీకరిస్తాము।'}
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">
                {currentLanguage === 'en' ? 'Can I cancel anytime?' :
                 currentLanguage === 'hi' ? 'क्या मैं कभी भी रद्द कर सकता हूं?' :
                 currentLanguage === 'bn' ? 'আমি কি যেকোনো সময় বাতিল করতে পারি?' :
                 currentLanguage === 'ta' ? 'நான் எப்போது வேண்டுமானாலும் ரத்து செய்ய முடியுமா?' :
                 'నేను ఎప్పుడైనా రద్దు చేయగలనా?'}
              </h4>
              <p className="text-gray-600 text-sm">
                {currentLanguage === 'en' ? 'Absolutely! You can cancel your subscription at any time. Your access will continue until the end of your billing period.' :
                 currentLanguage === 'hi' ? 'बिल्कुल! आप किसी भी समय अपना सब्सक्रिप्शन रद्द कर सकते हैं। आपकी पहुंच आपकी बिलिंग अवधि के अंत तक जारी रहेगी।' :
                 currentLanguage === 'bn' ? 'অবশ্যই! আপনি যেকোনো সময় আপনার সাবস্ক্রিপশন বাতিল করতে পারেন। আপনার বিলিং পিরিয়ডের শেষ পর্যন্ত আপনার অ্যাক্সেস অব্যাহত থাকবে।' :
                 currentLanguage === 'ta' ? 'முற்றிலும்! நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் சந்தாவை ரத்து செய்யலாம். உங்கள் பில்லிங் காலம் முடிவடையும் வரை உங்கள் அணுகல் தொடரும்।' :
                 'ఖచ్చితంగా! మీరు ఎప్పుడైనా మీ సబ్‌స్క్రిప్షన్‌ను రద్దు చేయవచ్చు. మీ బిల్లింగ్ పీరియడ్ ముగిసే వరకు మీ యాక్సెస్ కొనసాగుతుంది।'}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {currentLanguage === 'en' ? 'Ready to Get Started?' :
             currentLanguage === 'hi' ? 'शुरुआत के लिए तैयार हैं?' :
             currentLanguage === 'bn' ? 'শুরু করতে প্রস্তুত?' :
             currentLanguage === 'ta' ? 'தொடங்க தயாரா?' :
             'ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?'}
          </h3>
          <p className="text-gray-600 mb-8">
            {currentLanguage === 'en' ? 'Join thousands of users who trust BimaFy for their insurance needs' :
             currentLanguage === 'hi' ? 'हजারों उपयोगकर्ताओं में शामिल हों जो अपनी बीमा आवश्यकताओं के लिए BimaFy पर भरोसा करते हैं' :
             currentLanguage === 'bn' ? 'হাজার হাজার ব্যবহারকারীর সাথে যোগ দিন যারা তাদের বীমার প্রয়োজনে BimaFy-কে বিশ্বাস করেন' :
             currentLanguage === 'ta' ? 'தங்கள் காப்பீட்டு தேவைகளுக்காக BimaFy-ஐ நம்பும் ஆயிரக்கணக்கான பயனர்களுடன் சேருங்கள்' :
             'వారి బీమా అవసరాలకు BimaFy-పై నమ్మకం ఉంచే వేలాది మంది వినియోగదారులతో చేరండి'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
              {currentLanguage === 'en' ? 'Start Free Trial' :
               currentLanguage === 'hi' ? 'मुफ्त ट्रायल शुरू करें' :
               currentLanguage === 'bn' ? 'বিনামূল্যে ট্রায়াল শুরু করুন' :
               currentLanguage === 'ta' ? 'இலவச சோதனை தொடங்கவும்' :
               'ఉచిత ట్రయల్ ప్రారంభించండి'}
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
              {currentLanguage === 'en' ? 'Contact Sales' :
               currentLanguage === 'hi' ? 'सेल्स से संपर्क करें' :
               currentLanguage === 'bn' ? 'বিক্রয়ের সাথে যোগাযোগ করুন' :
               currentLanguage === 'ta' ? 'விற்பனையைத் தொடர்பு கொள்ளவும்' :
               'సేల్స్‌ను సంప్రదించండి'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
