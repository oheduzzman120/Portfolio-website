import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Briefcase, Code2, Globe } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Top-Rated Freelancer',
      description: 'Upwork Top-Rated Plus badge with 98% satisfaction rate',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '15+ Countries Served',
      description: 'Delivered solutions for clients across multiple continents',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: '200+ Projects',
      description: 'Completed diverse projects in data extraction and automation',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: '$100K+ Earned',
      description: 'Generated significant revenue through quality deliverables',
    },
  ];

  const skills = [
    { category: 'Web Scraping', items: ['Python', 'Selenium', 'Playwright', 'BeautifulSoup', 'Cloudflare Bypass'] },
    { category: 'API Development', items: ['REST APIs', 'GraphQL', 'FastAPI', 'Express.js', 'Node.js'] },
    { category: 'Data Processing', items: ['Pandas', 'SQL', 'ETL', 'Data Validation', 'Pipeline Design'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Linux', 'Git', 'CI/CD'] },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="bg-gradient-accent">MD Khalid Mahmud Shawon</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-up">
            Global freelancer specializing in data extraction and automation solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Who is <span className="text-accent">Khalid?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                MD Khalid Mahmud Shawon is a dedicated web scraping and data automation specialist with over 8 years of professional experience. Based globally, Khalid has built a reputation for delivering enterprise-grade solutions that solve complex data extraction challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With expertise spanning web scraping, API development, and data automation, Khalid has successfully completed 200+ projects for clients across 15+ countries. His work has generated over $100,000 in revenue on Upwork, where he maintains a Top-Rated Plus status with a 98% satisfaction rate.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Khalid's approach combines technical excellence with client-focused problem-solving, ensuring that every project delivers measurable business value and sustainable automation solutions.
              </p>

              <Link href="/contact">
                <Button className="btn-gradient">Get In Touch with Khalid</Button>
              </Link>
            </div>

            {/* Right - Achievements Grid */}
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-accent">Khalid's Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all group"
              >
                <h3 className="font-bold text-lg mb-6 text-accent group-hover:text-accent/80">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-accent">Khalid's Journey</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: '2024',
                title: 'Enterprise Solutions',
                description: 'Scaling to handle 10M+ records monthly for enterprise clients',
              },
              {
                year: '2022',
                title: 'Top-Rated Plus Achievement',
                description: 'Reached Upwork Top-Rated Plus status with consistent 98%+ satisfaction',
              },
              {
                year: '2020',
                title: 'Advanced Automation',
                description: 'Developed sophisticated ETL pipelines and data automation frameworks',
              },
              {
                year: '2018',
                title: 'Freelance Success',
                description: 'Launched freelance career on Upwork, quickly building client base',
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {idx < 3 && <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent mt-4"></div>}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="font-bold text-lg text-accent mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
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
            Let's Work Together
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Ready to discuss your data extraction and automation needs with Khalid?
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-3">
              Contact Khalid <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
