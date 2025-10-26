import React, { useState } from 'react';
import { Brain } from "lucide-react";
import { getTranslation, SupportedLanguage } from '../utils/translations';

import { Heart, Car, Home, Shield, ChevronRight, Star, } from 'lucide-react';

interface InsuranceForm {
  age: string;
  monthlyIncome: string;
  dependents: string;
  occupation: string;
  region: string;
  existingPolicies: string[];
}

interface InsuranceRecommendationsProps {
  currentLanguage: SupportedLanguage;
}

const InsuranceRecommendations: React.FC<InsuranceRecommendationsProps> = ({ currentLanguage }) => {
  const [formData, setFormData] = useState<InsuranceForm>({
    age: '',
    monthlyIncome: '',
    dependents: '',
    occupation: '',
    region: '',
    existingPolicies: []
  });

  const [showRecommendations, setShowRecommendations] = useState(false);

  const occupations = [
    'Salaried Employee',
    'Gig Worker',
    'Farmer',
    'Daily Wage Worker',
    'Business Owner',
    'Self Employed',
    'Student',
    'Retired'
  ];

  const regions = [
    'Urban Metro',
    'Urban Non-Metro',
    'Semi-Urban',
    'Rural'
  ];

  const insuranceTypes = [
    { id: 'health', label: 'Health Insurance', icon: Heart },
    { id: 'life', label: 'Life Insurance', icon: Shield },
    { id: 'vehicle', label: 'Vehicle Insurance', icon: Car },
    { id: 'home', label: 'Home Insurance', icon: Home }
  ];

  const recommendations = [
    {
      type: 'Health',
      plan: 'Family Health Shield Pro',
      premium: '₹2,400/month',
      coverage: '₹5,00,000',
      rating: 4.8,
      features: ['Cashless Treatment', 'Pre-existing Conditions Covered', 'Maternity Benefits', 'Mental Health Coverage'],
      aiReason: 'Based on your age group and family size, this plan offers comprehensive coverage for medical emergencies with affordable premiums.',
      badge: 'AI Recommended'
    },
    {
      type: 'Life',
      plan: 'Term Life Secure Plus',
      premium: '₹800/month',
      coverage: '₹25,00,000',
      rating: 4.9,
      features: ['100% Claim Settlement', 'Accidental Death Benefit', 'Terminal Illness Cover', 'Flexible Premium Payment'],
      aiReason: 'Your income and dependents suggest this coverage amount will secure your family\'s financial future.',
      badge: 'Best Value'
    },
    {
      type: 'Vehicle',
      plan: 'Comprehensive Auto Cover',
      premium: '₹450/month',
      coverage: '₹8,00,000',
      rating: 4.6,
      features: ['Zero Depreciation', 'Engine Protection', 'Personal Accident Cover', '24/7 Roadside Assistance'],
      aiReason: 'Essential protection for your vehicle with additional benefits for your safety and peace of mind.',
      badge: 'Popular'
    }
  ];

  const handleInputChange = (field: keyof InsuranceForm, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePolicyToggle = (policyId: string) => {
    setFormData(prev => ({
      ...prev,
      existingPolicies: prev.existingPolicies.includes(policyId)
        ? prev.existingPolicies.filter(id => id !== policyId)
        : [...prev.existingPolicies, policyId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRecommendations(true);
  };

  return (
    <section id="recommendations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {getTranslation(currentLanguage, 'personalizedPlan').split(' ').map((word, index, array) => 
              index === 2 ? <span key={index} className="text-indigo-600">{word}</span> : 
              index === array.length - 1 ? ` ${word}` : ` ${word}`
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getTranslation(currentLanguage, 'personalizedPlanDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{getTranslation(currentLanguage, 'tellUsAbout')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{getTranslation(currentLanguage, 'age')}</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder={getTranslation(currentLanguage, 'age')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{getTranslation(currentLanguage, 'monthlyIncome')}</label>
                  <select
                    value={formData.monthlyIncome}
                    onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">{getTranslation(currentLanguage, 'selectIncome')}</option>
                    <option value="under-10k">Under ₹10,000</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="above-1l">Above ₹1,00,000</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{getTranslation(currentLanguage, 'dependents')}</label>
                  <input
                    type="number"
                    value={formData.dependents}
                    onChange={(e) => handleInputChange('dependents', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder={getTranslation(currentLanguage, 'familyMembers')}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{getTranslation(currentLanguage, 'occupation')}</label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">{getTranslation(currentLanguage, 'selectOccupation')}</option>
                    {occupations.map(occupation => (
                      <option key={occupation} value={occupation}>{occupation}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{getTranslation(currentLanguage, 'region')}</label>
                <select
                  value={formData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">{getTranslation(currentLanguage, 'selectRegion')}</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">{getTranslation(currentLanguage, 'existingPolicies')}</label>
                <div className="grid grid-cols-2 gap-3">
                  {insuranceTypes.map(({ id, label, icon: Icon }) => (
                    <label
                      key={id}
                      className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.existingPolicies.includes(id)
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.existingPolicies.includes(id)}
                        onChange={() => handlePolicyToggle(id)}
                        className="sr-only"
                      />
                      <Icon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {getTranslation(currentLanguage, 'getAiRecommendations')}
                <ChevronRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Recommendations Section */}
          <div className="space-y-6">
            {showRecommendations ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{getTranslation(currentLanguage, 'aiRecommendedPlans')}</h3>
                <div className="space-y-4">
                  {recommendations.map((plan, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-xl font-bold text-gray-900">{plan.plan}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              plan.badge === 'AI Recommended' ? 'bg-indigo-100 text-indigo-800' :
                              plan.badge === 'Best Value' ? 'bg-green-100 text-green-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {plan.badge}
                            </span>
                          </div>
                          <p className="text-gray-600">{plan.type} Insurance</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{plan.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-600">Monthly Premium</p>
                          <p className="text-lg font-bold text-indigo-600">{plan.premium}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-600">Coverage Amount</p>
                          <p className="text-lg font-bold text-green-600">{plan.coverage}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-blue-800">
                          <strong>AI Insight:</strong> {plan.aiReason}
                        </p>
                      </div>

                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors">
                        {getTranslation(currentLanguage, 'selectPlan')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-16 w-16 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Ready to Help</h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form to get personalized insurance recommendations powered by advanced AI analysis.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>AI Engine Active</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceRecommendations;