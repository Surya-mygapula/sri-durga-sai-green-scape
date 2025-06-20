import { motion } from 'framer-motion';
import { useState } from 'react';

// Use Vite's glob import to automatically get all images from the gallery folder.
// The key is the path, and the value is a function to load the module.
const imageModules = import.meta.glob('../components/gallery/*.{jpg,jpeg}', { eager: true });

// Create the images array dynamically from the imported modules.
const images = Object.keys(imageModules).map((path) => {
  return {
    // The `default` property holds the resolved URL of the image.
    src: (imageModules[path] as { default: string }).default,
    alt: 'Plant styling project', // Removed numbering from alt text
  };
});

// --- DIAGNOSTIC LOG ---
// This will show us in the browser console exactly what images Vite has found.
console.log('Vite found these image modules:', imageModules);
console.log(`Created an array with ${images.length} images.`);
// --- END LOG ---

const IMAGES_PER_PAGE = 6; // Display 6 images per "page" (2 full rows)

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + IMAGES_PER_PAGE);
  };

  const displayedImages = images.slice(0, visibleCount);
  const showMoreButtonVisible = visibleCount < images.length;

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent plant styling projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`} // Use a more unique key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % IMAGES_PER_PAGE) * 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered "Show More" Button below the grid */}
        {showMoreButtonVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleShowMore}
              className="bg-green-nest-600 text-white px-8 py-3 rounded-lg hover:bg-green-nest-700 transition-colors font-semibold text-lg inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Show More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
} 