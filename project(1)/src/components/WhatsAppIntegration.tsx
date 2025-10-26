import React, { useState } from 'react';
import { MessageSquare, Bell, CheckCircle, Clock, FileText, Phone } from 'lucide-react';

const WhatsAppIntegration: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const features = [
    {
      icon: Bell,
      title: 'Policy Reminders',
      description: 'Get automated reminders for premium payments, policy renewals, and important dates',
      example: '📅 Reminder: Your health insurance premium of ₹2,400 is due on March 15th. Pay now to avoid lapse.'
    },
    {
      icon: FileText,
      title: 'Claim Updates',
      description: 'Real-time notifications about your claim status, approvals, and payments',
      example: '✅ Good news! Your health insurance claim #HC2024001 has been approved. ₹15,000 will be credited in 2-3 days.'
    },
    {
      icon: CheckCircle,
      title: 'Policy Updates',
      description: 'Important updates about your policies, coverage changes, and new benefits',
      example: '🔄 Your policy now includes mental health coverage at no extra cost. Check your updated policy document.'
    },
    {
      icon: MessageSquare,
      title: 'Quick Support',
      description: 'Get instant answers to common questions and connect with support agents',
      example: '🤝 Hi! I\'m your AI assistant. Type "claim status" to check your claims or "payment" to make premium payments.'
    }
  ];

  const handleSubscribe = () => {
    if (phoneNumber) {
      setIsSubscribed(true);
      // In real implementation, this would integrate with WhatsApp Business API
    }
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 rounded-full p-4">
              <MessageSquare className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Connected via <span className="text-green-600">WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant policy updates, claim notifications, and support through WhatsApp - 
            the app you already use every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 rounded-lg p-3">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {feature.description}
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-gray-200 text-sm text-gray-700 italic">
                      {feature.example}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Phone Mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
              {/* Phone Header */}
              <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">InsureAI Bot</h4>
                  <p className="text-sm opacity-90">Online</p>
                </div>
                <div className="ml-auto">
                  <Phone className="h-5 w-5" />
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                  <p className="text-sm">Welcome to InsureAI! 👋</p>
                  <p className="text-sm mt-1">I can help you with:</p>
                  <p className="text-sm mt-1">• Policy reminders</p>
                  <p className="text-sm">• Claim updates</p>
                  <p className="text-sm">• Quick support</p>
                  <span className="text-xs text-gray-500">2:30 PM</span>
                </div>

                <div className="bg-green-500 text-white rounded-2xl p-3 max-w-xs ml-auto">
                  <p className="text-sm">Check my claim status</p>
                  <span className="text-xs opacity-75">2:31 PM</span>
                </div>

                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                  <p className="text-sm">✅ Your health claim #HC2024001 is approved!</p>
                  <p className="text-sm mt-1">Amount: ₹15,000</p>
                  <p className="text-sm">Settlement in 2-3 days</p>
                  <span className="text-xs text-gray-500">2:31 PM</span>
                </div>

                <div className="bg-green-500 text-white rounded-2xl p-3 max-w-xs ml-auto">
                  <p className="text-sm">Great! When is my next premium due?</p>
                  <span className="text-xs opacity-75">2:32 PM</span>
                </div>

                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                  <p className="text-sm">📅 Your next premium of ₹2,400 is due on March 15th</p>
                  <p className="text-sm mt-1">Would you like to set up auto-payment?</p>
                  <span className="text-xs text-gray-500">2:32 PM</span>
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full p-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm focus:outline-none px-3 py-1"
                />
                <button className="bg-green-600 text-white p-2 rounded-full">
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
              <div className="flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span className="text-sm font-medium">New message</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isSubscribed ? 'Successfully Subscribed!' : 'Get Started with WhatsApp Notifications'}
            </h3>
            {isSubscribed ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-semibold">WhatsApp notifications activated!</span>
                </div>
                <p className="text-sm">
                  You'll receive a welcome message shortly on +91 {phoneNumber}
                </p>
              </div>
            ) : (
              <p className="text-gray-600">
                Enter your WhatsApp number to receive policy updates, claim notifications, and instant support.
              </p>
            )}
          </div>

          {!isSubscribed ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
              <button
                onClick={handleSubscribe}
                disabled={!phoneNumber}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe to WhatsApp
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Test WhatsApp Bot
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors">
                Notification Settings
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By subscribing, you agree to receive WhatsApp messages from InsureAI. 
              You can opt-out anytime by replying STOP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppIntegration;