import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import {
  HomeIcon,
  BuildingOfficeIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  PaintBrushIcon,
  BeakerIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

const services: Service[] = [
  {
    title: "Indoor Plant Styling",
    description: "Transform your indoor spaces with carefully selected plants that complement your decor and improve air quality.",
    icon: HomeIcon
  },
  {
    title: "Balcony & Terrace Gardens",
    description: "Create your own urban oasis with our balcony and terrace garden design services.",
    icon: BuildingOfficeIcon
  },
  {
    title: "Outdoor Landscaping",
    description: "Professional landscaping services to enhance your outdoor spaces with beautiful plants and design elements.",
    icon: SunIcon
  },
  {
    title: "Custom Plant Solutions",
    description: "Tailored plant solutions for your specific needs, whether it's for a corporate space or a residential area.",
    icon: WrenchScrewdriverIcon
  },
  {
    title: "All Varieties of Plants",
    description: "Explore our vast collection of plants, from rare exotics to timeless classics, to find the perfect fit for your space.",
    icon: SparklesIcon
  },
  {
    title: "Custom Designed Pots",
    description: "Elevate your plants with our range of custom designed pots and planters, crafted to match your unique style.",
    icon: PaintBrushIcon
  },
  {
    title: "Premium Plant-Based Soil",
    description: "Nourish your plants with our specially formulated, nutrient-rich, plant-based soil for optimal health and growth.",
    icon: BeakerIcon
  },
  {
    title: "Plant Maintenance",
    description: "Ensure your green investments thrive with our expert plant care and maintenance services.",
    icon: ArrowPathIcon
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of plant styling and design services to transform your spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-green-nest-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-6 w-6 text-green-nest-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 