import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Data Pipeline',
      description: 'Built a comprehensive data extraction system for Amazon product listings',
      technologies: ['Python', 'Selenium', 'PostgreSQL', 'AWS'],
      impact: '5M+ records extracted monthly',
      category: 'Web Scraping',
    },
    {
      title: 'LinkedIn Lead Generation API',
      description: 'Developed API for extracting professional profiles and job data',
      technologies: ['Python', 'Playwright', 'REST API', 'Docker'],
      impact: '99.8% uptime, 100K+ profiles/month',
      category: 'API Development',
    },
    {
      title: 'Real Estate Data Automation',
      description: 'ETL pipeline for Zillow property data with automated updates',
      technologies: ['Python', 'ETL', 'PostgreSQL', 'Airflow'],
      impact: '70% reduction in manual work',
      category: 'Data Automation',
    },
    {
      title: 'Travel Data Intelligence System',
      description: 'Competitive intelligence platform for travel industry',
      technologies: ['Python', 'BeautifulSoup', 'GraphQL', 'Analytics'],
      impact: '15+ countries, 50+ clients',
      category: 'Data Analytics',
    },
    {
      title: 'Food Delivery Data Extraction',
      description: 'DoorDash restaurant and menu data extraction system',
      technologies: ['Selenium', 'Proxy Rotation', 'API', 'Cloud'],
      impact: '85% blockage reduction',
      category: 'Web Scraping',
    },
    {
      title: 'Enterprise Data Integration',
      description: 'Multi-source data integration for enterprise clients',
      technologies: ['Python', 'REST API', 'AWS', 'PostgreSQL'],
      impact: '10M+ records/month processing',
      category: 'Data Automation',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '200+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Countries Served', value: '15+' },
    { label: 'Uptime Achieved', value: '99.8%' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Featured <span className="bg-gradient-accent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-up">
            Showcase of successful projects delivering enterprise-grade data solutions
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-background p-6 rounded-lg border border-border text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background text-xs font-medium rounded-full border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="bg-background p-4 rounded-lg border border-border mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Impact</p>
                  <p className="font-semibold text-accent">{project.impact}</p>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Success Stories
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                title: 'E-Commerce Giant - 5M Records/Month',
                challenge:
                  'Client needed to extract product data from multiple e-commerce platforms with changing anti-bot measures',
                solution:
                  'Implemented advanced proxy rotation, captcha solving, and JavaScript rendering with automated failover',
                result:
                  'Delivered 5M+ records monthly with 99.8% uptime and 85% reduction in blockages',
              },
              {
                title: 'Enterprise Data Integration - 10M Records/Month',
                challenge:
                  'Multiple data sources with different formats and update frequencies needed consolidation',
                solution:
                  'Built scalable ETL pipeline with data validation, transformation, and automated scheduling',
                result:
                  '40% faster post-processing, 70% reduction in manual work, standardized schema',
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-background p-8 rounded-lg border border-border"
              >
                <h3 className="text-xl font-bold mb-4">{story.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Challenge</p>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Solution</p>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Result</p>
                    <p className="text-muted-foreground">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how I can help with your data extraction and automation needs
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-3">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
