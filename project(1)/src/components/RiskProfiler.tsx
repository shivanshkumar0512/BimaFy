import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface RiskData {
  lifestyle: number;
  health: number;
  financial: number;
  occupational: number;
  environmental: number;
}

interface Answer {
  text: string;
  score: number;
  category: string;
}

const RiskProfiler: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [riskScore, setRiskScore] = useState(0);
  const [riskData, setRiskData] = useState<RiskData>({
    lifestyle: 0,
    health: 0,
    financial: 0,
    occupational: 0,
    environmental: 0
  });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    // Age (First Question)
    {
      category: 'health',
      question: 'What is your age?',
      options: [
        { text: '18-30 years', score: 0 },
        { text: '31-45 years', score: 5 },
        { text: '46-60 years', score: 15 },
        { text: 'Above 60 years', score: 25 }
      ]
    },
    
    // Lifestyle Questions
    {
      category: 'lifestyle',
      question: 'Do you smoke?',
      options: [
        { text: 'No', score: 0 },
        { text: 'Yes, occasionally', score: 15 },
        { text: 'Yes, regularly', score: 30 }
      ]
    },
    {
      category: 'lifestyle',
      question: 'How often do you exercise?',
      options: [
        { text: 'Daily', score: 0 },
        { text: '3–4 times a week', score: 3 },
        { text: 'Rarely', score: 10 },
        { text: 'Never', score: 15 }
      ]
    },
    {
      category: 'lifestyle',
      question: 'Do you consume alcohol?',
      options: [
        { text: 'Never', score: 0 },
        { text: 'Occasionally', score: 5 },
        { text: 'Frequently', score: 15 }
      ]
    },
    
    // Health Questions
    {
      category: 'health',
      question: 'Do you have any chronic conditions?',
      options: [
        { text: 'None', score: 0 },
        { text: 'Diabetes', score: 20 },
        { text: 'Hypertension', score: 15 },
        { text: 'Heart disease', score: 25 }
      ]
    },
    {
      category: 'health',
      question: 'Current BMI category?',
      options: [
        { text: 'Normal (18.5-24.9)', score: 0 },
        { text: 'Underweight (<18.5)', score: 8 },
        { text: 'Overweight (25-29.9)', score: 10 },
        { text: 'Obese (≥30)', score: 20 }
      ]
    },
    {
      category: 'health',
      question: 'Family medical history (parents/siblings)?',
      options: [
        { text: 'No significant history', score: 0 },
        { text: 'Some chronic conditions', score: 10 },
        { text: 'Multiple serious conditions', score: 20 }
      ]
    },
    
    // Financial Questions
    {
      category: 'financial',
      question: 'What is your monthly income bracket?',
      options: [
        { text: '₹0–30k', score: 15 },
        { text: '₹30–60k', score: 10 },
        { text: '₹60k–1.5L', score: 5 },
        { text: '>₹1.5L', score: 0 }
      ]
    },
    {
      category: 'financial',
      question: 'Do you have existing insurance policies?',
      options: [
        { text: 'Life and Health both', score: 0 },
        { text: 'Life insurance only', score: 5 },
        { text: 'Health insurance only', score: 5 },
        { text: 'None', score: 20 }
      ]
    },
    
    // Occupational Questions
    {
      category: 'occupational',
      question: 'Nature of your job:',
      options: [
        { text: 'Sedentary/Office work', score: 0 },
        { text: 'Moderate activity', score: 5 },
        { text: 'Physically demanding', score: 15 },
        { text: 'High-risk (construction, mining)', score: 25 }
      ]
    },
    {
      category: 'occupational',
      question: 'Job-related stress level?',
      options: [
        { text: 'Low', score: 0 },
        { text: 'Medium', score: 8 },
        { text: 'High', score: 18 }
      ]
    },
    
    // Environmental Questions
    {
      category: 'environmental',
      question: 'Air quality in your area?',
      options: [
        { text: 'Good', score: 0 },
        { text: 'Moderate', score: 8 },
        { text: 'Poor', score: 20 }
      ]
    }
  ];

  const handleAnswer = (questionIndex: number, option: { text: string; score: number }) => {
    const question = questions[questionIndex];
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: { ...option, category: question.category }
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateRisk();
    }
  };

  const calculateRisk = () => {
    const categoryScores: Record<string, number[]> = {};
    
    Object.values(answers).forEach((answer: Answer) => {
      if (!categoryScores[answer.category]) {
        categoryScores[answer.category] = [];
      }
      categoryScores[answer.category].push(answer.score);
    });

    const newRiskData: RiskData = {
      lifestyle: categoryScores.lifestyle ? Math.min(100, categoryScores.lifestyle.reduce((a, b) => a + b, 0)) : 0,
      health: categoryScores.health ? Math.min(100, categoryScores.health.reduce((a, b) => a + b, 0)) : 0,
      financial: categoryScores.financial ? Math.min(100, categoryScores.financial.reduce((a, b) => a + b, 0)) : 0,
      occupational: categoryScores.occupational ? Math.min(100, categoryScores.occupational.reduce((a, b) => a + b, 0)) : 0,
      environmental: categoryScores.environmental ? Math.min(100, categoryScores.environmental.reduce((a, b) => a + b, 0)) : 0
    };

    const totalScore = Object.values(newRiskData).reduce((a, b) => a + b, 0) / 5;
    
    setRiskData(newRiskData);
    setRiskScore(Math.round(totalScore));
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRiskScore(0);
    setShowResults(false);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 20) return { level: 'Low', color: 'text-green-600', bg: 'bg-green-100' };
    if (score <= 50) return { level: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { level: 'High', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const RiskGauge = ({ score }: { score: number }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={score <= 20 ? '#10b981' : score <= 50 ? '#f59e0b' : '#ef4444'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{score}</div>
            <div className="text-xs text-gray-600">Risk Score</div>
          </div>
        </div>
      </div>
    );
  };

  const RadarChart = ({ data }: { data: RiskData }) => {
    const categories = Object.keys(data);
    const values = Object.values(data);
    const angleStep = (2 * Math.PI) / categories.length;
    
    const points = values.map((value, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (value / 100) * 80;
      const x = 100 + radius * Math.cos(angle);
      const y = 100 + radius * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative">
        <svg className="w-64 h-64" viewBox="0 0 200 200">
          {/* Grid circles */}
          {[20, 40, 60, 80].map((radius) => (
            <circle
              key={radius}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}
          
          {/* Grid lines */}
          {categories.map((_, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const x2 = 100 + 80 * Math.cos(angle);
            const y2 = 100 + 80 * Math.sin(angle);
            return (
              <line
                key={index}
                x1="100"
                y1="100"
                x2={x2}
                y2={y2}
                stroke="#f3f4f6"
                strokeWidth="1"
              />
            );
          })}
          
          {/* Data polygon */}
          <polygon
            points={points}
            fill="rgba(99, 102, 241, 0.2)"
            stroke="#6366f1"
            strokeWidth="2"
          />
          
          {/* Data points */}
          {values.map((value, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const radius = (value / 100) * 80;
            const x = 100 + radius * Math.cos(angle);
            const y = 100 + radius * Math.sin(angle);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="#6366f1"
              />
            );
          })}
        </svg>
        
        {/* Labels */}
        {categories.map((category, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const x = 100 + 95 * Math.cos(angle);
          const y = 100 + 95 * Math.sin(angle);
          return (
            <div
              key={category}
              className="absolute text-xs font-medium text-gray-700 transform -translate-x-1/2 -translate-y-1/2 capitalize"
              style={{
                left: `${(x / 200) * 100}%`,
                top: `${(y / 200) * 100}%`
              }}
            >
              {category}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="risk-profile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Risk <span className="text-indigo-600">Assessment</span> & Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a comprehensive risk profile with visual insights to understand your insurance needs better.
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {questions[currentStep]?.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentStep, option)}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group"
                  >
                    <span className="text-gray-900 group-hover:text-indigo-700 font-medium">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Risk Score and Gauge */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Risk Score</h3>
                <div className="flex justify-center mb-6">
                  <RiskGauge score={riskScore} />
                </div>
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${getRiskLevel(riskScore).bg}`}>
                  <Activity className={`h-5 w-5 mr-2 ${getRiskLevel(riskScore).color}`} />
                  <span className={`font-semibold ${getRiskLevel(riskScore).color}`}>
                    {getRiskLevel(riskScore).level} Risk Profile
                  </span>
                </div>
                <p className="text-gray-600 mt-4">
                  Based on your lifestyle, health, and environmental factors.
                </p>
              </div>

              {/* Risk Breakdown */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Breakdown</h3>
                <div className="space-y-4">
                  {Object.entries(riskData).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 capitalize">{category}</span>
                        <span className="text-sm font-bold text-gray-900">{score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            score <= 20 ? 'bg-green-500' : score <= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Radar Chart and Insights */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Risk Profile Analysis</h3>
                <div className="flex justify-center">
                  <RadarChart data={riskData} />
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Insights & Recommendations</h3>
                <div className="space-y-4">
                  {riskScore <= 20 && (
                    <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        <strong>Great news!</strong> Your low-risk profile means you qualify for premium discounts. 
                        Consider term life insurance and basic health coverage to start building your protection.
                      </p>
                    </div>
                  )}
                  {riskScore > 20 && riskScore <= 50 && (
                    <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800">
                        <strong>Balanced approach needed.</strong> Your moderate risk profile suggests comprehensive 
                        coverage with accident protection. Consider health insurance with pre-existing condition coverage.
                      </p>
                    </div>
                  )}
                  {riskScore > 50 && (
                    <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800">
                        <strong>Enhanced protection recommended.</strong> Your high-risk profile indicates need for 
                        comprehensive coverage including critical illness, accident, and specialized occupational insurance.
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={resetQuiz}
                  className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RiskProfiler;