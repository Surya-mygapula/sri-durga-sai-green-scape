import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Book a Visit',
    description: 'Schedule a consultation with our plant experts to discuss your space and requirements.',
    icon: CalendarIcon,
  },
  {
    title: 'Custom Plan',
    description: 'We create a personalized plant styling plan tailored to your space and preferences.',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Installation',
    description: 'Our team handles the complete installation of your plants and styling elements.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Optional Maintenance',
    description: 'Choose from our maintenance packages to keep your plants thriving.',
    icon: ClockIcon,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process makes it easy to transform your space with beautiful plants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-nest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-green-nest-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 