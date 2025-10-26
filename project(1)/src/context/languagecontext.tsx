// utils/translations.ts

type SupportedLang = "en" | "hi" | "bn" | "ta" | "te";

interface TranslationKeys {
  title: string;
  subtitle: string;
  description: string;
  getStarted: string;
  tryChat: string;
  aiRec: string;
  aiRecDesc: string;
  langs: string;
  langsDesc: string;
  risk: string;
  riskDesc: string;
  pool: string;
  poolDesc: string;
}

const translations: Record<SupportedLang, TranslationKeys> = {
  en: {
    title: "AI-Powered Insurance",
    subtitle: "Made Simple",
    description:
      "Get personalized insurance recommendations tailored to your age, budget, and family needs. Available in your regional language with AI-powered explanations.",
    getStarted: "Get Started",
    tryChat: "Try AI Chat",
    aiRec: "AI Recommendations",
    aiRecDesc: "Smart suggestions based on your profile",
    langs: "Regional Languages",
    langsDesc: "Hindi, Bengali, Tamil, Telugu support",
    risk: "Risk Analysis",
    riskDesc: "Visual insights and scoring",
    pool: "Community Pools",
    poolDesc: "Group discounts for better rates",
  },
  hi: {
    title: "एआई-संचालित बीमा",
    subtitle: "सरल बनाया गया",
    description:
      "आपकी उम्र, बजट और परिवार की ज़रूरतों के अनुसार व्यक्तिगत बीमा सिफारिशें प्राप्त करें। आपकी क्षेत्रीय भाषा में एआई आधारित व्याख्या उपलब्ध।",
    getStarted: "शुरू करें",
    tryChat: "एआई चैट आज़माएँ",
    aiRec: "एआई सिफारिशें",
    aiRecDesc: "आपकी प्रोफ़ाइल के अनुसार सुझाव",
    langs: "क्षेत्रीय भाषाएँ",
    langsDesc: "हिंदी, बंगाली, तमिल, तेलुगु समर्थन",
    risk: "जोखिम विश्लेषण",
    riskDesc: "दृश्य अंतर्दृष्टि और स्कोरिंग",
    pool: "समुदाय समूह",
    poolDesc: "बेहतर दरों के लिए समूह छूट",
  },
  bn: {
    title: "এআই চালিত বীমা",
    subtitle: "সহজ করে তোলা হয়েছে",
    description:
      "আপনার বয়স, বাজেট এবং পরিবারের প্রয়োজন অনুযায়ী ব্যক্তিগত বীমা পরামর্শ পান। আপনার আঞ্চলিক ভাষায় এআই ভিত্তিক ব্যাখ্যা উপলব্ধ।",
    getStarted: "শুরু করুন",
    tryChat: "এআই চ্যাট চেষ্টা করুন",
    aiRec: "এআই সুপারিশ",
    aiRecDesc: "আপনার প্রোফাইল অনুযায়ী স্মার্ট পরামর্শ",
    langs: "আঞ্চলিক ভাষা",
    langsDesc: "হিন্দি, বাংলা, তামিল, তেলুগু সমর্থন",
    risk: "ঝুঁকি বিশ্লেষণ",
    riskDesc: "দৃশ্যমান অন্তর্দৃষ্টি এবং স্কোরিং",
    pool: "কমিউনিটি গ্রুপ",
    poolDesc: "ভালো হারের জন্য গ্রুপ ছাড়",
  },
  ta: {
    title: "ஏஐ இயக்கப்படும் காப்பீடு",
    subtitle: "எளிமையாக்கப்பட்டது",
    description:
      "உங்கள் வயது, பட்ஜெட் மற்றும் குடும்ப தேவைகளுக்கு ஏற்ப தனிப்பயன் காப்பீட்டு பரிந்துரைகளைப் பெறுங்கள். உங்கள் பிராந்திய மொழியில் ஏஐ அடிப்படையிலான விளக்கம் கிடைக்கும்.",
    getStarted: "தொடங்கவும்",
    tryChat: "ஏஐ அரட்டை முயற்சி செய்யவும்",
    aiRec: "ஏஐ பரிந்துரைகள்",
    aiRecDesc: "உங்கள் சுயவிவரத்தின் அடிப்படையில் பரிந்துரைகள்",
    langs: "பிராந்திய மொழிகள்",
    langsDesc: "இந்தி, பெங்காலி, தமிழ், தெலுங்கு ஆதரவு",
    risk: "அபாய ஆய்வு",
    riskDesc: "காட்சி பார்வைகள் மற்றும் மதிப்பீடு",
    pool: "சமூகக் குழுக்கள்",
    poolDesc: "சிறந்த விலைக்கான குழு தள்ளுபடிகள்",
  },
  te: {
    title: "ఏఐ ఆధారిత బీమా",
    subtitle: "సులభతరం చేయబడింది",
    description:
      "మీ వయస్సు, బడ్జెట్ మరియు కుటుంబ అవసరాలకు అనుగుణంగా వ్యక్తిగత బీమా సిఫార్సులు పొందండి. మీ ప్రాంతీయ భాషలో ఏఐ ఆధారిత వివరణ అందుబాటులో ఉంది.",
    getStarted: "ప్రారంభించండి",
    tryChat: "ఏఐ చాట్ ప్రయత్నించండి",
    aiRec: "ఏఐ సిఫార్సులు",
    aiRecDesc: "మీ ప్రొఫైల్ ఆధారంగా స్మార్ట్ సలహాలు",
    langs: "ప్రాంతీయ భాషలు",
    langsDesc: "హిందీ, బెంగాళీ, తమిళం, తెలుగు మద్దతు",
    risk: "రిస్క్ విశ్లేషణ",
    riskDesc: "దృశ్య అంతర్దృష్టులు మరియు స్కోరింగ్",
    pool: "కమ్యూనిటీ గ్రూపులు",
    poolDesc: "మంచి రేట్ల కోసం గ్రూప్ డిస్కౌంట్లు",
  },
};

// Translation getter with type safety
export function getTranslation(lang: SupportedLang, key: keyof TranslationKeys): string {
  return translations[lang]?.[key] || translations["en"][key] || key;
}

export default translations;
