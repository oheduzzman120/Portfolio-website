import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success('Message sent successfully! I will get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'khalidsocialhandles@gmail.com',
      href: 'mailto:khalidsocialhandles@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rajshahi, Bangladesh',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Let's Work <span className="bg-gradient-accent">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-up">
            Have a project in mind? I'd love to hear about it. Get in touch and let's 
            create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{info.label}</h3>
                  <p className="text-muted-foreground hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-background p-8 md:p-12 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-8">Send Me a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="btn-gradient w-full"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Quick Response Time</h2>
            <p className="text-muted-foreground mb-6">
              I typically respond to inquiries within 24 hours. For urgent matters, 
              you can also reach out via email or LinkedIn.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Average Response', value: '< 24 hours' },
                { label: 'Availability', value: 'Flexible' },
                { label: 'Time Zone', value: 'GMT+6' },
              ].map((item, idx) => (
                <div key={idx} className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-accent">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Connect With Me
          </h2>

          <div className="flex justify-center gap-6 flex-wrap">
            {[
              {
                icon: Linkedin,
                label: 'LinkedIn',
                href: 'https://linkedin.com',
              },
              {
                icon: Github,
                label: 'GitHub',
                href: 'https://github.com',
              },
              {
                icon: Mail,
                label: 'Email',
                href: 'mailto:khalidsocialhandles@gmail.com',
              },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
