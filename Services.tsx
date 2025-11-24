import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Scraping Solutions',
      description: 'Advanced data extraction from any website',
      features: [
        'Cloudflare & Akamai bypass',
        'JavaScript rendering',
        'Proxy rotation',
        'CAPTCHA solving',
        'Large-scale scraping',
      ],
      icon: '🕷️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'API Development',
      description: 'Build scalable REST and GraphQL APIs',
      features: [
        'REST API design',
        'GraphQL implementation',
        'Authentication & security',
        'Rate limiting',
        'API documentation',
      ],
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Data Automation',
      description: 'ETL pipelines and automated workflows',
      features: [
        'ETL pipeline design',
        'Data validation',
        'Scheduled automation',
        'Error handling',
        'Monitoring & alerts',
      ],
      icon: '🔄',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your requirements and design the optimal solution',
    },
    {
      step: '02',
      title: 'Development',
      description: 'Build and test your solution with best practices',
    },
    {
      step: '03',
      title: 'Deployment',
      description: 'Deploy to production with monitoring and support',
    },
    {
      step: '04',
      title: 'Maintenance',
      description: 'Ongoing support and optimization for your solution',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Services by <span className="bg-gradient-accent">Khalid</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-up">
            Comprehensive data extraction and automation solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${service.color} p-0.5 rounded-2xl group hover:shadow-2xl transition-all duration-300`}
              >
                <div className="bg-background rounded-2xl p-8 h-full">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-accent">Khalid's Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-accent to-transparent"></div>
                )}

                <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-white font-bold flex items-center justify-center mb-4 text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-accent">Khalid's Technology Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Selenium', icon: '🤖' },
              { name: 'Playwright', icon: '🎭' },
              { name: 'FastAPI', icon: '⚡' },
              { name: 'PostgreSQL', icon: '🗄️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Git', icon: '📦' },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-background p-6 rounded-lg border border-border hover:border-accent transition-all text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{tech.icon}</div>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-accent">Flexible Pricing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Small Projects',
                price: '$500+',
                description: 'Perfect for quick scripts and small automation tasks',
              },
              {
                title: 'Medium Projects',
                price: '$2,000+',
                description: 'Ideal for API development and moderate-scale scraping',
              },
              {
                title: 'Enterprise',
                price: 'Custom',
                description: 'Large-scale solutions with dedicated support',
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all text-center"
              >
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-accent mb-4">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            All projects include consultation, development, testing, and deployment. Khalid offers flexible engagement models tailored to your budget and timeline.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let Khalid help you with your data extraction and automation needs
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-3">
              Contact Khalid Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
