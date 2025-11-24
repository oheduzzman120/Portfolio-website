import { Link } from 'wouter';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
                K
              </div>
              <div>
                <div className="font-bold text-foreground">Khalid</div>
                <div className="text-xs text-muted-foreground">Web Scraping Expert</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              MD Khalid Mahmud Shawon - Global freelancer specializing in data extraction and automation solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">About Khalid</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-accent transition-colors text-sm">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Web Scraping
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Data Extraction
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  API Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Data Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Connect with Khalid</h3>
            <div className="space-y-3">
              <a
                href="mailto:khalidsocialhandles@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                khalidsocialhandles@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/md-khalid-mahmud-shawon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Upwork Profile
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} MD Khalid Mahmud Shawon. All rights reserved. | Web Scraping & Data Engineering Expert
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
