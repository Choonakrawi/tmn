import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Logo />
          <p className="text-sm text-muted-foreground font-light">New York | Stockholm</p>
          <a href="mailto:hello@andmore.se" className="text-sm text-foreground font-light hover:text-muted-foreground transition-colors">Hello@andmore.se</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 