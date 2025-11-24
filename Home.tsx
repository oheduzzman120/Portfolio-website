import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Sparkles, Zap, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Unique Gradient Background */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-orange-500 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-indigo-600 via-blue-500 to-cyan-400 opacity-40 mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-lg transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 border-2 border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="animate-fade-in-up text-white">
              {/* Name Badge */}
              <div className="mb-6 inline-block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  MD Khalid Mahmud Shawon
                </span>
              </div>

              {/* Main Heading with Name */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                  <span className="block text-white">Khalid's</span>
                  <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-orange-200 bg-clip-text text-transparent">
                    Web Scraping &
                  </span>
                  <span className="block text-white">Data Automation</span>
                </h1>
                <p className="text-2xl font-semibold text-orange-200">Expert Solutions</p>
              </div>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                <strong>MD Khalid Mahmud Shawon</strong> - A global freelancer specializing in building scalable data extraction and automation systems. With 8+ years of experience and $100K+ earned on Upwork, I deliver enterprise-grade solutions for global clients across 15+ countries.
              </p>

              {/* Stats with Icons */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-orange-300" />
                    <div className="text-3xl font-bold text-white">200+</div>
                  </div>
                  <div className="text-sm text-white/80">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <div className="text-3xl font-bold text-white">$100K+</div>
                  </div>
                  <div className="text-sm text-white/80">Earned</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                    <div className="text-3xl font-bold text-white">98%</div>
                  </div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="mailto:khalidsocialhandles@gmail.com">
                  <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    <Mail className="mr-2 w-5 h-5" />
                    Email Khalid
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/md-khalid-mahmud-shawon/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-600 font-semibold px-8 py-3 text-lg border border-white/30 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    <Linkedin className="mr-2 w-5 h-5" />
                    LinkedIn Profile
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/md-khalid-mahmud-shawon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:khalidsocialhandles@gmail.com"
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                  title="Upwork"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-float hidden md:block">
              <div className="relative">
                {/* Decorative Background Circle */}
                <div className="absolute -inset-8 bg-gradient-to-br from-cyan-400 to-orange-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-white to-blue-100 rounded-3xl p-2 shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="MD Khalid Mahmud Shawon"
                    className="w-full rounded-2xl object-cover shadow-xl"
                  />
                </div>

                {/* Active Status Badge */}
                <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-white/25 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/40 animate-bounce">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>
                  <span className="text-sm font-bold text-white">Available Now</span>
                </div>

                {/* Decorative Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-400 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                  Top Rated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="section-padding bg-gradient-to-b from-background to-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-accent">Khalid's Core Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Specialized in cutting-edge technologies for data extraction and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Web Scraping',
                description: 'Advanced scraping with Cloudflare/Akamai bypass',
                icon: '🕷️',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'API Development',
                description: 'Build scalable REST & GraphQL APIs',
                icon: '⚙️',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Data Automation',
                description: 'ETL pipelines and automated workflows',
                icon: '🔄',
                color: 'from-orange-500 to-red-500',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${service.color} p-0.5 rounded-2xl group hover:shadow-2xl transition-all duration-300`}
              >
                <div className="bg-background rounded-2xl p-8 h-full hover:scale-105 transition-transform">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="btn-gradient text-lg px-8 py-4">
                Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Work with <span className="text-orange-200">Khalid?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Let's discuss your data extraction and automation needs. MD Khalid Mahmud Shawon is ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:khalidsocialhandles@gmail.com">
              <Button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Mail className="mr-2 w-5 h-5" />
                Email: khalidsocialhandles@gmail.com
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/md-khalid-mahmud-shawon/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-700 text-white hover:bg-blue-800 font-semibold px-8 py-4 text-lg border-2 border-white/30 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
