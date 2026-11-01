import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWZIFSvKDmA9_KgJNvgwg-rpG2MdnwHkmJrkLi7rqM702FcXKfylyE3J10lZ1AQcYzOA/exec';

const emptyForm = { name: '', email: '', subject: '', message: '' };

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'ebad7work@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 80979 97636' },
  { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra, India' },
];

const ventures = [
  {
    name: 'VokeAI',
    description: 'AI-powered startup transforming communication skills.',
    url: 'https://vokeai.in',
    logo: 'aa2.png',
    logoClass: 'w-6 h-6 object-contain',
  },
  {
    name: 'Rift Wear',
    description: 'College-focused clothing merchandise brand.',
    url: 'https://riftwear.in',
    logo: 'aa4.png',
    logoClass: 'w-8 h-8 object-contain',
  },
];

const inputClass = "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-300";

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      // With no-cors mode, we can't check response.ok, so we assume success
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData(emptyForm);
    } catch (error) {
      console.error('Error!', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on innovative AI projects? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8 mb-8">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{label}</h3>
                      <p className="text-gray-300">{value}</p>
                    </div>
                  </div>
                ))}

                {ventures.map((venture) => (
                  <div key={venture.name} className="flex items-center w-full">
                    <div className="bg-blue-600 min-w-[48px] min-h-[48px] w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <img src={`${import.meta.env.BASE_URL}${venture.logo}`} alt="Logo" className={venture.logoClass} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{venture.name}</h3>
                      <p className="text-gray-300">{venture.description}</p>
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                      >
                        → Visit site
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6" name="submit-to-google-sheet">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
