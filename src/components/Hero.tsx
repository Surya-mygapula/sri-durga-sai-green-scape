import { motion } from 'framer-motion';

export default function Hero({ onOpenCatalog }: { onOpenCatalog: () => void }) {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Space with Nature's Beauty
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Expert plant styling and design solutions for your home and office. Create a healthier, more beautiful environment with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-nest-600 text-white px-8 py-3 rounded-lg hover:bg-green-nest-700 transition-colors"
            >
              Book a Consultation
            </a>
            <button
              onClick={onOpenCatalog}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Our Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 