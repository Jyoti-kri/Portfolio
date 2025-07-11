import { FaGithub, FaLinkedin,  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800/40 mt-10 py-12 bg-neutral-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Jyoti Kumari</h3>
            <p className="text-neutral-400 mb-4">Full Stack Developer specializing in MERN stack and scalable web solutions. Building innovative web applications with modern technologies.</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Jyoti-kri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jyoti-kumari-9850ba256/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
             
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#technologies" className="text-neutral-400 hover:text-indigo-400 transition-colors">Technologies</a></li>
              <li><a href="#experience" className="text-neutral-400 hover:text-indigo-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-neutral-400 hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <p className="text-neutral-400 mb-2">Kolkata, India</p>
            <p className="text-neutral-400 mb-4">jyoti628627@gmail.com</p>
            <a 
              href="https://drive.google.com/file/d/1QiVGdCnTj_ckLeIEOshn5aclSaKY_raT/view?usp=drivesdk" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600/80 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800/40 text-center">
          <p className="text-neutral-500">&copy; {new Date().getFullYear()} Jyoti Kumari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 