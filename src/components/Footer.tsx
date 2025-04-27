import { Coffee, Mail, Instagram, Twitter, Facebook, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-espresso text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Coffee size={32} className="text-ucla-gold" />
              <span className="text-2xl font-bold font-serif">What's Bruin?</span>
            </div>
            <p className="text-gray-300 mb-6">
              Connecting the UCLA community through meaningful, data-driven networking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="#problem" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Our Solution
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Features</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Project Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Alumni Connections
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Professor Outreach
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Study Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-ucla-gold transition-colors duration-300 flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Startup Hub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-300 flex items-start">
                <Mail size={18} className="mr-3 mt-1" />
                <span>hello@whatsbruin.ucla.edu</span>
              </p>
              <div className="pt-4">
                <h4 className="text-white font-medium mb-3">Join our newsletter</h4>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/10 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ucla-gold w-full"
                  />
                  <button 
                    type="submit" 
                    className="bg-ucla-gold text-espresso px-4 py-2 rounded-r-lg font-medium hover:bg-yellow-400 transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2025 What's Bruin? All rights reserved. Made with ☕ by UCLA students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;