import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Logo />
          <p className="text-sm text-muted-foreground font-light">New York | Stockholm</p>
          <div className="flex items-center space-x-4">
            <a href="mailto:hello@andmore.se" className="text-sm text-foreground font-light hover:text-muted-foreground transition-colors">Hello@andmore.se</a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://www.linkedin.com/company/andmore/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B9o9VAD6WSqyQnFkYv5QcaA%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-foreground font-light hover:text-muted-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 