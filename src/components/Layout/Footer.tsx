import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold">AK</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Arun Kabeli Power</h3>
                <p className="text-sm opacity-90">Limited</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Leading the future of renewable energy through sustainable hydropower generation in Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/projects" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Our Projects</Link></li>
              <li><Link to="/investors" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Investors Relations</Link></li>
              <li><Link to="/gallery" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Focus</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Hydropower Generation</li>
              <li>Renewable Energy Solutions</li>
              <li>Sustainable Development</li>
              <li>Environmental Conservation</li>
              <li>Community Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Kathmandu, Nepal</p>
                  <p>Bagmati Province</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm opacity-90">+977-1-XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm opacity-90">info@arunkabelipower.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © 2024 Arun Kabeli Power Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-90">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;