import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sri Durga Sai Green Scapes</h3>
            <p className="text-gray-400">
              Transforming spaces with nature's beauty through expert plant styling and design.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                Kadiyam, Rajamahendravaram
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:+919959226616" className="hover:text-white">+91 9959226616</a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a href="mailto:durgasainursery123@gmail.com" className="hover:text-white">
                  durgasainursery123@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/919959226616" className="text-gray-400 hover:text-white">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              {/* Add other social links here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sri Durga Sai Green Scapes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 