import React, { useState } from 'react';
import { Users, TrendingDown, Shield, Star, MapPin, Clock, CheckCircle } from 'lucide-react';

interface CommunityPool {
  id: string;
  name: string;
  category: string;
  members: number;
  targetMembers: number;
  discount: string;
  premium: string;
  originalPremium: string;
  coverage: string;
  location: string;
  timeLeft: string;
  features: string[];
  memberTypes: string[];
  status: 'forming' | 'active' | 'full';
}

const CommunityPools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [joinedPools, setJoinedPools] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Pools', icon: Users },
    { id: 'farmers', name: 'Farmers', icon: Shield },
    { id: 'gig-workers', name: 'Gig Workers', icon: TrendingDown },
    { id: 'daily-wage', name: 'Daily Wage Workers', icon: Users },
    { id: 'small-business', name: 'Small Business', icon: Star }
  ];

  const communityPools: CommunityPool[] = [
    {
      id: 'pool1',
      name: 'Delhi NCR Farmers Health Pool',
      category: 'farmers',
      members: 847,
      targetMembers: 1000,
      discount: '35% OFF',
      premium: '₹1,300/month',
      originalPremium: '₹2,000/month',
      coverage: '₹3,00,000',
      location: 'Delhi NCR',
      timeLeft: '12 days left to join',
      status: 'forming',
      features: [
        'Crop-related injury coverage',
        'Seasonal payment flexibility',
        'Rural hospital network',
        'Emergency transport',
        'Family coverage included'
      ],
      memberTypes: ['Rice Farmers', 'Wheat Farmers', 'Vegetable Growers', 'Dairy Farmers']
    },
    {
      id: 'pool2',
      name: 'Gig Workers United Health',
      category: 'gig-workers',
      members: 1250,
      targetMembers: 1500,
      discount: '40% OFF',
      premium: '₹850/month',
      originalPremium: '₹1,400/month',
      coverage: '₹2,50,000',
      location: 'Mumbai, Pune, Bangalore',
      timeLeft: '5 days left to join',
      status: 'forming',
      features: [
        'Accident protection during work',
        'No medical tests required',
        'Flexible premium dates',
        'Two-wheeler accident cover',
        'Personal accident ₹5 lakhs'
      ],
      memberTypes: ['Delivery Partners', 'Cab Drivers', 'Freelancers', 'Food Delivery']
    },
    {
      id: 'pool3',
      name: 'Construction Workers Safety Pool',
      category: 'daily-wage',
      members: 2000,
      targetMembers: 2000,
      discount: '45% OFF',
      premium: '₹600/month',
      originalPremium: '₹1,100/month',
      coverage: '₹2,00,000',
      location: 'Pan India',
      timeLeft: 'Pool Active',
      status: 'active',
      features: [
        'Work-related injury coverage',
        'Hospitalization benefits',
        'Disability support',
        'Family income protection',
        'Emergency cash assistance'
      ],
      memberTypes: ['Construction Workers', 'Painters', 'Electricians', 'Plumbers']
    },
    {
      id: 'pool4',
      name: 'Small Business Owners Shield',
      category: 'small-business',
      members: 156,
      targetMembers: 500,
      discount: '30% OFF',
      premium: '₹1,800/month',
      originalPremium: '₹2,500/month',
      coverage: '₹5,00,000',
      location: 'Tier 2 & 3 Cities',
      timeLeft: '25 days left to join',
      status: 'forming',
      features: [
        'Business interruption cover',
        'Health & life coverage',
        'Equipment protection',
        'Public liability',
        'Key person insurance'
      ],
      memberTypes: ['Shop Owners', 'Restaurant Owners', 'Service Providers', 'Manufacturers']
    }
  ];

  const filteredPools = selectedCategory === 'all' 
    ? communityPools 
    : communityPools.filter(pool => pool.category === selectedCategory);

  const joinPool = (poolId: string) => {
    setJoinedPools(prev => [...prev, poolId]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'forming': return 'text-blue-600 bg-blue-100';
      case 'active': return 'text-green-600 bg-green-100';
      case 'full': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'forming': return 'Forming';
      case 'active': return 'Active';
      case 'full': return 'Full';
      default: return status;
    }
  };

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community <span className="text-indigo-600">Insurance Pools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join forces with people in similar professions to get group discounts and better coverage rates.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <TrendingDown className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Lower Premiums</h3>
              <p className="text-sm text-gray-600">Save 30-45% on insurance premiums through collective bargaining</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Better Coverage</h3>
              <p className="text-sm text-gray-600">Access specialized coverage designed for your profession</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-sm text-gray-600">Share experiences and get help from peers in similar situations</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Pools Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPools.map((pool) => (
            <div key={pool.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{pool.name}</h3>
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{pool.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{pool.timeLeft}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(pool.status)}`}>
                    {getStatusText(pool.status)}
                  </span>
                </div>

                {/* Discount Badge */}
                <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-yellow-300">{pool.discount}</div>
                      <div className="text-sm opacity-90">Group Discount</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{pool.premium}</div>
                      <div className="text-sm opacity-75 line-through">{pool.originalPremium}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Pool Progress</span>
                    <span className="text-sm text-gray-600">{pool.members}/{pool.targetMembers} members</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(pool.members / pool.targetMembers) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Coverage Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{pool.coverage}</div>
                      <div className="text-sm text-gray-600">Coverage Amount</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">{pool.members}</div>
                      <div className="text-sm text-gray-600">Active Members</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {pool.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Member Types */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Suitable for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pool.memberTypes.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  {joinedPools.includes(pool.id) ? (
                    <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Joined Pool</span>
                    </button>
                  ) : pool.status === 'full' ? (
                    <button disabled className="flex-1 bg-gray-400 text-white py-3 px-4 rounded-xl font-semibold cursor-not-allowed">
                      Pool Full
                    </button>
                  ) : (
                    <button
                      onClick={() => joinPool(pool.id)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors"
                    >
                      Join Pool
                    </button>
                  )}
                  
                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find a pool that fits your needs?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our AI can help create a new community pool for your profession or location. 
            Start with just 10 members and watch your group grow!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Create New Pool
            </button>
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Get Notified of New Pools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPools;