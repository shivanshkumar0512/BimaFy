import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SupportedLanguage } from '../utils/translations';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  currentLanguage: SupportedLanguage;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ currentLanguage }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const translations = {
    en: {
      title: 'Get in Touch',
      subtitle: 'Have questions about insurance? We\'re here to help you make informed decisions.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...'
      },
      contact: {
        email: 'hello@bimafy.com',
        phone: '+91 93105 04576',
        address: 'Delhi, India'
      },
      success: 'Message sent successfully! We\'ll get back to you soon.',
      error: 'Failed to send message. Please try again.',
      placeholders: {
        name: 'Enter your full name',
        email: 'Enter your email address',
        subject: 'What\'s this about?',
        message: 'Tell us how we can help you...'
      }
    },
    hi: {
      title: 'संपर्क में रहें',
      subtitle: 'बीमा के बारे में प्रश्न हैं? हम आपको जानकारी पूर्ण निर्णय लेने में मदद करने के लिए यहाँ हैं।',
      form: {
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        subject: 'विषय',
        message: 'आपका संदेश',
        send: 'संदेश भेजें',
        sending: 'भेजा जा रहा है...'
      },
      contact: {
        email: 'hello@bimafy.com',
        phone: '+91 93105 04576',
        address: 'दिल्ली, भारत',
      },
      success: 'संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।',
      error: 'संदेश भेजने में विफल। कृपया पुनः प्रयास करें।',
      placeholders: {
        name: 'अपना पूरा नाम दर्ज करें',
        email: 'अपना ईमेल पता दर्ज करें',
        subject: 'यह किस बारे में है?',
        message: 'हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं...'
      }
    },
    bn: {
      title: 'যোগাযোগ করুন',
      subtitle: 'বীমা সম্পর্কে প্রশ্ন আছে? আমরা আপনাকে সঠিক সিদ্ধান্ত নিতে সাহায্য করার জন্য এখানে আছি।',
      form: {
        name: 'পূর্ণ নাম',
        email: 'ইমেইল ঠিকানা',
        subject: 'বিষয়',
        message: 'আপনার বার্তা',
        send: 'বার্তা পাঠান',
        sending: 'পাঠানো হচ্ছে...'
      },
      contact: {
        email: 'hello@bimafy.com',
        phone: '+91 93105 04576',
        address: 'দিল্লি, ভারত'
      },
      success: 'বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
      error: 'বার্তা পাঠাতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।',
      placeholders: {
        name: 'আপনার পূর্ণ নাম লিখুন',
        email: 'আপনার ইমেইল ঠিকানা লিখুন',
        subject: 'এটি কী সম্পর্কে?',
        message: 'আমরা কীভাবে আপনাকে সাহায্য করতে পারি তা বলুন...'
      }
    },
    ta: {
      title: 'தொடர்பு கொள்ளுங்கள்',
      subtitle: 'காப்பீட்டைப் பற்றி கேள்விகள் உள்ளதா? தகவலறிந்த முடிவுகளை எடுக்க உங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம்।',
      form: {
        name: 'முழு பெயர்',
        email: 'மின்னஞ்சல் முகவரி',
        subject: 'விषயம்',
        message: 'உங்கள் செய்தி',
        send: 'செய்தி அனுப்பு',
        sending: 'அனுப்பப்படுகிறது...'
      },
      contact: {
        email: 'hello@bimafy.com',
        phone: '+91 93105 04576',
        address: 'டெல்லி, இந்தியா'
      },
      success: 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! நாங்கள் விரைவில் உங்களை தொடர்பு கொள்வோம்।',
      error: 'செய்தி அனுப்பத் தவறிவிட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்।',
      placeholders: {
        name: 'உங்கள் முழு பெயரை உள்ளிடுங்கள்',
        email: 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடுங்கள்',
        subject: 'இது எதைப் பற்றியது?',
        message: 'நாங்கள் உங்களுக்கு எப்படி உதவ முடியும் என்று சொல்லுங்கள்...'
      }
    },
    te: {
      title: 'సంప్రదించండి',
      subtitle: 'బీమా గురించి ప్రశ్నలు ఉన్నాయా? సమాచార పూర్వక నిర్ణయాలు తీసుకోవడంలో మీకు సహాయం చేయడానికి మేము ఇక్కడ ఉన్నాము।',
      form: {
        name: 'పూర్తి పేరు',
        email: 'ఇమెయిల్ చిరునామా',
        subject: 'విషయం',
        message: 'మీ సందేశం',
        send: 'సందేశం పంపండి',
        sending: 'పంపుతున్నాం...'
      },
      contact: {
        email: 'hello@bimafy.com',
        phone: '+91 93105 04576',
        address: 'న్యూఢిల్లీ, భారతదేశం'
      },
      success: 'సందేశం విజయవంతంగా పంపబడింది! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము।',
      error: 'సందేశం పంపడంలో విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి।',
      placeholders: {
        name: 'మీ పూర్తి పేరును నమోదు చేయండి',
        email: 'మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి',
        subject: 'ఇది దేని గురించి?',
        message: 'మేము మీకు ఎలా సహాయం చేయగలమో చెప్పండి...'
      }
    }
  };

  const t = translations[currentLanguage];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Attempting to send email with EmailJS...');
      console.log('Form data:', formData);
      
      const result = await emailjs.sendForm(
        'service_xu9xk2c',    
        'template_5uwxymk',    
        form.current!,
        '-Qx3Wwo8BoxEekons'     
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('EmailJS failed with status:', result.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {currentLanguage === 'en' ? 'Contact Information' :
                 currentLanguage === 'hi' ? 'संपर्क जानकारी' :
                 currentLanguage === 'bn' ? 'যোগাযোগের তথ্য' :
                 currentLanguage === 'ta' ? 'தொடர்பு தகவல்' :
                 'సంప్రదింపు సమాచారం'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {currentLanguage === 'en' ? 'Email' :
                       currentLanguage === 'hi' ? 'ईमेल' :
                       currentLanguage === 'bn' ? 'ইমেইল' :
                       currentLanguage === 'ta' ? 'மின்னஞ்சல்' :
                       'ఇమెయిల్'}
                    </h4>
                    <p className="text-gray-600">{t.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {currentLanguage === 'en' ? 'Phone' :
                       currentLanguage === 'hi' ? 'फोन' :
                       currentLanguage === 'bn' ? 'ফোন' :
                       currentLanguage === 'ta' ? 'தொலைபேசி' :
                       'ఫోన్'}
                    </h4>
                    <p className="text-gray-600">{t.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {currentLanguage === 'en' ? 'Location' :
                       currentLanguage === 'hi' ? 'स्थान' :
                       currentLanguage === 'bn' ? 'অবস্থান' :
                       currentLanguage === 'ta' ? 'இடம்' :
                       'స్థానం'}
                    </h4>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                {currentLanguage === 'en' ? 'Why Choose BimaFy?' :
                 currentLanguage === 'hi' ? 'BimaFy क्यों चुनें?' :
                 currentLanguage === 'bn' ? 'কেন BimaFy বেছে নিবেন?' :
                 currentLanguage === 'ta' ? 'ஏன் BimaFy ஐ தேர்வு செய்ய வேண்டும்?' :
                 'BimaFy ని ఎందుకు ఎంచుకోవాలి?'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>
                    {currentLanguage === 'en' ? 'AI-powered recommendations' :
                     currentLanguage === 'hi' ? 'AI-संचालित सिफारिशें' :
                     currentLanguage === 'bn' ? 'AI-চালিত সুপারিশ' :
                     currentLanguage === 'ta' ? 'AI-இயங்கும் பரிந்துரைகள்' :
                     'AI-ఆధారిత సిఫార్సులు'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>
                    {currentLanguage === 'en' ? 'Multi-language support' :
                     currentLanguage === 'hi' ? 'बहु-भाषा समर्थन' :
                     currentLanguage === 'bn' ? 'বহু-ভাষা সমর্থন' :
                     currentLanguage === 'ta' ? 'பல மொழி ஆதரவு' :
                     'బహుళ భాషా మద్దతు'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>
                    {currentLanguage === 'en' ? '24/7 customer support' :
                     currentLanguage === 'hi' ? '24/7 ग्राहक सहायता' :
                     currentLanguage === 'bn' ? '24/7 গ্রাহক সহায়তা' :
                     currentLanguage === 'ta' ? '24/7 வாடிக்கையாளர் ஆதரவு' :
                     '24/7 కస్టమర్ సపోర్ట్'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.placeholders.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.placeholders.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.placeholders.subject}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.placeholders.message}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">{t.success}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm">{t.error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? t.form.sending : t.form.send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;