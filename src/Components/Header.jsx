import { CodeXml } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div className="header-left">
      
        <div className="header-name">
          <p className="header-name">Eris Ismajli</p>
          <div className="software-engineer">
            {/* <CodeXml size={20} color="gray" /> */}
            <p className="tag">Software Engineer</p>
          </div>
        </div>
      </div>

      <div className="header-right">
        <a className="header-link" href="#about">
          About
        </a>
        <a className="header-link" href="#projects">
          Projects
        </a>
        <a className="header-link" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
};
