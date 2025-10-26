export type SupportedLanguage = 'en' | 'hi' | 'bn' | 'ta' | 'te';

export interface TranslationKeys {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  tryAiChat: string;
  aiRecommendations: string;
  aiRecommendationsDesc: string;
  regionalLanguages: string;
  regionalLanguagesDesc: string;
  riskAnalysis: string;
  riskAnalysisDesc: string;
  communityPools: string;
  
  // Insurance Recommendations
  personalizedPlan: string;
  personalizedPlanDesc: string;
  tellUsAbout: string;
  age: string;
  monthlyIncome: string;
  selectIncome: string;
  dependents: string;
  familyMembers: string;
  occupation: string;
  selectOccupation: string;
  region: string;
  selectRegion: string;
  existingPolicies: string;
  getAiRecommendations: string;
  aiRecommendedPlans: string;
  
  // Risk Assessment
  riskAssessment: string;
  riskAssessmentDesc: string;
  yourRiskScore: string;
  lowRisk: string;
  mediumRisk: string;
  highRisk: string;
  riskBreakdown: string;
  aiInsights: string;
  retakeAssessment: string;
  
  // Policy Comparison
  comparePlans: string;
  comparePlansDesc: string;
  selectPolicies: string;
  policyComparison: string;
  downloadPdf: string;
  monthlyPremium: string;
  coverageAmount: string;
  rating: string;
  keyFeatures: string;
  notIncluded: string;
  
  // Community Pools
  communityInsurancePools: string;
  communityPoolsDesc: string;
  lowerPremiums: string;
  lowerPremiumsDesc: string;
  betterCoverage: string;
  betterCoverageDesc: string;
  communitySupport: string;
  communitySupportDesc: string;
  joinPool: string;
  learnMore: string;
  
  // WhatsApp Integration
  stayConnected: string;
  whatsappDesc: string;
  policyReminders: string;
  claimUpdates: string;
  policyUpdatesTitle: string;
  quickSupport: string;
  getStartedWhatsapp: string;
  whatsappNumber: string;
  subscribeWhatsapp: string;
  
  // Footer
  footerDescription: string;
  quickLinks: string;
  recommendations: string;
  riskProfile: string;
  comparePlansLink: string;
  community: string;
  support: string;
  helpCenter: string;
  contactUs: string;
  privacyPolicy: string;
  termsOfService: string;
  footerCopyright: string;
  
  // Common
  features: string;
  coverage: string;
  premium: string;
  selectPlan: string;
  loading: string;
  submit: string;
  cancel: string;
  close: string;
  next: string;
  previous: string;
  
  // Subscription
  choosePerfectPlan: string;
  subscriptionDescription: string;
  monthlyBilling: string;
  quarterlyBilling: string;
  yearlyBilling: string;
  save33Percent: string;
  save50Percent: string;
  mostPopular: string;
  basicPlan: string;
  basicPlanDesc: string;
  premiumPlan: string;
  premiumPlanDesc: string;
  enterprisePlan: string;
  enterprisePlanDesc: string;
  getStartedFree: string;
  startPremiumTrial: string;
  contactSales: string;
  freeText: string;
  perMonth: string;
  perQuarter: string;
  perYear: string;
  saveComparedToMonthly: string;
  whatsIncluded: string;
  basicAiRecommendations: string;
  compareUpTo3Policies: string;
  riskAssessmentFeature: string;
  regionalLanguageSupport: string;
  whatsappNotifications: string;
  prioritySupport: string;
  advancedAnalytics: string;
  premiumInsights: string;
  unlimitedComparisons: string;
  dedicatedAccountManager: string;
  everythingInBasic: string;
  advancedAiRecommendations: string;
  unlimitedPolicyComparisons: string;
  priority24x7Support: string;
  detailedAnalyticsDashboard: string;
  premiumMarketInsights: string;
  customRiskReports: string;
  emailSmsAlerts: string;
  everythingInPremium: string;
  whiteLabelSolutions: string;
  apiAccess: string;
  customIntegrations: string;
  advancedTeamAnalytics: string;
  multiUserDashboard: string;
  priorityPhoneSupport: string;
  customTrainingSessions: string;
  slaGuarantee: string;
  whyChooseBimafySubscription: string;
  aiPoweredBenefit: string;
  aiPoweredBenefitDesc: string;
  expertSupportBenefit: string;
  expertSupportBenefitDesc: string;
  marketInsightsBenefit: string;
  marketInsightsBenefitDesc: string;
  detailedReportsBenefit: string;
  detailedReportsBenefitDesc: string;
  faqTitle: string;
  canSwitchPlans: string;
  canSwitchPlansAnswer: string;
  isThereFreeTrialQuestion: string;
  isThereFreeTrialAnswer: string;
  whatPaymentMethodsQuestion: string;
  whatPaymentMethodsAnswer: string;
  canCancelAnytimeQuestion: string;
  canCancelAnytimeAnswer: string;
  readyToGetStartedTitle: string;
  readyToGetStartedDesc: string;
  startFreeTrial: string;
}

