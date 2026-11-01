import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/ES7' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ebad-sayed-0861a6227/' },
  { icon: Instagram, href: 'https://instagram.com/adorable_jallad' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100076093777319&sk=about_work_and_education' },
  { icon: Twitter, href: 'https://twitter.com/EbadOnAI' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/Portfolio/privacy-policy.html' },
  { label: 'Delete Account', href: '/Portfolio/account-delete.html' },
];

const linkClass = "text-gray-400 hover:text-white transition-colors";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Ebad Sayed. Co-created with AI.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map(({ label, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {label}
                </a>
              ))}
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart size={16} className="mx-1 text-red-500" /> and caffeine-fueled imagination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
