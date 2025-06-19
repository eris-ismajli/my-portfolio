export const Header = () => {
  return (
    <header>
      <div className="header-left">
        <div className="header-name">
          <p className="header-name">Eris Ismajli</p>
          <div className="software-engineer">
            <p className="tag">Software Engineer</p>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <a className="middle-link" href="#about">
          About
        </a>
        <a className="middle-link" href="#projects">
          Projects
        </a>
      </div>

      <div className="header-right">
        <a className="header-link" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
};