export const translations: Record<SupportedLanguage, TranslationKeys> = {
  en: {
    // Hero Section
    heroTitle: "AI-Powered Insurance",
    heroSubtitle: "Made Simple",
    heroDescription: "Get personalized insurance recommendations tailored to your age, budget, and family needs. Available in your regional language with AI-powered explanations.",
    getStarted: "Get Started",
    tryAiChat: "Try AI Chat",
    aiRecommendations: "AI Recommendations",
    aiRecommendationsDesc: "Smart suggestions based on your profile",
    regionalLanguages: "Regional Languages",
    regionalLanguagesDesc: "Hindi, Bengali, Tamil, Telugu support",
    riskAnalysis: "Risk Analysis",
    riskAnalysisDesc: "Visual insights and scoring",
    communityPools: "Community Pools",
    communityPoolsDesc: "Group discounts for better rates",
    
    // Insurance Recommendations
    personalizedPlan: "Get Your Personalized Insurance Plan",
    personalizedPlanDesc: "Our AI analyzes your profile to recommend the perfect insurance coverage for your needs and budget.",
    tellUsAbout: "Tell us about yourself",
    age: "Age",
    monthlyIncome: "Monthly Income",
    selectIncome: "Select income range",
    dependents: "Number of Dependents",
    familyMembers: "Family members",
    occupation: "Occupation",
    selectOccupation: "Select occupation",
    region: "Region",
    selectRegion: "Select your region",
    existingPolicies: "Existing Insurance Policies (if any)",
    getAiRecommendations: "Get AI Recommendations",
    aiRecommendedPlans: "Your AI-Recommended Plans",
    
    // Risk Assessment
    riskAssessment: "Risk Assessment & Analysis",
    riskAssessmentDesc: "Get a comprehensive risk profile with visual insights to understand your insurance needs better.",
    yourRiskScore: "Your Risk Score",
    lowRisk: "Low Risk Profile",
    mediumRisk: "Medium Risk Profile",
    highRisk: "High Risk Profile",
    riskBreakdown: "Risk Breakdown",
    aiInsights: "AI Insights & Recommendations",
    retakeAssessment: "Retake Assessment",
    
    // Policy Comparison
    comparePlans: "Compare Insurance Plans",
    comparePlansDesc: "Side-by-side comparison of coverage, premiums, and benefits with downloadable reports.",
    selectPolicies: "Select policies to compare (up to 3):",
    policyComparison: "Policy Comparison",
    downloadPdf: "Download PDF Report",
    monthlyPremium: "Monthly Premium",
    coverageAmount: "Coverage Amount",
    rating: "Rating",
    keyFeatures: "Key Features",
    notIncluded: "Not Included",
    
    // Community Pools
    communityInsurancePools: "Community Insurance Pools",
    lowerPremiums: "Lower Premiums",
    lowerPremiumsDesc: "Save 30-45% on insurance premiums through collective bargaining",
    betterCoverage: "Better Coverage",
    betterCoverageDesc: "Access specialized coverage designed for your profession",
    communitySupport: "Community Support",
    communitySupportDesc: "Share experiences and get help from peers in similar situations",
    joinPool: "Join Pool",
    learnMore: "Learn More",
    
    // WhatsApp Integration
    stayConnected: "Stay Connected via WhatsApp",
    whatsappDesc: "Get instant policy updates, claim notifications, and support through WhatsApp - the app you already use every day.",
    policyReminders: "Policy Reminders",
    claimUpdates: "Claim Updates",
    policyUpdatesTitle: "Policy Updates",
    quickSupport: "Quick Support",
    getStartedWhatsapp: "Get Started with WhatsApp Notifications",
    whatsappNumber: "WhatsApp Number",
    subscribeWhatsapp: "Subscribe to WhatsApp",
    
    // Footer
    footerDescription: "Democratizing insurance access for all Indians through AI-powered recommendations, simplified explanations, and community-driven solutions.",
    quickLinks: "Quick Links",
    recommendations: "Recommendations",
    riskProfile: "Risk Assessment",
    comparePlansLink: "Compare Plans",
    community: "Community Pools",
    support: "Support",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    footerCopyright: "© 2024 BimaFy. All rights reserved. Empowering every Indian with smart insurance decisions.",
    
    // Common
    features: "Features",
    coverage: "Coverage",
    premium: "Premium",
    selectPlan: "Select This Plan",
    loading: "Loading...",
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",
    next: "Next",
    previous: "Previous",
    
    // Subscription
    choosePerfectPlan: "Choose Your Perfect Plan",
    subscriptionDescription: "Get access to AI-powered insurance recommendations, advanced analytics, and priority support. Start with our free plan and upgrade as you grow.",
    monthlyBilling: "monthly",
    quarterlyBilling: "quarterly", 
    yearlyBilling: "yearly",
    save33Percent: "Save 33%",
    save50Percent: "Save 50%",
    mostPopular: "Most Popular",
    basicPlan: "Basic",
    basicPlanDesc: "Perfect for individuals starting their insurance journey",
    premiumPlan: "Premium",
    premiumPlanDesc: "Ideal for individuals and small families seeking comprehensive coverage",
    enterprisePlan: "Enterprise",
    enterprisePlanDesc: "Complete solution for businesses and insurance professionals",
    getStartedFree: "Get Started Free",
    startPremiumTrial: "Start Premium Trial",
    contactSales: "Contact Sales",
    freeText: "Free",
    perMonth: "/month",
    perQuarter: "/quarter",
    perYear: "/year",
    saveComparedToMonthly: "Save ₹{amount} compared to monthly billing",
    whatsIncluded: "What's included:",
    basicAiRecommendations: "Basic AI Recommendations",
    compareUpTo3Policies: "Compare up to 3 policies",
    riskAssessmentFeature: "Risk Assessment",
    regionalLanguageSupport: "Regional Language Support",
    whatsappNotifications: "WhatsApp Notifications",
    prioritySupport: "Priority Support",
    advancedAnalytics: "Advanced Analytics",
    premiumInsights: "Premium Insights",
    unlimitedComparisons: "Unlimited Comparisons",
    dedicatedAccountManager: "Dedicated Account Manager",
    everythingInBasic: "Everything in Basic",
    advancedAiRecommendations: "Advanced AI Recommendations",
    unlimitedPolicyComparisons: "Unlimited Policy Comparisons",
    priority24x7Support: "Priority Support (24/7)",
    detailedAnalyticsDashboard: "Detailed Analytics Dashboard",
    premiumMarketInsights: "Premium Market Insights",
    customRiskReports: "Custom Risk Reports",
    emailSmsAlerts: "Email & SMS Alerts",
    everythingInPremium: "Everything in Premium",
    whiteLabelSolutions: "White-label Solutions",
    apiAccess: "API Access",
    customIntegrations: "Custom Integrations",
    advancedTeamAnalytics: "Advanced Team Analytics",
    multiUserDashboard: "Multi-user Dashboard",
    priorityPhoneSupport: "Priority Phone Support",
    customTrainingSessions: "Custom Training Sessions",
    slaGuarantee: "SLA Guarantee (99.9% uptime)",
    whyChooseBimafySubscription: "Why Choose BimaFy Subscription?",
    aiPoweredBenefit: "AI-Powered",
    aiPoweredBenefitDesc: "Advanced algorithms analyze your profile for personalized recommendations",
    expertSupportBenefit: "Expert Support",
    expertSupportBenefitDesc: "24/7 access to insurance experts and dedicated account managers",
    marketInsightsBenefit: "Market Insights",
    marketInsightsBenefitDesc: "Real-time market data and premium insights to make informed decisions",
    detailedReportsBenefit: "Detailed Reports",
    detailedReportsBenefitDesc: "Comprehensive PDF reports and analytics for better understanding",
    faqTitle: "Frequently Asked Questions",
    canSwitchPlans: "Can I switch plans anytime?",
    canSwitchPlansAnswer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    isThereFreeTrialQuestion: "Is there a free trial?",
    isThereFreeTrialAnswer: "Premium and Enterprise plans come with a 14-day free trial. No credit card required to start.",
    whatPaymentMethodsQuestion: "What payment methods do you accept?",
    whatPaymentMethodsAnswer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets.",
    canCancelAnytimeQuestion: "Can I cancel anytime?",
    canCancelAnytimeAnswer: "Absolutely! You can cancel your subscription at any time. Your access will continue until the end of your billing period.",
    readyToGetStartedTitle: "Ready to Get Started?",
    readyToGetStartedDesc: "Join thousands of users who trust BimaFy for their insurance needs",
    startFreeTrial: "Start Free Trial"
  },
  
  hi: {
    // Hero Section
    heroTitle: "एआई-संचालित बीमा",
    heroSubtitle: "सरल बनाया गया",
    heroDescription: "आपकी उम्र, बजट और परिवार की जरूरतों के अनुसार व्यक्तिगत बीमा सिफारिशें प्राप्त करें। एआई-संचालित व्याख्या के साथ आपकी क्षेत्रीय भाषा में उपलब्ध।",
    getStarted: "शुरू करें",
    tryAiChat: "एआई चैट आज़माएं",
    aiRecommendations: "एआई सिफारिशें",
    aiRecommendationsDesc: "आपकी प्रोफ़ाइल के आधार पर स्मार्ट सुझाव",
    regionalLanguages: "क्षेत्रीय भाषाएं",
    regionalLanguagesDesc: "हिंदी, बंगाली, तमिल, तेलुगु समर्थन",
    riskAnalysis: "जोखिम विश्लेषण",
    riskAnalysisDesc: "दृश्य अंतर्दृष्टि और स्कोरिंग",
    communityPools: "समुदायिक पूल",
    communityPoolsDesc: "बेहतर दरों के लिए समूह छूट",
    
    // Insurance Recommendations
    personalizedPlan: "अपना व्यक्तिगत बीमा प्लान प्राप्त करें",
    personalizedPlanDesc: "हमारा एआई आपकी जरूरतों और बजट के लिए सही बीमा कवरेज की सिफारिश करने के लिए आपकी प्रोफ़ाइल का विश्लेषण करता है।",
    tellUsAbout: "अपने बारे में बताएं",
    age: "उम्र",
    monthlyIncome: "मासिक आय",
    selectIncome: "आय सीमा चुनें",
    dependents: "आश्रितों की संख्या",
    familyMembers: "परिवार के सदस्य",
    occupation: "व्यवसाय",
    selectOccupation: "व्यवसाय चुनें",
    region: "क्षेत्र",
    selectRegion: "अपना क्षेत्र चुनें",
    existingPolicies: "मौजूदा बीमा पॉलिसियां (यदि कोई हो)",
    getAiRecommendations: "एआई सिफारिशें प्राप्त करें",
    aiRecommendedPlans: "आपकी एआई-अनुशंसित योजनाएं",
    
    // Risk Assessment
    riskAssessment: "जोखिम मूल्यांकन और विश्लेषण",
    riskAssessmentDesc: "अपनी बीमा जरूरतों को बेहतर ढंग से समझने के लिए दृश्य अंतर्दृष्टि के साथ एक व्यापक जोखिम प्रोफ़ाइल प्राप्त करें।",
    yourRiskScore: "आपका जोखिम स्कोर",
    lowRisk: "कम जोखिम प्रोफ़ाइल",
    mediumRisk: "मध्यम जोखिम प्रोफ़ाइल",
    highRisk: "उच्च जोखिम प्रोफ़ाइल",
    riskBreakdown: "जोखिम विवरण",
    aiInsights: "एआई अंतर्दृष्टि और सिफारिशें",
    retakeAssessment: "मूल्यांकन दोबारा करें",
    
    // Policy Comparison
    comparePlans: "बीमा योजनाओं की तुलना करें",
    comparePlansDesc: "डाउनलोड करने योग्य रिपोर्ट के साथ कवरेज, प्रीमियम और लाभों की साइड-बाई-साइड तुलना।",
    selectPolicies: "तुलना के लिए पॉलिसियां चुनें (अधिकतम 3):",
    policyComparison: "पॉलिसी तुलना",
    downloadPdf: "पीडीएफ रिपोर्ट डाउनलोड करें",
    monthlyPremium: "मासिक प्रीमियम",
    coverageAmount: "कवरेज राशि",
    rating: "रेटिंग",
    keyFeatures: "मुख्य विशेषताएं",
    notIncluded: "शामिल नहीं",
    
    // Community Pools
    communityInsurancePools: "समुदायिक बीमा पूल",
    lowerPremiums: "कम प्रीमियम",
    lowerPremiumsDesc: "सामूहिक सौदेबाजी के माध्यम से बीमा प्रीमियम पर 30-45% की बचत करें",
    betterCoverage: "बेहतर कवरेज",
    betterCoverageDesc: "अपने व्यवसाय के लिए डिज़ाइन किए गए विशेष कवरेज तक पहुंच",
    communitySupport: "समुदायिक सहायता",
    communitySupportDesc: "अनुभव साझा करें और समान स्थितियों में साथियों से सहायता प्राप्त करें",
    joinPool: "पूल में शामिल हों",
    learnMore: "और जानें",
    
    // WhatsApp Integration
    stayConnected: "व्हाट्सऐप के माध्यम से जुड़े रहें",
    whatsappDesc: "व्हाट्सऐप के माध्यम से तत्काल पॉलिसी अपडेट, क्लेम नोटिफिकेशन और सहायता प्राप्त करें - वह ऐप जिसका आप पहले से ही रोज़ाना उपयोग करते हैं।",
    policyReminders: "पॉलिसी रिमाइंडर",
    claimUpdates: "क्लेम अपडेट",
    policyUpdatesTitle: "पॉलिसी अपडेट",
    quickSupport: "त्वरित सहायता",
    getStartedWhatsapp: "व्हाट्सऐप नोटिफिकेशन के साथ शुरुआत करें",
    whatsappNumber: "व्हाट्सऐप नंबर",
    subscribeWhatsapp: "व्हाट्सऐप की सदस्यता लें",
    
    // Footer
    footerDescription: "एआई-संचालित सिफारिशों, सरलीकृत व्याख्याओं और समुदाय-संचालित समाधानों के माध्यम से सभी भारतीयों के लिए बीमा पहुंच का लोकतंत्रीकरण।",
    quickLinks: "त्वरित लिंक",
    recommendations: "सिफारिशें",
    riskProfile: "जोखिम मूल्यांकन",
    comparePlansLink: "योजनाओं की तुलना करें",
    community: "समुदायिक पूल",
    support: "सहायता",
    helpCenter: "सहायता केंद्र",
    contactUs: "संपर्क करें",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    footerCopyright: "© 2024 BimaFy। सभी अधिकार सुरक्षित। स्मार्ट बीमा निर्णयों के साथ हर भारतीय को सशक्त बनाना।",
    
    // Common
    features: "विशेषताएं",
    coverage: "कवरेज",
    premium: "प्रीमियम",
    selectPlan: "यह योजना चुनें",
    loading: "लोड हो रहा है...",
    submit: "जमा करें",
    cancel: "रद्द करें",
    close: "बंद करें",
    next: "अगला",
    previous: "पिछला",
    
    // Subscription
    choosePerfectPlan: "अपना सही प्लान चुनें",
    subscriptionDescription: "एआई-संचालित बीमा सिफारिशों, उन्नत विश्लेषिकी और प्राथमिकता समर्थन तक पहुंच प्राप्त करें। हमारी मुफ्त योजना से शुरुआत करें और बढ़ते जाएं।",
    monthlyBilling: "मासिक",
    quarterlyBilling: "त्रैमासिक",
    yearlyBilling: "वार्षिक",
    save33Percent: "33% बचाएं",
    save50Percent: "50% बचाएं",
    mostPopular: "सबसे लोकप्रिय",
    basicPlan: "बेसिक",
    basicPlanDesc: "अपनी बीमा यात्रा शुरू करने वाले व्यक्तियों के लिए सही",
    premiumPlan: "प्रीमियम",
    premiumPlanDesc: "व्यापक कवरेज चाहने वाले व्यक्तियों और छोटे परिवारों के लिए आदर्श",
    enterprisePlan: "एंटरप्राइज",
    enterprisePlanDesc: "व्यवसायों और बीमा पेशेवरों के लिए पूर्ण समाधान",
    getStartedFree: "मुफ्त में शुरुआत करें",
    startPremiumTrial: "प्रीमियम ट्रायल शुरू करें",
    contactSales: "सेल्स से संपर्क करें",
    freeText: "मुफ्त",
    perMonth: "/माह",
    perQuarter: "/त्रैमासिक",
    perYear: "/वर्ष",
    saveComparedToMonthly: "मासिक बिलिंग की तुलना में ₹{amount} बचाएं",
    whatsIncluded: "क्या शामिल है:",
    basicAiRecommendations: "बेसिक एआई सिफारिशें",
    compareUpTo3Policies: "3 पॉलिसियों तक की तुलना करें",
    riskAssessmentFeature: "जोखिम मूल्यांकन",
    regionalLanguageSupport: "क्षेत्रीय भाषा समर्थन",
    whatsappNotifications: "व्हाट्सऐप नोटिफिकेशन",
    prioritySupport: "प्राथमिकता समर्थन",
    advancedAnalytics: "उन्नत विश्लेषिकी",
    premiumInsights: "प्रीमियम अंतर्दृष्टि",
    unlimitedComparisons: "असीमित तुलना",
    dedicatedAccountManager: "समर्पित खाता प्रबंधक",
    everythingInBasic: "बेसिक में सब कुछ",
    advancedAiRecommendations: "उन्नत एआई सिफारिशें",
    unlimitedPolicyComparisons: "असीमित पॉलिसी तुलना",
    priority24x7Support: "प्राथमिकता समर्थन (24/7)",
    detailedAnalyticsDashboard: "विस्तृत विश्लेषिकी डैशबोर्ड",
    premiumMarketInsights: "प्रीमियम बाजार अंतर्दृष्टि",
    customRiskReports: "कस्टम जोखिम रिपोर्ट",
    emailSmsAlerts: "ईमेल और एसएमएस अलर्ट",
    everythingInPremium: "प्रीमियम में सब कुछ",
    whiteLabelSolutions: "व्हाइट-लेबल समाधान",
    apiAccess: "एपीआई एक्सेस",
    customIntegrations: "कस्टम एकीकरण",
    advancedTeamAnalytics: "उन्नत टीम विश्लेषिकी",
    multiUserDashboard: "मल्टी-यूजर डैशबोर्ड",
    priorityPhoneSupport: "प्राथमिकता फोन समर्थन",
    customTrainingSessions: "कस्टम प्रशिक्षण सत्र",
    slaGuarantee: "एसएलए गारंटी (99.9% अपटाइम)",
    whyChooseBimafySubscription: "BimaFy सब्सक्रिप्शन क्यों चुनें?",
    aiPoweredBenefit: "एआई-संचालित",
    aiPoweredBenefitDesc: "उन्नत एल्गोरिदम व्यक्तिगत सिफारिशों के लिए आपकी प्रोफ़ाइल का विश्लेषण करते हैं",
    expertSupportBenefit: "विशेषज्ञ समर्थन",
    expertSupportBenefitDesc: "बीमा विशेषज्ञों और समर्पित खाता प्रबंधकों तक 24/7 पहुंच",
    marketInsightsBenefit: "बाजार अंतर्दृष्टि",
    marketInsightsBenefitDesc: "सूचित निर्णय लेने के लिए रियल-टाइम बाजार डेटा और प्रीमियम अंतर्दृष्टि",
    detailedReportsBenefit: "विस्तृत रिपोर्ट",
    detailedReportsBenefitDesc: "बेहतर समझ के लिए व्यापक पीडीएफ रिपोर्ट और विश्लेषिकी",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    canSwitchPlans: "क्या मैं कभी भी प्लान बदल सकता हूं?",
    canSwitchPlansAnswer: "हां! आप किसी भी समय अपना प्लान अपग्रेड या डाउनग्रेड कर सकते हैं। परिवर्तन आपके अगले बिलिंग चक्र में दिखाई देंगे।",
    isThereFreeTrialQuestion: "क्या कोई मुफ्त ट्रायल है?",
    isThereFreeTrialAnswer: "प्रीमियम और एंटरप्राइज प्लान 14-दिन के मुफ्त ट्रायल के साथ आते हैं। शुरुआत के लिए क्रेडिट कार्ड की आवश्यकता नहीं।",
    whatPaymentMethodsQuestion: "आप कौन से भुगतान तरीके स्वीकार करते हैं?",
    whatPaymentMethodsAnswer: "हम सभी प्रमुख क्रेडिट कार्ड, डेबिट कार्ड, यूपीआई, नेट बैंकिंग और डिजिटल वॉलेट स्वीकार करते हैं।",
    canCancelAnytimeQuestion: "क्या मैं कभी भी रद्द कर सकता हूं?",
    canCancelAnytimeAnswer: "बिल्कुल! आप किसी भी समय अपना सब्सक्रिप्शन रद्द कर सकते हैं। आपकी पहुंच आपकी बिलिंग अवधि के अंत तक जारी रहेगी।",
    readyToGetStartedTitle: "शुरुआत के लिए तैयार हैं?",
    readyToGetStartedDesc: "हजारों उपयोगकर्ताओं में शामिल हों जो अपनी बीमा आवश्यकताओं के लिए BimaFy पर भरोसा करते हैं",
    startFreeTrial: "मुफ्त ट्रायल शुरू करें"
  },
  
  bn: {
    // Hero Section
    heroTitle: "এআই চালিত বীমা",
    heroSubtitle: "সহজ করে তোলা হয়েছে",
    heroDescription: "আপনার বয়স, বাজেট এবং পরিবারের প্রয়োজন অনুযায়ী ব্যক্তিগত বীমা পরামর্শ পান। এআই-চালিত ব্যাখ্যা সহ আপনার আঞ্চলিক ভাষায় উপলব্ধ।",
    getStarted: "শুরু করুন",
    tryAiChat: "এআই চ্যাট চেষ্টা করুন",
    aiRecommendations: "এআই সুপারিশ",
    aiRecommendationsDesc: "আপনার প্রোফাইল অনুযায়ী স্মার্ট পরামর্শ",
    regionalLanguages: "আঞ্চলিক ভাষা",
    regionalLanguagesDesc: "হিন্দি, বাংলা, তামিল, তেলুগু সমর্থন",
    riskAnalysis: "ঝুঁকি বিশ্লেষণ",
    riskAnalysisDesc: "দৃশ্যমান অন্তর্দৃষ্টি এবং স্কোরিং",
    communityPools: "কমিউনিটি পুল",
    communityPoolsDesc: "ভালো হারের জন্য গ্রুপ ছাড়",
    
    // Insurance Recommendations
    personalizedPlan: "আপনার ব্যক্তিগত বীমা পরিকল্পনা পান",
    personalizedPlanDesc: "আমাদের এআই আপনার প্রয়োজন এবং বাজেটের জন্য নিখুঁত বীমা কভারেজ সুপারিশ করতে আপনার প্রোফাইল বিশ্লেষণ করে।",
    tellUsAbout: "আপনার সম্পর্কে বলুন",
    age: "বয়স",
    monthlyIncome: "মাসিক আয়",
    selectIncome: "আয়ের পরিসীমা নির্বাচন করুন",
    dependents: "নির্ভরশীলদের সংখ্যা",
    familyMembers: "পরিবারের সদস্যরা",
    occupation: "পেশা",
    selectOccupation: "পেশা নির্বাচন করুন",
    region: "অঞ্চল",
    selectRegion: "আপনার অঞ্চল নির্বাচন করুন",
    existingPolicies: "বিদ্যমান বীমা পলিসি (যদি থাকে)",
    getAiRecommendations: "এআই সুপারিশ পান",
    aiRecommendedPlans: "আপনার এআই-প্রস্তাবিত পরিকল্পনা",
    
    // Risk Assessment
    riskAssessment: "ঝুঁকি মূল্যায়ন এবং বিশ্লেষণ",
    riskAssessmentDesc: "আপনার বীমার প্রয়োজনগুলি আরও ভালভাবে বুঝতে দৃশ্যমান অন্তর্দৃষ্টি সহ একটি বিস্তৃত ঝুঁকি প্রোফাইল পান।",
    yourRiskScore: "আপনার ঝুঁকি স্কোর",
    lowRisk: "কম ঝুঁকি প্রোফাইল",
    mediumRisk: "মাঝারি ঝুঁকি প্রোফাইল",
    highRisk: "উচ্চ ঝুঁকি প্রোফাইল",
    riskBreakdown: "ঝুঁকি বিভাজন",
    aiInsights: "এআই অন্তর্দৃষ্টি এবং সুপারিশ",
    retakeAssessment: "মূল্যায়ন পুনরায় নিন",
    
    // Policy Comparison
    comparePlans: "বীমা পরিকল্পনা তুলনা করুন",
    comparePlansDesc: "ডাউনলোডযোগ্য রিপোর্ট সহ কভারেজ, প্রিমিয়াম এবং সুবিধার পাশাপাশি তুলনা।",
    selectPolicies: "তুলনার জন্য পলিসি নির্বাচন করুন (সর্বোচ্চ ৩টি):",
    policyComparison: "পলিসি তুলনা",
    downloadPdf: "পিডিএফ রিপোর্ট ডাউনলোড করুন",
    monthlyPremium: "মাসিক প্রিমিয়াম",
    coverageAmount: "কভারেজ পরিমাণ",
    rating: "রেটিং",
    keyFeatures: "মূল বৈশিষ্ট্য",
    notIncluded: "অন্তর্ভুক্ত নয়",
    
    // Community Pools
    communityInsurancePools: "কমিউনিটি বীমা পুল",
    lowerPremiums: "কম প্রিমিয়াম",
    lowerPremiumsDesc: "সম্মিলিত দর কষাকষির মাধ্যমে বীমা প্রিমিয়ামে ৩০-৪৫% সাশ্রয় করুন",
    betterCoverage: "ভাল কভারেজ",
    betterCoverageDesc: "আপনার পেশার জন্য ডিজাইন করা বিশেষায়িত কভারেজ অ্যাক্সেস করুন",
    communitySupport: "কমিউনিটি সাপোর্ট",
    communitySupportDesc: "অভিজ্ঞতা ভাগ করুন এবং অনুরূপ পরিস্থিতিতে সহকর্মীদের কাছ থেকে সাহায্য পান",
    joinPool: "পুলে যোগ দিন",
    learnMore: "আরও জানুন",
    
    // WhatsApp Integration
    stayConnected: "হোয়াটসঅ্যাপের মাধ্যমে সংযুক্ত থাকুন",
    whatsappDesc: "হোয়াটসঅ্যাপের মাধ্যমে তাৎক্ষণিক পলিসি আপডেট, দাবি বিজ্ঞপ্তি এবং সহায়তা পান - যে অ্যাপটি আপনি ইতিমধ্যে প্রতিদিন ব্যবহার করেন।",
    policyReminders: "পলিসি রিমাইন্ডার",
    claimUpdates: "দাবি আপডেট",
    policyUpdatesTitle: "পলিসি আপডেট",
    quickSupport: "দ্রুত সহায়তা",
    getStartedWhatsapp: "হোয়াটসঅ্যাপ বিজ্ঞপ্তি দিয়ে শুরু করুন",
    whatsappNumber: "হোয়াটসঅ্যাপ নম্বর",
    subscribeWhatsapp: "হোয়াটসঅ্যাপে সাবস্ক্রাইব করুন",
    
    // Footer
    footerDescription: "এআই-চালিত সুপারিশ, সরলীকৃত ব্যাখ্যা এবং কমিউনিটি-চালিত সমাধানের মাধ্যমে সমস্ত ভারতীয়দের জন্য বীমা অ্যাক্সেসের গণতন্ত্রীকরণ।",
    quickLinks: "দ্রুত লিঙ্ক",
    recommendations: "সুপারিশ",
    riskProfile: "ঝুঁকি মূল্যায়ন",
    comparePlansLink: "পরিকল্পনা তুলনা করুন",
    community: "কমিউনিটি পুল",
    support: "সহায়তা",
    helpCenter: "সহায়তা কেন্দ্র",
    contactUs: "যোগাযোগ করুন",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsOfService: "সেবার শর্তাবলী",
    footerCopyright: "© ২০২৪ BimaFy। সমস্ত অধিকার সংরক্ষিত। স্মার্ট বীমা সিদ্ধান্তের সাথে প্রতিটি ভারতীয়কে ক্ষমতায়ন।",
    
    // Common
    features: "বৈশিষ্ট্য",
    coverage: "কভারেজ",
    premium: "প্রিমিয়াম",
    selectPlan: "এই পরিকল্পনা নির্বাচন করুন",
    loading: "লোড হচ্ছে...",
    submit: "জমা দিন",
    cancel: "বাতিল",
    close: "বন্ধ",
    next: "পরবর্তী",
    previous: "পূর্ববর্তী",
    
    // Subscription
    choosePerfectPlan: "আপনার নিখুঁত পরিকল্পনা বেছে নিন",
    subscriptionDescription: "এআই-চালিত বীমা সুপারিশ, উন্নত বিশ্লেষণ এবং অগ্রাধিকার সহায়তার অ্যাক্সেস পান। আমাদের বিনামূল্যে পরিকল্পনা দিয়ে শুরু করুন এবং বৃদ্ধির সাথে সাথে আপগ্রেড করুন।",
    monthlyBilling: "মাসিক",
    quarterlyBilling: "ত্রৈমাসিক",
    yearlyBilling: "বার্ষিক",
    save33Percent: "৩৩% সাশ্রয়",
    save50Percent: "৫০% সাশ্রয়",
    mostPopular: "সবচেয়ে জনপ্রিয়",
    basicPlan: "বেসিক",
    basicPlanDesc: "তাদের বীমা যাত্রা শুরু করা ব্যক্তিদের জন্য উপযুক্ত",
    premiumPlan: "প্রিমিয়াম",
    premiumPlanDesc: "ব্যাপক কভারেজ খোঁজা ব্যক্তি এবং ছোট পরিবারের জন্য আদর্শ",
    enterprisePlan: "এন্টারপ্রাইজ",
    enterprisePlanDesc: "ব্যবসা এবং বীমা পেশাদারদের জন্য সম্পূর্ণ সমাধান",
    getStartedFree: "বিনামূল্যে শুরু করুন",
    startPremiumTrial: "প্রিমিয়াম ট্রায়াল শুরু করুন",
    contactSales: "বিক্রয়ের সাথে যোগাযোগ করুন",
    freeText: "বিনামূল্যে",
    perMonth: "/মাস",
    perQuarter: "/ত্রৈমাসিক",
    perYear: "/বছর",
    saveComparedToMonthly: "মাসিক বিলিংয়ের তুলনায় ৳{amount} সাশ্রয় করুন",
    whatsIncluded: "কী অন্তর্ভুক্ত:",
    basicAiRecommendations: "বেসিক এআই সুপারিশ",
    compareUpTo3Policies: "৩টি পর্যন্ত পলিসি তুলনা করুন",
    riskAssessmentFeature: "ঝুঁকি মূল্যায়ন",
    regionalLanguageSupport: "আঞ্চলিক ভাষা সহায়তা",
    whatsappNotifications: "হোয়াটসঅ্যাপ বিজ্ঞপ্তি",
    prioritySupport: "অগ্রাধিকার সহায়তা",
    advancedAnalytics: "উন্নত বিশ্লেষণ",
    premiumInsights: "প্রিমিয়াম অন্তর্দৃষ্টি",
    unlimitedComparisons: "সীমাহীন তুলনা",
    dedicatedAccountManager: "নিবেদিত অ্যাকাউন্ট ম্যানেজার",
    everythingInBasic: "বেসিকের সবকিছু",
    advancedAiRecommendations: "উন্নত এআই সুপারিশ",
    unlimitedPolicyComparisons: "সীমাহীন পলিসি তুলনা",
    priority24x7Support: "অগ্রাধিকার সহায়তা (২৪/৭)",
    detailedAnalyticsDashboard: "বিস্তারিত বিশ্লেষণ ড্যাশবোর্ড",
    premiumMarketInsights: "প্রিমিয়াম বাজার অন্তর্দৃষ্টি",
    customRiskReports: "কাস্টম ঝুঁকি রিপোর্ট",
    emailSmsAlerts: "ইমেইল এবং এসএমএস সতর্কতা",
    everythingInPremium: "প্রিমিয়ামের সবকিছু",
    whiteLabelSolutions: "হোয়াইট-লেবেল সমাধান",
    apiAccess: "এপিআই অ্যাক্সেস",
    customIntegrations: "কাস্টম ইন্টিগ্রেশন",
    advancedTeamAnalytics: "উন্নত টিম বিশ্লেষণ",
    multiUserDashboard: "মাল্টি-ইউজার ড্যাশবোর্ড",
    priorityPhoneSupport: "অগ্রাধিকার ফোন সহায়তা",
    customTrainingSessions: "কাস্টম প্রশিক্ষণ সেশন",
    slaGuarantee: "এসএলএ গ্যারান্টি (৯৯.৯% আপটাইম)",
    whyChooseBimafySubscription: "কেন BimaFy সাবস্ক্রিপশন বেছে নেবেন?",
    aiPoweredBenefit: "এআই-চালিত",
    aiPoweredBenefitDesc: "উন্নত অ্যালগরিদম ব্যক্তিগত সুপারিশের জন্য আপনার প্রোফাইল বিশ্লেষণ করে",
    expertSupportBenefit: "বিশেষজ্ঞ সহায়তা",
    expertSupportBenefitDesc: "বীমা বিশেষজ্ঞ এবং নিবেদিত অ্যাকাউন্ট ম্যানেজারদের কাছে ২৪/৭ অ্যাক্সেস",
    marketInsightsBenefit: "বাজার অন্তর্দৃষ্টি",
    marketInsightsBenefitDesc: "সচেতন সিদ্ধান্ত নেওয়ার জন্য রিয়েল-টাইম বাজার ডেটা এবং প্রিমিয়াম অন্তর্দৃষ্টি",
    detailedReportsBenefit: "বিস্তারিত রিপোর্ট",
    detailedReportsBenefitDesc: "ভালো বোঝার জন্য ব্যাপক পিডিএফ রিপোর্ট এবং বিশ্লেষণ",
    faqTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    canSwitchPlans: "আমি কি যেকোনো সময় পরিকল্পনা পরিবর্তন করতে পারি?",
    canSwitchPlansAnswer: "হ্যাঁ! আপনি যেকোনো সময় আপনার পরিকল্পনা আপগ্রেড বা ডাউনগ্রেড করতে পারেন। পরিবর্তনগুলি আপনার পরবর্তী বিলিং চক্রে প্রতিফলিত হবে।",
    isThereFreeTrialQuestion: "কি কোনো বিনামূল্যে ট্রায়াল আছে?",
    isThereFreeTrialAnswer: "প্রিমিয়াম এবং এন্টারপ্রাইজ পরিকল্পনা ১৪-দিনের বিনামূল্যে ট্রায়ালের সাথে আসে। শুরু করতে ক্রেডিট কার্ডের প্রয়োজন নেই।",
    whatPaymentMethodsQuestion: "আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
    whatPaymentMethodsAnswer: "আমরা সমস্ত প্রধান ক্রেডিট কার্ড, ডেবিট কার্ড, ইউপিআই, নেট ব্যাংকিং এবং ডিজিটাল ওয়ালেট গ্রহণ করি।",
    canCancelAnytimeQuestion: "আমি কি যেকোনো সময় বাতিল করতে পারি?",
    canCancelAnytimeAnswer: "অবশ্যই! আপনি যেকোনো সময় আপনার সাবস্ক্রিপশন বাতিল করতে পারেন। আপনার বিলিং পিরিয়ডের শেষ পর্যন্ত আপনার অ্যাক্সেস অব্যাহত থাকবে।",
    readyToGetStartedTitle: "শুরু করতে প্রস্তুত?",
    readyToGetStartedDesc: "হাজার হাজার ব্যবহারকারীর সাথে যোগ দিন যারা তাদের বীমার প্রয়োজনে BimaFy-কে বিশ্বাস করেন",
    startFreeTrial: "বিনামূল্যে ট্রায়াল শুরু করুন"
  },
  
  ta: {
    // Hero Section
    heroTitle: "ஏஐ இயக்கப்படும் காப்பீடு",
    heroSubtitle: "எளிமையாக்கப்பட்டது",
    heroDescription: "உங்கள் வயது, பட்ஜெட் மற்றும் குடும்ப தேவைகளுக்கு ஏற்ப தனிப்பயன் காப்பீட்டு பரிந்துரைகளைப் பெறுங்கள். ஏஐ-இயக்கப்படும் விளக்கங்களுடன் உங்கள் பிராந்திய மொழியில் கிடைக்கும்।",
    getStarted: "தொடங்கவும்",
    tryAiChat: "ஏஐ அரட்டை முயற்சி செய்யவும்",
    aiRecommendations: "ஏஐ பரிந்துரைகள்",
    aiRecommendationsDesc: "உங்கள் சுயவிவரத்தின் அடிப்படையில் ஸ்மார்ட் பரிந்துரைகள்",
    regionalLanguages: "பிராந்திய மொழிகள்",
    regionalLanguagesDesc: "இந்தி, பெங்காலி, தமிழ், தெலுங்கு ஆதரவு",
    riskAnalysis: "அபாய பகுப்பாய்வு",
    riskAnalysisDesc: "காட்சி நுண்ணறிவு மற்றும் மதிப்பீடு",
    communityPools: "சமூக குளங்கள்",
    communityPoolsDesc: "சிறந்த விலைகளுக்கான குழு தள்ளுபடிகள்",
    
    // Insurance Recommendations
    personalizedPlan: "உங்கள் தனிப்பயன் காப்பீட்டு திட்டத்தைப் பெறுங்கள்",
    personalizedPlanDesc: "உங்கள் தேவைகள் மற்றும் பட்ஜெட்டுக்கு சரியான காப்பீட்டு கவரேஜை பரிந்துரைக்க எங்கள் ஏஐ உங்கள் சுயவிவரத்தை பகுப்பாய்வு செய்கிறது।",
    tellUsAbout: "உங்களைப் பற்றி சொல்லுங்கள்",
    age: "வயது",
    monthlyIncome: "மாதாந்திர வருமானம்",
    selectIncome: "வருமான வரம்பைத் தேர்ந்தெடுக்கவும்",
    dependents: "சார்ந்திருப்பவர்களின் எண்ணிக்கை",
    familyMembers: "குடும்ப உறுப்பினர்கள்",
    occupation: "தொழில்",
    selectOccupation: "தொழிலைத் தேர்ந்தெடுக்கவும்",
    region: "பகுதி",
    selectRegion: "உங்கள் பகுதியைத் தேர்ந்தெடுக்கவும்",
    existingPolicies: "தற்போதுள்ள காப்பீட்டு பாலிசிகள் (ஏதேனும் இருந்தால்)",
    getAiRecommendations: "ஏஐ பரிந்துரைகளைப் பெறுங்கள்",
    aiRecommendedPlans: "உங்கள் ஏஐ-பரிந்துரைக்கப்பட்ட திட்டங்கள்",
    
    // Risk Assessment
    riskAssessment: "அபாய மதிப்பீடு மற்றும் பகுப்பாய்வு",
    riskAssessmentDesc: "உங்கள் காப்பீட்டு தேவைகளை நன்கு புரிந்துகொள்ள காட்சி நுண்ணறிவுடன் விரிவான அபாய சுயவிவரத்தைப் பெறுங்கள்.",
    yourRiskScore: "உங்கள் அபாய மதிப்பெண்",
    lowRisk: "குறைந்த அபாய சுயவிவரம்",
    mediumRisk: "நடுத்தர அபாய சுயவிவரம்",
    highRisk: "உயர் அபாய சுயவிவரம்",
    riskBreakdown: "அபாய பிரிவு",
    aiInsights: "ஏஐ நுண்ணறிவு மற்றும் பரிந்துரைகள்",
    retakeAssessment: "மதிப்பீட்டை மீண்டும் எடுக்கவும்",
    
    // Policy Comparison
    comparePlans: "காப்பீட்டு திட்டங்களை ஒப்பிடுங்கள்",
    comparePlansDesc: "பதிவிறக்கம் செய்யக்கூடிய அறிக்கைகளுடன் கவரேஜ், பிரீமியம் மற்றும் நன்மைகளின் பக்கவாட்டு ஒப்பீடு।",
    selectPolicies: "ஒப்பிடுவதற்கு பாலிசிகளைத் தேர்ந்தெடுக்கவும் (அதிகபட்சம் 3):",
    policyComparison: "பாலிசி ஒப்பீடு",
    downloadPdf: "பிடிஎஃப் அறிக்கையைப் பதிவிறக்கவும்",
    monthlyPremium: "மாதாந்திர பிரீமியம்",
    coverageAmount: "கவரேஜ் தொகை",
    rating: "மதிப்பீடு",
    keyFeatures: "முக்கிய அம்சங்கள்",
    notIncluded: "சேர்க்கப்படவில்லை",
    
    // Community Pools
    communityInsurancePools: "சமூக காப்பீட்டு குளங்கள்",
    lowerPremiums: "குறைந்த பிரீமியங்கள்",
    lowerPremiumsDesc: "கூட்டு பேரம் பேசுதல் மூலம் காப்பீட்டு பிரீமியங்களில் 30-45% சேமிக்கவும்",
    betterCoverage: "சிறந்த கவரேஜ்",
    betterCoverageDesc: "உங்கள் தொழிலுக்காக வடிவமைக்கப்பட்ட சிறப்பு கவரேஜை அணுகவும்",
    communitySupport: "சமூக ஆதரவு",
    communitySupportDesc: "அனுபவங்களைப் பகிர்ந்து கொள்ளுங்கள் மற்றும் ஒத்த சூழ்நிலைகளில் உள்ள சகாக்களிடமிருந்து உதவி பெறுங்கள்",
    joinPool: "குளத்தில் சேரவும்",
    learnMore: "மேலும் அறிக",
    
    // WhatsApp Integration
    stayConnected: "வாட்ஸ்அப் மூலம் இணைந்திருங்கள்",
    whatsappDesc: "வாட்ஸ்அப் மூலம் உடனடி பாலிசி புதுப்பிப்புகள், கோரிக்கை அறிவிப்புகள் மற்றும் ஆதரவைப் பெறுங்கள் - நீங்கள் ஏற்கனவே தினமும் பயன்படுத்தும் பயன்பாடு.",
    policyReminders: "பாலிசி நினைவூட்டல்கள்",
    claimUpdates: "கோரிக்கை புதுப்பிப்புகள்",
    policyUpdatesTitle: "பாலிசி புதுப்பிப்புகள்",
    quickSupport: "விரைவான ஆதரவு",
    getStartedWhatsapp: "வாட்ஸ்அப் அறிவிப்புகளுடன் தொடங்குங்கள்",
    whatsappNumber: "வாட்ஸ்அப் எண்",
    subscribeWhatsapp: "வாட்ஸ்அப்பில் குழுசேரவும்",
    
    // Footer
    footerDescription: "ஏஐ-இயக்கப்படும் பரிந்துரைகள், எளிமைப்படுத்தப்பட்ட விளக்கங்கள் மற்றும் சமூக-உந்துதல் தீர்வுகள் மூலம் அனைத்து இந்தியர்களுக்கும் காப்பீட்டு அணுகலை ஜனநாயகமாக்குதல்.",
    quickLinks: "விரைவான இணைப்புகள்",
    recommendations: "பரிந்துரைகள்",
    riskProfile: "அபாய மதிப்பீடு",
    comparePlansLink: "திட்டங்களை ஒப்பிடுங்கள்",
    community: "சமூக குளங்கள்",
    support: "ஆதரவு",
    helpCenter: "உதவி மையம்",
    contactUs: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
    privacyPolicy: "தனியுரிமைக் கொள்கை",
    termsOfService: "சேவை விதிமுறைகள்",
    footerCopyright: "© 2024 BimaFy. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. ஸ்மார்ட் காப்பீட்டு முடிவுகளுடன் ஒவ்வொரு இந்தியரையும் மேம்படுத்துதல்.",
    
    // Common
    features: "அம்சங்கள்",
    coverage: "கவரேஜ்",
    premium: "பிரீமியம்",
    selectPlan: "இந்த திட்டத்தைத் தேர்ந்தெடுக்கவும்",
    loading: "ஏற்றுகிறது...",
    submit: "சமர்ப்பிக்கவும்",
    cancel: "ரத்து செய்",
    close: "மூடு",
    next: "அடுத்தது",
    previous: "முந்தைய",
    
    // Subscription
    choosePerfectPlan: "உங்கள் சரியான திட்டத்தைத் தேர்ந்தெடுக்கவும்",
    subscriptionDescription: "ஏஐ-இயக்கப்படும் காப்பீட்டு பரிந்துரைகள், மேம்பட்ட பகுப்பாய்வு மற்றும் முன்னுரிமை ஆதரவைப் பெறுங்கள். எங்கள் இலவச திட்டத்துடன் தொடங்கி வளர்ச்சியுடன் மேம்படுத்துங்கள்।",
    monthlyBilling: "மாதாந்திர",
    quarterlyBilling: "காலாண்டு",
    yearlyBilling: "வருடாந்திர",
    save33Percent: "33% சேமிக்கவும்",
    save50Percent: "50% சேமிக்கவும்",
    mostPopular: "மிகவும் பிரபலமான",
    basicPlan: "அடிப்படை",
    basicPlanDesc: "தங்கள் காப்பீட்டு பயணத்தைத் தொடங்கும் தனிநபர்களுக்கு ஏற்றது",
    premiumPlan: "பிரீமியம்",
    premiumPlanDesc: "விரிவான கவரேஜ் தேடும் தனிநபர்கள் மற்றும் சிறிய குடும்பங்களுக்கு ஏற்றது",
    enterprisePlan: "நிறுவன",
    enterprisePlanDesc: "வணிகங்கள் மற்றும் காப்பீட்டு நிபுணர்களுக்கான முழுமையான தீர்வு",
    getStartedFree: "இலவசமாக தொடங்கவும்",
    startPremiumTrial: "பிரீமியம் சோதனை தொடங்கவும்",
    contactSales: "விற்பனையைத் தொடர்பு கொள்ளவும்",
    freeText: "இலவசம்",
    perMonth: "/மாதம்",
    perQuarter: "/காலாண்டு",
    perYear: "/வருடம்",
    saveComparedToMonthly: "மாதாந்திர பில்லிங்குடன் ஒப்பிடும்போது ₹{amount} சேமிக்கவும்",
    whatsIncluded: "என்ன சேர்க்கப்பட்டுள்ளது:",
    basicAiRecommendations: "அடிப்படை ஏஐ பரிந்துரைகள்",
    compareUpTo3Policies: "3 பாலிசிகள் வரை ஒப்பிடுங்கள்",
    riskAssessmentFeature: "ஆபத்து மதிப்பீடு",
    regionalLanguageSupport: "பிராந்திய மொழி ஆதரவு",
    whatsappNotifications: "வாட்ஸ்அப் அறிவிப்புகள்",
    prioritySupport: "முன்னுரிமை ஆதரவு",
    advancedAnalytics: "மேம்பட்ட பகுப்பாய்வு",
    premiumInsights: "பிரீமியம் நுண்ணறிவு",
    unlimitedComparisons: "வரம்பற்ற ஒப்பீடுகள்",
    dedicatedAccountManager: "அர்ப்பணிப்புள்ள கணக்கு மேலாளர்",
    everythingInBasic: "அடிப்படையில் எல்லாம்",
    advancedAiRecommendations: "மேம்பட்ட ஏஐ பரிந்துரைகள்",
    unlimitedPolicyComparisons: "வரம்பற்ற பாலிசி ஒப்பீடுகள்",
    priority24x7Support: "முன்னுரிமை ஆதரவு (24/7)",
    detailedAnalyticsDashboard: "விரிவான பகுப்பாய்வு டாஷ்போர்டு",
    premiumMarketInsights: "பிரீமியம் சந்தை நுண்ணறிவு",
    customRiskReports: "தனிப்பயன் ஆபத்து அறிக்கைகள்",
    emailSmsAlerts: "மின்னஞ்சல் மற்றும் எஸ்எம்எஸ் எச்சரிக்கைகள்",
    everythingInPremium: "பிரீமியத்தில் எல்லாம்",
    whiteLabelSolutions: "வைட்-லேபல் தீர்வுகள்",
    apiAccess: "ஏபிஐ அணுகல்",
    customIntegrations: "தனிப்பயன் ஒருங்கிணைப்புகள்",
    advancedTeamAnalytics: "மேம்பட்ட குழு பகுப்பாய்வு",
    multiUserDashboard: "பல பயனர் டாஷ்போர்டு",
    priorityPhoneSupport: "முன்னுரிமை தொலைபேசி ஆதரவு",
    customTrainingSessions: "தனிப்பயன் பயிற்சி அமர்வுகள்",
    slaGuarantee: "எஸ்எல்ஏ உத்தரவாதம் (99.9% அப்டைம்)",
    whyChooseBimafySubscription: "ஏன் BimaFy சந்தாவைத் தேர்ந்தெடுக்க வேண்டும்?",
    aiPoweredBenefit: "ஏஐ-இயக்கப்படும்",
    aiPoweredBenefitDesc: "மேம்பட்ட அல்காரிதங்கள் தனிப்பயனாக்கப்பட்ட பரிந்துரைகளுக்காக உங்கள் சுயவிவரத்தை பகுப்பாய்வு செய்கின்றன",
    expertSupportBenefit: "நிபுணர் ஆதரவு",
    expertSupportBenefitDesc: "காப்பீட்டு நிபுணர்கள் மற்றும் அர்ப்பணிப்புள்ள கணக்கு மேலாளர்களுக்கு 24/7 அணுகல்",
    marketInsightsBenefit: "சந்தை நுண்ணறிவு",
    marketInsightsBenefitDesc: "தகவலறிந்த முடிவுகள் எடுக்க நிகழ்நேர சந்தை தரவு மற்றும் பிரீமியம் நுண்ணறிவு",
    detailedReportsBenefit: "விரிவான அறிக்கைகள்",
    detailedReportsBenefitDesc: "சிறந்த புரிதலுக்காக விரிவான PDF அறிக்கைகள் மற்றும் பகுப்பாய்வு",
    faqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    canSwitchPlans: "நான் எப்போது வேண்டுமானாலும் திட்டங்களை மாற்ற முடியுமா?",
    canSwitchPlansAnswer: "ஆம்! நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் திட்டத்தை மேம்படுத்தலாம் அல்லது தரம் குறைக்கலாம். மாற்றங்கள் உங்கள் அடுத்த பில்லிங் சுழற்சியில் பிரதிபலிக்கும்.",
    isThereFreeTrialQuestion: "இலவச சோதனை உள்ளதா?",
    isThereFreeTrialAnswer: "பிரீமியம் மற்றும் நிறுவன திட்டங்கள் 14-நாள் இலவச சோதனையுடன் வருகின்றன. தொடங்க கிரெடிட் கார்டு தேவையில்லை.",
    whatPaymentMethodsQuestion: "நீங்கள் எந்த கட்டண முறைகளை ஏற்றுக்கொள்கிறீர்கள்?",
    whatPaymentMethodsAnswer: "நாங்கள் அனைத்து முக்கிய கிரெடிட் கார்டுகள், டெபிட் கார்டுகள், UPI, நெட் பேங்கிங் மற்றும் டிஜிட்டல் வாலெட்டுகளை ஏற்றுக்கொள்கிறோம்.",
    canCancelAnytimeQuestion: "நான் எப்போது வேண்டுமானாலும் ரத்து செய்ய முடியுமா?",
    canCancelAnytimeAnswer: "முற்றிலும்! நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் சந்தாவை ரத்து செய்யலாம். உங்கள் பில்லிங் காலம் முடிவடையும் வரை உங்கள் அணுகல் தொடரும்.",
    readyToGetStartedTitle: "தொடங்க தயாரா?",
    readyToGetStartedDesc: "தங்கள் காப்பீட்டு தேவைகளுக்காக BimaFy-ஐ நம்பும் ஆயிரக்கணக்கான பயனர்களுடன் சேருங்கள்",
    startFreeTrial: "இலவச சோதனை தொடங்கவும்"
  },
  
  te: {
    // Hero Section
    heroTitle: "ఏఐ ఆధారిత బీమా",
    heroSubtitle: "సులభతరం చేయబడింది",
    heroDescription: "మీ వయస్సు, బడ్జెట్ మరియు కుటుంబ అవసరాలకు అనుగుణంగా వ్యక్తిగత బీమా సిఫార్సులు పొందండి. ఏఐ-ఆధారిత వివరణలతో మీ ప్రాంతీయ భాషలో అందుబాటులో ఉంది.",
    getStarted: "ప్రారంభించండి",
    tryAiChat: "ఏఐ చాట్ ప్రయత్నించండి",
    aiRecommendations: "ఏఐ సిఫార్సులు",
    aiRecommendationsDesc: "మీ ప్రొఫైల్ ఆధారంగా స్మార్ట్ సలహాలు",
    regionalLanguages: "ప్రాంతీయ భాషలు",
    regionalLanguagesDesc: "హిందీ, బెంగాలీ, తమిళం, తెలుగు మద్దతు",
    riskAnalysis: "రిస్క్ విశ్లేషణ",
    riskAnalysisDesc: "దృశ్య అంతర్దృష్టులు మరియు స్కోరింగ్",
    communityPools: "కమ్యూనిటీ పూల్స్",
    communityPoolsDesc: "మంచి రేట్లకు గ్రూప్ డిస్కౌంట్లు",
    
    // Insurance Recommendations
    personalizedPlan: "మీ వ్యక్తిగత బీమా ప్రణాళికను పొందండి",
    personalizedPlanDesc: "మీ అవసరాలు మరియు బడ్జెట్ కోసం సరైన బీమా కవరేజీని సిఫార్సు చేయడానికి మా ఏఐ మీ ప్రొఫైల్ను విశ్లేషిస్తుంది.",
    tellUsAbout: "మీ గురించి చెప్పండి",
    age: "వయస్సు",
    monthlyIncome: "నెలవారీ ఆదాయం",
    selectIncome: "ఆదాయ పరిధిని ఎంచుకోండి",
    dependents: "ఆధారపడిన వారి సంఖ్య",
    familyMembers: "కుటుంబ సభ్యులు",
    occupation: "వృత్తి",
    selectOccupation: "వృత్తిని ఎంచుకోండి",
    region: "ప్రాంతం",
    selectRegion: "మీ ప్రాంతాన్ని ఎంచుకోండి",
    existingPolicies: "ప్రస్తుత బీమా పాలసీలు (ఏవైనా ఉంటే)",
    getAiRecommendations: "ఏఐ సిఫార్సులను పొందండి",
    aiRecommendedPlans: "మీ ఏఐ-సిఫార్సు చేయబడిన ప్రణాళికలు",
    
    // Risk Assessment
    riskAssessment: "రిస్క్ అసెస్మెంట్ మరియు విశ్లేషణ",
    riskAssessmentDesc: "మీ బీమా అవసరాలను బాగా అర్థం చేసుకోవడానికి దృశ్య అంతర్దృష్టులతో సమగ్ర రిస్క్ ప్రొఫైల్ను పొందండి.",
    yourRiskScore: "మీ రిస్క్ స్కోర్",
    lowRisk: "తక్కువ రిస్క్ ప్రొఫైల్",
    mediumRisk: "మధ్యస్థ రిస్క్ ప్రొఫైల్",
    highRisk: "అధిక రిస్క్ ప్రొఫైల్",
    riskBreakdown: "రిస్క్ విభజన",
    aiInsights: "ఏఐ అంతర్దృష్టులు మరియు సిఫార్సులు",
    retakeAssessment: "అసెస్మెంట్ను మళ్లీ తీసుకోండి",
    
    // Policy Comparison
    comparePlans: "బీమా ప్రణాళికలను పోల్చండి",
    comparePlansDesc: "డౌన్‌లోడ్ చేయగల రిపోర్ట్‌లతో కవరేజీ, ప్రీమియంలు మరియు ప్రయోజనాల పక్కన పోలిక.",
    selectPolicies: "పోల్చడానికి పాలసీలను ఎంచుకోండి (గరిష్టంగా 3):",
    policyComparison: "పాలసీ పోలిక",
    downloadPdf: "పిడిఎఫ్ రిపోర్ట్ డౌన్‌లోడ్ చేయండి",
    monthlyPremium: "నెలవారీ ప్రీమియం",
    coverageAmount: "కవరేజీ మొత్తం",
    rating: "రేటింగ్",
    keyFeatures: "ముఖ్య లక్షణాలు",
    notIncluded: "చేర్చబడలేదు",
    
    // Community Pools
    communityInsurancePools: "కమ్యూనిటీ బీమా పూల్స్",
    lowerPremiums: "తక్కువ ప్రీమియంలు",
    lowerPremiumsDesc: "సామూహిక బేరసారాల ద్వారా బీమా ప్రీమియంలపై 30-45% ఆదా చేయండి",
    betterCoverage: "మంచి కవరేజీ",
    betterCoverageDesc: "మీ వృత్తి కోసం రూపొందించిన ప్రత్యేక కవరేజీని యాక్సెస్ చేయండి",
    communitySupport: "కమ్యూనిటీ మద్దతు",
    communitySupportDesc: "అనుభవాలను పంచుకోండి మరియు ఇలాంటి పరిస్థితుల్లో ఉన్న సహోద్యోగుల నుండి సహాయం పొందండి",
    joinPool: "పూల్‌లో చేరండి",
    learnMore: "మరింత తెలుసుకోండి",
    
    // WhatsApp Integration
    stayConnected: "వాట్సాప్ ద్వారా కనెక్ట్ అయి ఉండండి",
    whatsappDesc: "వాట్సాప్ ద్వారా తక్షణ పాలసీ అప్‌డేట్లు, క్లెయిమ్ నోటిఫికేషన్లు మరియు మద్దతును పొందండి - మీరు ఇప్పటికే ప్రతిరోజూ ఉపయోగించే యాప్.",
    policyReminders: "పాలసీ రిమైండర్లు",
    claimUpdates: "క్లెయిమ్ అప్‌డేట్లు",
    policyUpdatesTitle: "పాలసీ అప్‌డేట్లు",
    quickSupport: "త్వరిత మద్దతు",
    getStartedWhatsapp: "వాట్సాప్ నోటిఫికేషన్లతో ప్రారంభించండి",
    whatsappNumber: "వాట్సాప్ నంబర్",
    subscribeWhatsapp: "వాట్సాప్‌కు సబ్‌స్క్రైబ్ చేయండి",
    
    // Footer
    footerDescription: "ఏఐ-ఆధారిత సిఫార్సులు, సరళీకృత వివరణలు మరియు కమ్యూనిటీ-ఆధారిత పరిష్కారాల ద్వారా అన్ని భారతీయులకు బీమా యాక్సెస్‌ను ప్రజాస్వామ్యీకరించడం.",
    quickLinks: "త్వరిత లింక్‌లు",
    recommendations: "సిఫార్సులు",
    riskProfile: "రిస్క్ అసెస్మెంట్",
    comparePlansLink: "ప్రణాళికలను పోల్చండి",
    community: "కమ్యూనిటీ పూల్స్",
    support: "మద్దతు",
    helpCenter: "సహాయ కేంద్రం",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    privacyPolicy: "గోప్యతా విధానం",
    termsOfService: "సేవా నిబంధనలు",
    footerCopyright: "© 2024 BimaFy. అన్ని హక్కులు రక్షించబడ్డాయి. స్మార్ట్ బీమా నిర్ణయాలతో ప్రతి భారతీయుడిని శక్తివంతం చేయడం.",
    
    // Common
    features: "లక్షణాలు",
    coverage: "కవరేజీ",
    premium: "ప్రీమియం",
    selectPlan: "ఈ ప్రణాళికను ఎంచుకోండి",
    loading: "లోడ్ అవుతోంది...",
    submit: "సమర్పించండి",
    cancel: "రద్దు చేయండి",
    close: "మూసివేయండి",
    next: "తదుపరి",
    previous: "మునుపటి",
    
    // Subscription
    choosePerfectPlan: "మీ సరైన ప్రణాళికను ఎంచుకోండి",
    subscriptionDescription: "ఏఐ-ఆధారిత బీమా సిఫార్సులు, అధునాతన విశ్లేషణలు మరియు ప్రాధాన్యత మద్దతుకు యాక్సెస్ పొందండి. మా ఉచిత ప్రణాళికతో ప్రారంభించి, పెరుగుతున్న కొద్దీ అప్‌గ్రేడ్ చేయండి।",
    monthlyBilling: "నెలవారీ",
    quarterlyBilling: "త్రైమాసిక",
    yearlyBilling: "వార్షిక",
    save33Percent: "33% ఆదా చేయండి",
    save50Percent: "50% ఆదా చేయండి",
    mostPopular: "అత్యంత ప్రాచుర్యం",
    basicPlan: "బేసిక్",
    basicPlanDesc: "వారి బీమా ప్రయాణాన్ని ప్రారంభిస్తున్న వ్యక్తులకు సరైనది",
    premiumPlan: "ప్రీమియం",
    premiumPlanDesc: "సమగ్ర కవరేజీని కోరుకునే వ్యక్తులు మరియు చిన్న కుటుంబాలకు అనువైనది",
    enterprisePlan: "ఎంటర్‌ప్రైజ్",
    enterprisePlanDesc: "వ్యాపారాలు మరియు బీమా నిపుణులకు పూర్తి పరిష్కారం",
    getStartedFree: "ఉచితంగా ప్రారంభించండి",
    startPremiumTrial: "ప్రీమియం ట్రయల్ ప్రారంభించండి",
    contactSales: "సేల్స్‌ను సంప్రదించండి",
    freeText: "ఉచితం",
    perMonth: "/నెల",
    perQuarter: "/త్రైమాసికం",
    perYear: "/సంవత్సరం",
    saveComparedToMonthly: "నెలవారీ బిల్లింగ్‌తో పోల్చితే ₹{amount} ఆదా చేయండి",
    whatsIncluded: "ఏం చేర్చబడింది:",
    basicAiRecommendations: "బేసిక్ ఏఐ సిఫార్సులు",
    compareUpTo3Policies: "3 పాలసీల వరకు పోల్చండి",
    riskAssessmentFeature: "రిస్క్ అసెస్‌మెంట్",
    regionalLanguageSupport: "ప్రాంతీయ భాషా మద్దతు",
    whatsappNotifications: "వాట్సాప్ నోటిఫికేషన్లు",
    prioritySupport: "ప్రాధాన్యత మద్దతు",
    advancedAnalytics: "అధునాతన విశ్లేషణలు",
    premiumInsights: "ప్రీమియం అంతర్దృష్టులు",
    unlimitedComparisons: "అపరిమిత పోలికలు",
    dedicatedAccountManager: "అంకిత ఖాతా నిర్వాహకుడు",
    everythingInBasic: "బేసిక్‌లో అన్నీ",
    advancedAiRecommendations: "అధునాతన ఏఐ సిఫార్సులు",
    unlimitedPolicyComparisons: "అపరిమిత పాలసీ పోలికలు",
    priority24x7Support: "ప్రాధాన్యత మద్దతు (24/7)",
    detailedAnalyticsDashboard: "వివరణాత్మక విశ్లేషణలు డాష్‌బోర్డ్",
    premiumMarketInsights: "ప్రీమియం మార్కెట్ అంతర్దృష్టులు",
    customRiskReports: "కస్టమ్ రిస్క్ రిపోర్ట్‌లు",
    emailSmsAlerts: "ఇమెయిల్ మరియు SMS అలర్ట్‌లు",
    everythingInPremium: "ప్రీమియంలో అన్నీ",
    whiteLabelSolutions: "వైట్-లేబల్ సొల్యూషన్స్",
    apiAccess: "API యాక్సెస్",
    customIntegrations: "కస్టమ్ ఇంటిగ్రేషన్స్",
    advancedTeamAnalytics: "అధునాతన టీమ్ అనలిటిక్స్",
    multiUserDashboard: "మల్టీ-యూజర్ డాష్‌బోర్డ్",
    priorityPhoneSupport: "ప్రాధాన్యత ఫోన్ మద్దతు",
    customTrainingSessions: "కస్టమ్ ట్రైనింగ్ సెషన్స్",
    slaGuarantee: "SLA హామీ (99.9% అప్‌టైమ్)",
    whyChooseBimafySubscription: "ఎందుకు BimaFy సబ్‌స్క్రిప్షన్ ఎంచుకోవాలి?",
    aiPoweredBenefit: "ఏఐ-ఆధారిత",
    aiPoweredBenefitDesc: "అధునాతన అల్గోరిదంలు వ్యక్తిగత సిఫార్సుల కోసం మీ ప్రొఫైల్‌ను విశ్లేషిస్తాయి",
    expertSupportBenefit: "నిపుణుల మద్దతు",
    expertSupportBenefitDesc: "బీమా నిపుణులు మరియు అంకిత ఖాతా నిర్వాహకులకు 24/7 యాక్సెస్",
    marketInsightsBenefit: "మార్కెట్ అంతర్దృష్టులు",
    marketInsightsBenefitDesc: "సమాచారప్రకారమైన నిర్ణయాలు తీసుకోవడానికి రియల్-టైమ్ మార్కెట్ డేటా మరియు ప్రీమియం అంతర్దృష్టులు",
    detailedReportsBenefit: "వివరణాత్మక రిపోర్ట్‌లు",
    detailedReportsBenefitDesc: "మెరుగైన అవగాహన కోసం సమగ్ర PDF రిపోర్ట్‌లు మరియు అనలిటిక్స్",
    faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
    canSwitchPlans: "నేను ఎప్పుడైనా ప్రణాళికలను మార్చగలనా?",
    canSwitchPlansAnswer: "అవును! మీరు ఎప్పుడైనా మీ ప్రణాళికను అప్‌గ్రేడ్ లేదా డౌన్‌గ్రేడ్ చేయవచ్చు. మార్పులు మీ తదుపరి బిల్లింగ్ సైకిల్‌లో ప్రతిబింబిస్తాయి।",
    isThereFreeTrialQuestion: "ఉచిత ట్రయల్ ఉందా?",
    isThereFreeTrialAnswer: "ప్రీమియం మరియు ఎంటర్‌ప్రైజ్ ప్రణాళికలు 14-రోజుల ఉచిత ట్రయల్‌తో వస్తాయి. ప్రారంభించడానికి క్రెడిట్ కార్డ్ అవసరం లేదు।",
    whatPaymentMethodsQuestion: "మీరు ఏ చెల్లింపు పద్ధతులను అంగీకరిస్తారు?",
    whatPaymentMethodsAnswer: "మేము అన్ని ప్రధాన క్రెడిట్ కార్డులు, డెబిట్ కార్డులు, UPI, నెట్ బ్యాంకింగ్ మరియు డిజిటల్ వాలెట్లను అంగీకరిస్తాము।",
    canCancelAnytimeQuestion: "నేను ఎప్పుడైనా రద్దు చేయగలనా?",
    canCancelAnytimeAnswer: "ఖచ్చితంగా! మీరు ఎప్పుడైనా మీ సబ్‌స్క్రిప్షన్‌ను రద్దు చేయవచ్చు. మీ బిల్లింగ్ పీరియడ్ ముగిసే వరకు మీ యాక్సెస్ కొనసాగుతుంది।",
    readyToGetStartedTitle: "ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?",
    readyToGetStartedDesc: "వారి బీమా అవసరాలకు BimaFy-పై నమ్మకం ఉంచే వేలాది మంది వినియోగదారులతో చేరండి",
    startFreeTrial: "ఉచిత ట్రయల్ ప్రారంభించండి"
  }
};

export function getTranslation(lang: SupportedLanguage, key: keyof TranslationKeys): string {
  return translations[lang]?.[key] || translations['en'][key] || key;
}

export function getCurrentLanguageData(lang: SupportedLanguage): TranslationKeys {
  return translations[lang] || translations['en'];
}