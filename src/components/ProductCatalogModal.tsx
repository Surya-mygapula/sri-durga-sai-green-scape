import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const catalog = {
  fruitPlants: [
    "Mango Varieties", "Coconut Palms", "Psidium Guava (Allahabad)", "Sapota", "Syzygium cumini (Jamun)", "Citrus Lemon", "Annona reticulata (Ramphal)", "Annona squamosa (Custard Apple)", "Punica granatum (Bhagwa)", "Anjeer (Fig)", "Avocado", "Star Fruit", "Staberr", "Laxman Phal (Soursop)", "Cashew", "Papaya", "Kiwi", "Pampara Panasa (Pomelo)", "Dragon Fruit", "Banana", "Mulberry"
  ],
  ornamentalPlants: [
    "Aglaonema 13x13", "Bamboo Cane Palm 21x21", "Kentia Palm 21x21 5ft", "Alpinia zerumbet (Variegated)", "Spathiphyllum 13x13", "Murraya exotica 13x13", "Fountain Grass 7x8", "Plumeria (White/Yellow) 7ft", "Schefflera actinophylla 5ft", "Pseuderanthemum (Gold)", "Michelia champaca 21x21", "Dracaena 'Mahatma' 13x13", "Rhoeo 7x8", "Cannas (Pink) 13x13", "Cannas (White)", "Cannas (Bengal Tiger)", "Bauhinia galpinii 21x21", "Russelia 7x8", "Plumeria (Singapore Dwarf) 4ft", "Hymenocallis lilles 7x8", "Heliconia americana 13x13", "Syzygium (Dwarf) 18x18", "Alocasia 13x13", "China Doll Plant 21x21", "Areca Palms 21x21", "Ficus (Multi-head, Thai)", "Dracaena draco (Thai)", "Thunbergia mysorensis", "Odontonema (Muliti-branched, Thai)", "Money Plant (Variegated)", "Ipomoea (Pink/Green)"
  ],
  suppliesAndServices: [
    "Loading & Transport", "Fertilizers", "Execution and Labour", "Red Soil (6 Units)"
  ]
};

type CatalogTabs = 'fruitPlants' | 'ornamentalPlants' | 'suppliesAndServices';

export default function ProductCatalogModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const [activeTab, setActiveTab] = useState<CatalogTabs>('fruitPlants');

  if (!isOpen) return null;

  const renderList = (items: string[]) => (
    <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
      {items.map(item => (
        <li key={item} className="text-gray-700 border-b border-gray-200 pb-2 text-sm">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="relative bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-xl font-semibold text-gray-800">Our Plant Catalog</h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Content Body with Tabs */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              {/* Tab Navigation */}
              <div className="mb-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-2 sm:space-x-6" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('fruitPlants')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${activeTab === 'fruitPlants' ? 'border-green-nest-500 text-green-nest-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Fruit Plants
                  </button>
                  <button
                    onClick={() => setActiveTab('ornamentalPlants')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${activeTab === 'ornamentalPlants' ? 'border-green-nest-500 text-green-nest-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Ornamental Plants
                  </button>
                  <button
                    onClick={() => setActiveTab('suppliesAndServices')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${activeTab === 'suppliesAndServices' ? 'border-green-nest-500 text-green-nest-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    Supplies & Services
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === 'fruitPlants' && renderList(catalog.fruitPlants)}
                {activeTab === 'ornamentalPlants' && renderList(catalog.ornamentalPlants)}
                {activeTab === 'suppliesAndServices' && renderList(catalog.suppliesAndServices)}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 