import React, { useState } from 'react';
import { Check, X, Download, Star, Shield, Heart, Car, Home } from 'lucide-react';
import jsPDF from 'jspdf';

interface Policy {
  id: string;
  name: string;
  type: 'health' | 'life' | 'vehicle' | 'home';
  provider: string;
  premium: string;
  coverage: string;
  rating: number;
  features: string[];
  notIncluded: string[];
  badge?: string;
  recommended?: boolean;
}

const PolicyComparison: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'health' | 'life' | 'vehicle' | 'home'>('health');
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);

  const policies: Record<string, Policy[]> = {
    health: [
      {
        id: 'h1',
        name: 'Family Health Shield Pro',
        type: 'health',
        provider: 'Star Health',
        premium: '₹2,400/month',
        coverage: '₹5,00,000',
        rating: 4.8,
        recommended: true,
        badge: 'AI Recommended',
        features: [
          'Cashless Treatment at 8000+ hospitals',
          'Pre-existing Conditions Covered after 2 years',
          'Maternity Benefits up to ₹50,000',
          'Mental Health Coverage',
          'Annual Health Check-up',
          'Ambulance Cover up to ₹2,000',
          'Day Care Procedures Covered'
        ],
        notIncluded: [
          'Cosmetic Surgery',
          'Alternative Medicine',
          'Experimental Treatments'
        ]
      },
      {
        id: 'h2',
        name: 'Essential Health Care',
        type: 'health',
        provider: 'HDFC ERGO',
        premium: '₹1,800/month',
        coverage: '₹3,00,000',
        rating: 4.5,
        badge: 'Budget Friendly',
        features: [
          'Cashless Treatment at 5000+ hospitals',
          'Pre-existing Conditions after 4 years',
          'Emergency Ambulance Cover',
          'Room Rent up to ₹5,000/day',
          'ICU Cover',
          'Surgical Procedures'
        ],
        notIncluded: [
          'Maternity Benefits',
          'Mental Health Coverage',
          'Alternative Medicine',
          'Dental Treatment'
        ]
      },
      {
        id: 'h3',
        name: 'Premium Family Cover',
        type: 'health',
        provider: 'Max Bupa',
        premium: '₹3,200/month',
        coverage: '₹10,00,000',
        rating: 4.9,
        badge: 'Comprehensive',
        features: [
          'Cashless Treatment at 10000+ hospitals',
          'Pre-existing Conditions Covered from Day 1',
          'Unlimited Maternity Benefits',
          'Mental Health & Addiction Treatment',
          'International Coverage',
          'Home Healthcare Services',
          'Second Medical Opinion'
        ],
        notIncluded: [
          'Cosmetic Surgery',
          'War-related Injuries'
        ]
      },
      {
        id: 'h4',
        name: 'Senior Citizen Health Plus',
        type: 'health',
        provider: 'ICICI Lombard',
        premium: '₹4,200/month',
        coverage: '₹8,00,000',
        rating: 4.6,
        badge: 'Senior Care',
        features: [
          'No Age Limit',
          'Pre-existing Conditions Covered after 1 year',
          'Alzheimer & Dementia Coverage',
          'Home Nursing Care',
          'Medical Equipment Cover',
          'Physiotherapy Coverage',
          'Ayurveda & Homeopathy'
        ],
        notIncluded: [
          'Adventure Sports',
          'Pregnancy Related Expenses',
          'Infertility Treatment'
        ]
      },
      {
        id: 'h5',
        name: 'Young Professional Plan',
        type: 'health',
        provider: 'Niva Bupa',
        premium: '₹1,200/month',
        coverage: '₹2,50,000',
        rating: 4.3,
        badge: 'Youth Special',
        features: [
          'Gym Membership Discounts',
          'Mental Health Counseling',
          'Wellness Rewards Program',
          'Telemedicine Consultations',
          'Vaccination Coverage',
          'Health Check-up Annually',
          'Emergency Ambulance'
        ],
        notIncluded: [
          'Maternity Benefits',
          'Dental Treatment',
          'Vision Correction Surgery'
        ]
      },
      {
        id: 'h6',
        name: 'Critical Illness Shield',
        type: 'health',
        provider: 'SBI General',
        premium: '₹3,800/month',
        coverage: '₹15,00,000',
        rating: 4.7,
        badge: 'Specialized',
        features: [
          'Critical Illness Coverage',
          'Cancer Treatment up to ₹25 lakhs',
          'Organ Transplant Coverage',
          'Heart Surgery Benefits',
          'Stroke Recovery Support',
          'International Treatment',
          'Second Opinion Services'
        ],
        notIncluded: [
          'Self-inflicted Injuries',
          'Pre-existing for 3 years',
          'Routine Check-ups'
        ]
      },
      {
        id: 'h7',
        name: 'Family Floater Deluxe',
        type: 'health',
        provider: 'Bajaj Allianz',
        premium: '₹2,800/month',
        coverage: '₹6,00,000',
        rating: 4.4,
        badge: 'Family Plan',
        features: [
          'Coverage for 6 family members',
          'Newborn Baby Coverage from Day 1',
          'Maternity Benefits up to ₹75,000',
          'Dental & Eye Care',
          'Domiciliary Treatment',
          'AYUSH Treatment',
          'Preventive Health Check-up'
        ],
        notIncluded: [
          'Infertility Treatment',
          'Gender Change Surgery',
          'War & Nuclear Risks'
        ]
      },
      {
        id: 'h8',
        name: 'Super Top-Up Health',
        type: 'health',
        provider: 'Oriental Insurance',
        premium: '₹900/month',
        coverage: '₹20,00,000',
        rating: 4.2,
        badge: 'Top-Up',
        features: [
          'Top-up over existing policy',
          'Deductible of ₹3 lakhs',
          'No Medical Check-up required',
          'Cashless at 4000+ hospitals',
          'Worldwide Coverage',
          'OPD Benefits',
          'Day Care Procedures'
        ],
        notIncluded: [
          'First ₹3 lakhs expenses',
          'Maternity Benefits',
          'Dental Treatment'
        ]
      },
      {
        id: 'h9',
        name: 'Comprehensive Health Guard',
        type: 'health',
        provider: 'United India Insurance',
        premium: '₹3,500/month',
        coverage: '₹12,00,000',
        rating: 4.5,
        badge: 'Complete Cover',
        features: [
          'Unlimited Room Rent',
          'Pre & Post Hospitalization',
          'Organ Donor Cover',
          'Mental Health Treatment',
          'Rehabilitation Expenses',
          'Alternative Medicine',
          'Health Coaching Services'
        ],
        notIncluded: [
          'Cosmetic Surgery',
          'Fertility Treatment',
          'Experimental Procedures'
        ]
      }
    ],
    life: [
      {
        id: 'l1',
        name: 'Term Life Secure Plus',
        type: 'life',
        provider: 'LIC',
        premium: '₹800/month',
        coverage: '₹25,00,000',
        rating: 4.9,
        recommended: true,
        badge: 'Best Value',
        features: [
          '100% Claim Settlement Record',
          'Accidental Death Benefit (Double)',
          'Terminal Illness Cover',
          'Flexible Premium Payment',
          'Tax Benefits under 80C',
          'Online Policy Management'
        ],
        notIncluded: [
          'Maturity Benefits',
          'Suicide within 1 year',
          'Death due to intoxication'
        ]
      },
      {
        id: 'l2',
        name: 'Max Life Smart Term',
        type: 'life',
        provider: 'Max Life',
        premium: '₹750/month',
        coverage: '₹20,00,000',
        rating: 4.7,
        badge: 'Popular Choice',
        features: [
          'Quick Claim Settlement',
          'Terminal Illness Benefit',
          'Accidental Death Benefit',
          'Premium Return Option',
          'Critical Illness Rider Available'
        ],
        notIncluded: [
          'Natural Death after 80 years',
          'Self-inflicted Injuries',
          'Participation in War'
        ]
      },
      {
        id: 'l3',
        name: 'Whole Life Protection',
        type: 'life',
        provider: 'HDFC Life',
        premium: '₹1,500/month',
        coverage: '₹15,00,000',
        rating: 4.6,
        badge: 'Lifelong Cover',
        features: [
          'Coverage till 100 years',
          'Guaranteed Cash Values',
          'Loan Facility Available',
          'Bonus Accumulation',
          'Maturity Benefits',
          'Tax Benefits',
          'Flexible Premium Payment'
        ],
        notIncluded: [
          'Suicide within 2 years',
          'Death due to drugs',
          'War & Nuclear Risks'
        ]
      },
      {
        id: 'l4',
        name: 'Women Special Term Plan',
        type: 'life',
        provider: 'SBI Life',
        premium: '₹650/month',
        coverage: '₹30,00,000',
        rating: 4.8,
        badge: 'Women Special',
        features: [
          'Special rates for women',
          'Breast Cancer Coverage',
          'Maternity Death Benefit',
          'Child Education Fund',
          'Premium Waiver Benefit',
          'Accidental Death Cover',
          'Terminal Illness Benefit'
        ],
        notIncluded: [
          'Adventure Sports Deaths',
          'Self-inflicted Injuries',
          'Drug-related Deaths'
        ]
      },
      {
        id: 'l5',
        name: 'Unit Linked Insurance Plan',
        type: 'life',
        provider: 'ICICI Prudential',
        premium: '₹2,000/month',
        coverage: '₹10,00,000',
        rating: 4.3,
        badge: 'Investment + Insurance',
        features: [
          'Market-linked Returns',
          'Fund Switching Options',
          'Partial Withdrawal Facility',
          'Top-up Premium Option',
          'Life Coverage',
          'Loyalty Additions',
          'Systematic Withdrawal Plan'
        ],
        notIncluded: [
          'Guaranteed Returns',
          'Capital Protection',
          'Fixed Maturity Amount'
        ]
      },
      {
        id: 'l6',
        name: 'Child Future Plan',
        type: 'life',
        provider: 'Bajaj Allianz Life',
        premium: '₹1,200/month',
        coverage: '₹50,00,000',
        rating: 4.5,
        badge: 'Child Plan',
        features: [
          'Education Milestone Benefits',
          'Marriage Benefit',
          'Premium Waiver on Death',
          'Accidental Death Benefit',
          'Child Scholarship Program',
          'Health Check-up Benefits',
          'Maturity Benefit'
        ],
        notIncluded: [
          'Immediate Death Benefit',
          'Loan Facility',
          'Surrender Value in first 3 years'
        ]
      },
      {
        id: 'l7',
        name: 'Pension Plus Term Plan',
        type: 'life',
        provider: 'Tata AIA',
        premium: '₹1,800/month',
        coverage: '₹40,00,000',
        rating: 4.4,
        badge: 'Retirement',
        features: [
          'Retirement Corpus Building',
          'Vesting Age Flexibility',
          'Annuity Options',
          'Death Benefit',
          'Tax Benefits under 80C & 80CCC',
          'Loyalty Additions',
          'Premium Holiday Option'
        ],
        notIncluded: [
          'Early Withdrawal without penalty',
          'Guaranteed Pension Amount',
          'Pre-mature Death Benefits'
        ]
      },
      {
        id: 'l8',
        name: 'High Coverage Term',
        type: 'life',
        provider: 'Aegon Life',
        premium: '₹1,100/month',
        coverage: '₹1,00,00,000',
        rating: 4.6,
        badge: 'High Sum Assured',
        features: [
          '₹1 Crore Life Cover',
          'Increasing Coverage Option',
          'Accidental Death Benefit',
          'Waiver of Premium',
          'Terminal Illness Cover',
          'Tax Benefits',
          'Online Application Process'
        ],
        notIncluded: [
          'Maturity Benefits',
          'Cash Value',
          'Loan Facility'
        ]
      },
      {
        id: 'l9',
        name: 'Group Term Life',
        type: 'life',
        provider: 'Star Union Dai-ichi',
        premium: '₹450/month',
        coverage: '₹12,00,000',
        rating: 4.2,
        badge: 'Group Plan',
        features: [
          'Employer Group Benefits',
          'No Medical Check-up',
          'Immediate Coverage',
          'Accidental Death Cover',
          'Family Coverage Option',
          'Renewable Annually',
          'Claim Settlement within 30 days'
        ],
        notIncluded: [
          'Individual Application',
          'Premium Return',
          'Maturity Benefits'
        ]
      }
    ],
    vehicle: [
      {
        id: 'v1',
        name: 'Comprehensive Auto Cover',
        type: 'vehicle',
        provider: 'Bajaj Allianz',
        premium: '₹450/month',
        coverage: '₹8,00,000',
        rating: 4.6,
        badge: 'Popular',
        features: [
          'Zero Depreciation Cover',
          'Engine Protection',
          'Personal Accident Cover ₹15 lakhs',
          '24/7 Roadside Assistance',
          'Key Replacement',
          'Emergency Hotel & Travel Expenses'
        ],
        notIncluded: [
          'Mechanical Breakdown',
          'Wear and Tear',
          'Racing or Speed Testing'
        ]
      },
      {
        id: 'v2',
        name: 'Third Party Plus',
        type: 'vehicle',
        provider: 'ICICI Lombard',
        premium: '₹180/month',
        coverage: '₹20,00,000',
        rating: 4.2,
        badge: 'Budget Friendly',
        features: [
          'Third Party Liability',
          'Personal Accident Cover ₹15 lakhs',
          'Legal Liability to Paid Driver',
          'Cover for Unnamed Passengers',
          'Medical Expenses for Accidents',
          'Property Damage Coverage'
        ],
        notIncluded: [
          'Own Damage Cover',
          'Theft Protection',
          'Natural Calamity Cover'
        ]
      },
      {
        id: 'v3',
        name: 'Premium Car Shield',
        type: 'vehicle',
        provider: 'HDFC ERGO',
        premium: '₹650/month',
        coverage: '₹12,00,000',
        rating: 4.8,
        badge: 'Comprehensive',
        features: [
          'Zero Depreciation for 5 years',
          'Engine & Gearbox Protection',
          'Return to Invoice',
          'Personal Belongings Cover',
          'Key & Lock Replacement',
          'Tyre & Rim Protection',
          'Emergency Transportation'
        ],
        notIncluded: [
          'Normal Wear & Tear',
          'Consequential Loss',
          'Using Vehicle for Commercial'
        ]
      },
      {
        id: 'v4',
        name: 'Two Wheeler Protection',
        type: 'vehicle',
        provider: 'Digit Insurance',
        premium: '₹85/month',
        coverage: '₹2,50,000',
        rating: 4.4,
        badge: 'Two Wheeler',
        features: [
          'Third Party Cover',
          'Personal Accident ₹1 lakh',
          'Own Damage Protection',
          'Theft Cover',
          'Roadside Assistance',
          'Emergency Medical Expenses'
        ],
        notIncluded: [
          'Engine Damage due to Water',
          'Electrical & Electronic Parts',
          'Consequential Damage'
        ]
      },
      {
        id: 'v5',
        name: 'Commercial Vehicle Cover',
        type: 'vehicle',
        provider: 'New India Assurance',
        premium: '₹1,200/month',
        coverage: '₹25,00,000',
        rating: 4.3,
        badge: 'Commercial',
        features: [
          'Goods in Transit Cover',
          'Public Liability',
          'Passenger Legal Liability',
          'Personal Accident for Driver',
          'Medical Expenses',
          'Vehicle Recovery Expenses'
        ],
        notIncluded: [
          'Loss of Profit',
          'Deterioration of Goods',
          'War & Nuclear Risks'
        ]
      },
      {
        id: 'v6',
        name: 'Pay As You Drive',
        type: 'vehicle',
        provider: 'Go Digit',
        premium: '₹250/month',
        coverage: '₹5,00,000',
        rating: 4.1,
        badge: 'Usage Based',
        features: [
          'Premium based on KM driven',
          'Telematics Device Included',
          'Safe Driving Rewards',
          'Real-time Vehicle Tracking',
          'Accident Alert System',
          'Theft Protection with GPS'
        ],
        notIncluded: [
          'Fixed Premium Advantage',
          'Manual Claim Process',
          'Coverage for Commercial Use'
        ]
      },
      {
        id: 'v7',
        name: 'Electric Vehicle Special',
        type: 'vehicle',
        provider: 'Acko Insurance',
        premium: '₹320/month',
        coverage: '₹8,00,000',
        rating: 4.5,
        badge: 'EV Special',
        features: [
          'Battery Protection Cover',
          'Charging Cable & Adapter Cover',
          'Loss of Charge Coverage',
          'Emergency Charging Assistance',
          'Motor & Controller Protection',
          'Software Update Coverage'
        ],
        notIncluded: [
          'Battery Degradation',
          'Software Malfunction',
          'Charging Infrastructure Damage'
        ]
      },
      {
        id: 'v8',
        name: 'Vintage Car Insurance',
        type: 'vehicle',
        provider: 'Royal Sundaram',
        premium: '₹800/month',
        coverage: '₹15,00,000',
        rating: 4.0,
        badge: 'Vintage',
        features: [
          'Agreed Value Coverage',
          'Spare Parts Protection',
          'Show & Exhibition Cover',
          'Restoration Cost Coverage',
          'Limited Mileage Discount',
          'Classic Car Specialist Network'
        ],
        notIncluded: [
          'Daily Commute Usage',
          'Commercial Activities',
          'Racing Events'
        ]
      },
      {
        id: 'v9',
        name: 'Multi Car Family Plan',
        type: 'vehicle',
        provider: 'Tata AIG',
        premium: '₹950/month',
        coverage: '₹18,00,000',
        rating: 4.6,
        badge: 'Family Plan',
        features: [
          'Up to 5 Vehicles Coverage',
          'No Claim Bonus Protection',
          'Family Discount Benefits',
          'Single Policy Management',
          'Cross Vehicle Benefits',
          'Emergency Contact Services'
        ],
        notIncluded: [
          'Individual Policy Benefits',
          'Separate NCB for each vehicle',
          'Different Coverage Limits'
        ]
      }
    ],
    home: [
      {
        id: 'ho1',
        name: 'Home Shield Complete',
        type: 'home',
        provider: 'ICICI Lombard',
        premium: '₹300/month',
        coverage: '₹15,00,000',
        rating: 4.4,
        badge: 'Comprehensive',
        features: [
          'Fire & Allied Perils',
          'Burglary & Theft Protection',
          'Electronic Equipment Cover',
          'Public Liability Cover',
          'Alternative Accommodation',
          'Loss of Rent Coverage'
        ],
        notIncluded: [
          'War Risks',
          'Nuclear Perils',
          'Gradual Deterioration'
        ]
      },
      {
        id: 'ho2',
        name: 'Apartment Dweller Plan',
        type: 'home',
        provider: 'Bajaj Allianz',
        premium: '₹180/month',
        coverage: '₹8,00,000',
        rating: 4.2,
        badge: 'Apartment',
        features: [
          'Contents Insurance',
          'Personal Belongings Cover',
          'Electrical Equipment Protection',
          'Jewellery & Valuables',
          'Tenant Liability Cover',
          'Guest Personal Effects'
        ],
        notIncluded: [
          'Building Structure',
          'Common Area Damage',
          'Society Property'
        ]
      },
      {
        id: 'ho3',
        name: 'Villa Protection Premium',
        type: 'home',
        provider: 'HDFC ERGO',
        premium: '₹850/month',
        coverage: '₹50,00,000',
        rating: 4.7,
        badge: 'Premium',
        features: [
          'Building & Contents Cover',
          'Swimming Pool Coverage',
          'Garden & Landscaping',
          'Domestic Help Accident Cover',
          'Power Surge Protection',
          'Home Office Equipment',
          'Art & Antiques Coverage'
        ],
        notIncluded: [
          'Business Activities',
          'Illegal Constructions',
          'Consequential Losses'
        ]
      },
      {
        id: 'ho4',
        name: 'Earthquake & Natural Disaster',
        type: 'home',
        provider: 'New India Assurance',
        premium: '₹450/month',
        coverage: '₹25,00,000',
        rating: 4.3,
        badge: 'Natural Disaster',
        features: [
          'Earthquake Coverage',
          'Flood & Cyclone Protection',
          'Landslide & Rockslide',
          'Storm & Tempest',
          'Emergency Shelter Costs',
          'Debris Removal Expenses'
        ],
        notIncluded: [
          'Nuclear Risks',
          'Terrorism (unless extended)',
          'Normal Wear & Tear'
        ]
      },
      {
        id: 'ho5',
        name: 'Tenant Home Insurance',
        type: 'home',
        provider: 'Digit Insurance',
        premium: '₹120/month',
        coverage: '₹3,00,000',
        rating: 4.1,
        badge: 'Tenant Special',
        features: [
          'Personal Belongings',
          'Temporary Accommodation',
          'Legal Liability to Landlord',
          'Accidental Damage Cover',
          'Identity Theft Protection',
          'Credit Card Fraud Cover'
        ],
        notIncluded: [
          'Building Structure',
          'Landlord Property',
          'Business Equipment'
        ]
      },
      {
        id: 'ho6',
        name: 'Smart Home Protection',
        type: 'home',
        provider: 'Go Digit',
        premium: '₹650/month',
        coverage: '₹30,00,000',
        rating: 4.6,
        badge: 'Smart Home',
        features: [
          'IoT Device Coverage',
          'Smart Security System',
          'Home Automation Equipment',
          'Cyber Security Protection',
          'Data Breach Coverage',
          'Remote Monitoring Benefits'
        ],
        notIncluded: [
          'Software Updates',
          'Technology Obsolescence',
          'Hacking for Business Use'
        ]
      },
      {
        id: 'ho7',
        name: 'Rural Home Insurance',
        type: 'home',
        provider: 'Oriental Insurance',
        premium: '₹200/month',
        coverage: '₹12,00,000',
        rating: 4.0,
        badge: 'Rural',
        features: [
          'Traditional Construction Cover',
          'Livestock Shed Protection',
          'Agricultural Equipment',
          'Rural Structures Coverage',
          'Well & Tube Well Cover',
          'Solar Panel Protection'
        ],
        notIncluded: [
          'Commercial Farming',
          'Industrial Equipment',
          'Business Liability'
        ]
      },
      {
        id: 'ho8',
        name: 'Holiday Home Cover',
        type: 'home',
        provider: 'Reliance General',
        premium: '₹400/month',
        coverage: '₹20,00,000',
        rating: 4.3,
        badge: 'Holiday Home',
        features: [
          'Seasonal Occupancy Coverage',
          'Unoccupied Period Protection',
          'Caretaker Liability Cover',
          'Rental Income Protection',
          'Guest Accident Coverage',
          'Property Management Services'
        ],
        notIncluded: [
          'Commercial Letting',
          'Permanent Residence Benefits',
          'Long-term Vacancy'
        ]
      },
      {
        id: 'ho9',
        name: 'Senior Citizen Home Plan',
        type: 'home',
        provider: 'Star Health',
        premium: '₹350/month',
        coverage: '₹18,00,000',
        rating: 4.4,
        badge: 'Senior Special',
        features: [
          'Medical Equipment Coverage',
          'Home Healthcare Setup',
          'Emergency Response System',
          'Mobility Aid Protection',
          'Home Modification Coverage',
          'Caregiver Accident Cover'
        ],
        notIncluded: [
          'Routine Medical Expenses',
          'Nursing Care Costs',
          'Long-term Care Benefits'
        ]
      }
    ]
  };

  const typeIcons = {
    health: Heart,
    life: Shield,
    vehicle: Car,
    home: Home
  };

  const togglePolicySelection = (policyId: string) => {
    setSelectedPolicies(prev => 
      prev.includes(policyId)
        ? prev.filter(id => id !== policyId)
        : prev.length < 3 ? [...prev, policyId] : prev
    );
  };

  const generatePDFReport = () => {
    const doc = new jsPDF();
    let currentY = 20;
  
    // Title
    doc.setFontSize(18);
    doc.text("Policy Comparison Report", 14, currentY);
    currentY += 20;
  
    // Individual Policy Details
    selectedPoliciesData.forEach((policy) => {
      // Check if we need a new page
      if (currentY > 250) {
        doc.addPage();
        currentY = 20;
      }
      
      doc.setFontSize(14);
      doc.text(`${policy.name} (${policy.provider})`, 14, currentY);
      currentY += 10;
      
      doc.setFontSize(12);
      doc.text(`Premium: ${policy.premium}`, 14, currentY);
      currentY += 8;
      doc.text(`Coverage: ${policy.coverage}`, 14, currentY);
      currentY += 8;
      doc.text(`Rating: ${policy.rating}`, 14, currentY);
      currentY += 12;
      
      // All Features
      doc.text("Features:", 14, currentY);
      currentY += 6;
      policy.features.forEach((feature) => {
        if (currentY > 270) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(`• ${feature}`, 20, currentY);
        currentY += 6;
      });
      currentY += 6;
      
      // All Exclusions
      doc.text("Not Included:", 14, currentY);
      currentY += 6;
      policy.notIncluded.forEach((item) => {
        if (currentY > 270) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(`• ${item}`, 20, currentY);
        currentY += 6;
      });
      currentY += 15;
    });
    
    // Comparison Summary
    if (currentY > 200) {
      doc.addPage();
      currentY = 20;
    }
    
    doc.setFontSize(16);
    doc.text("Quick Comparison Summary", 14, currentY);
    currentY += 15;
    
    doc.setFontSize(12);
    selectedPoliciesData.forEach((policy, index) => {
      if (currentY > 260) {
        doc.addPage();
        currentY = 20;
      }
      doc.text(`${index + 1}. ${policy.name}: ${policy.premium} | ${policy.coverage} | Rating: ${policy.rating}`, 14, currentY);
      currentY += 8;
    });
  
    doc.save("policy-comparison.pdf");
  };

  const currentPolicies = policies[selectedType] || [];
  const selectedPoliciesData = currentPolicies.filter(p => selectedPolicies.includes(p.id));

  return (
    <section id="compare" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare <span className="text-indigo-600">Insurance Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Side-by-side comparison of coverage, premiums, and benefits with downloadable reports.
          </p>
        </div>

        {/* Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg flex flex-wrap gap-2">
            {Object.entries(typeIcons).map(([type, Icon]) => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type as 'health' | 'life' | 'vehicle' | 'home');
                  setSelectedPolicies([]);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedType === type
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="capitalize">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Policy Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Select policies to compare (up to 3):</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPolicies.map((policy) => (
              <div
                key={policy.id}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                  selectedPolicies.includes(policy.id)
                    ? 'ring-2 ring-indigo-500 shadow-xl'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => togglePolicySelection(policy.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{policy.name}</h4>
                    <p className="text-gray-600">{policy.provider}</p>
                  </div>
                  {policy.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      policy.recommended ? 'bg-indigo-100 text-indigo-800' :
                      policy.badge === 'Best Value' ? 'bg-green-100 text-green-800' :
                      policy.badge === 'Budget Friendly' ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {policy.badge}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Premium</p>
                    <p className="font-bold text-indigo-600">{policy.premium}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Coverage</p>
                    <p className="font-bold text-green-600">{policy.coverage}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{policy.rating}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPolicies.includes(policy.id)
                      ? 'bg-indigo-600 border-indigo-600'
                      : 'border-gray-300'
                  }`}>
                    {selectedPolicies.includes(policy.id) && (
                      <Check className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedPoliciesData.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Policy Comparison</h3>
                <button
                  onClick={generatePDFReport}
                  className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Download PDF Report</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Features</td>
                    {selectedPoliciesData.map((policy) => (
                      <td key={policy.id} className="px-6 py-4 text-center">
                        <div className="font-bold text-gray-900">{policy.name}</div>
                        <div className="text-sm text-gray-600">{policy.provider}</div>
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">Monthly Premium</td>
                    {selectedPoliciesData.map((policy) => (
                      <td key={policy.id} className="px-6 py-4 text-center font-bold text-indigo-600">
                        {policy.premium}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Coverage Amount</td>
                    {selectedPoliciesData.map((policy) => (
                      <td key={policy.id} className="px-6 py-4 text-center font-bold text-green-600">
                        {policy.coverage}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">Rating</td>
                    {selectedPoliciesData.map((policy) => (
                      <td key={policy.id} className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{policy.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  
                  {/* Features comparison */}
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Key Features</td>
                    {selectedPoliciesData.map((policy) => (
                      <td key={policy.id} className="px-6 py-4">
                        <ul className="space-y-1 text-sm">
                          {policy.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-green-700">
                              <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {policy.features.length > 3 && (
                            <li className="text-gray-500 text-xs">
                              +{policy.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  <tr className="border-t border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">Not Included</td>
                    {selectedPoliciesData.map((policy) => (
                      <td key={policy.id} className="px-6 py-4">
                        <ul className="space-y-1 text-sm">
                          {policy.notIncluded.map((item, idx) => (
                            <li key={idx} className="flex items-center text-red-600">
                              <X className="h-4 w-4 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedPoliciesData.length > 0 && (
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Recommendation</h3>
            <div className="bg-white rounded-lg p-6 border border-indigo-200">
              <p className="text-gray-800 leading-relaxed">
                Based on your comparison, <strong>
                {selectedPoliciesData.find(p => p.recommended)?.name || selectedPoliciesData[0]?.name}
                </strong> offers the best value for your needs. It provides comprehensive coverage with competitive pricing. 
                The key advantages include extensive hospital network, quick claim settlement, and additional benefits 
                that align with your risk profile. Consider the premium difference against the additional coverage benefits 
                when making your final decision.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PolicyComparison;