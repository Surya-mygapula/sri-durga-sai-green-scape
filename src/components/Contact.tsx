import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `New Contact Form Submission:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Message: ${formData.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Replace with your WhatsApp number (include country code)
      const whatsappNumber = '919959226616'; // Indian number with country code
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again.',
      });
    }
  };

  const contactDetails = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'durgasainursery123@gmail.com',
      href: 'mailto:durgasainursery123@gmail.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+91 9959226616',
      href: 'tel:+919959226616'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      content: 'Kadiyam, Rajamahendravaram, Andhra Pradesh',
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: '24/7 Open',
    }
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/919959226616',
      name: 'WhatsApp'
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to discuss your plant styling needs or schedule a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start">
                  <detail.icon className="h-8 w-8 text-green-nest-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{detail.title}</h3>
                    {detail.href ? (
                      <a href={detail.href} className="mt-1 text-gray-600 hover:text-green-nest-700 transition-colors">
                        {detail.content}
                      </a>
                    ) : (
                      <p className="mt-1 text-gray-600">{detail.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-nest-500 focus:ring-green-nest-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-nest-500 focus:ring-green-nest-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-nest-500 focus:ring-green-nest-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-nest-500 focus:ring-green-nest-500"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500 mt-2">
                  You will be redirected to WhatsApp to send your message.
                </p>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-nest-600 hover:bg-green-nest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-nest-500 disabled:bg-gray-400"
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    status.success
                      ? 'bg-green-50 text-green-800'
                      : status.error
                      ? 'bg-red-50 text-red-800'
                      : ''
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 