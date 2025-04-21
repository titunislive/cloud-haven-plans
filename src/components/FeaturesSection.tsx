
import React from 'react';
import { 
  BarChart, 
  Clock, 
  Cpu, 
  Database, 
  Globe, 
  HardDrive, 
  Layout, 
  LifeBuoy, 
  Lock, 
  RefreshCw, 
  Server, 
  Shield 
} from 'lucide-react';

const features = [
  {
    name: 'SSD Storage',
    description: 'Lightning-fast SSD storage for optimal website performance.',
    icon: HardDrive,
  },
  {
    name: '99.9% Uptime',
    description: 'Guaranteed uptime to keep your website accessible 24/7.',
    icon: Clock,
  },
  {
    name: 'DDoS Protection',
    description: 'Advanced security to protect your website from attacks.',
    icon: Shield,
  },
  {
    name: 'Free SSL Certificates',
    description: 'Secure your website and boost SEO rankings with free SSL.',
    icon: Lock,
  },
  {
    name: 'Global CDN',
    description: 'Content delivery network for faster loading worldwide.',
    icon: Globe,
  },
  {
    name: 'Daily Backups',
    description: 'Automatic backups to keep your data safe and secure.',
    icon: RefreshCw,
  },
  {
    name: 'Scalable Resources',
    description: 'Easily scale your hosting resources as your website grows.',
    icon: BarChart,
  },
  {
    name: 'Expert Support',
    description: '24/7 expert support to help you with any issues.',
    icon: LifeBuoy,
  },
  {
    name: 'cPanel Access',
    description: 'User-friendly control panel to manage your hosting.',
    icon: Layout,
  },
  {
    name: 'MySQL Databases',
    description: 'Reliable and fast database solutions for your applications.',
    icon: Database,
  },
  {
    name: 'Latest PHP Versions',
    description: 'Support for the latest PHP versions for better performance.',
    icon: Server,
  },
  {
    name: 'Multi-Core Processors',
    description: 'Powerful processors to handle resource-intensive applications.',
    icon: Cpu,
  },
];

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need for a successful website
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
