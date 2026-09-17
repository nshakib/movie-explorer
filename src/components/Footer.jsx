const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    
    <footer className="bg-dark text-white py-12 mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; {currentYear} TV Shows Hub. Built with ❤️ by{' '}
          <a 
            href="https://nshakib.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-red-400 transition-colors font-medium ml-1"
          >
            Md Nazmus Shakib
          </a>
        </p>
        
        <div className="flex gap-6 text-sm">
          {['Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;