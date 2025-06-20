import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import reactIcon from "../Images/react-icon.png";
import gitIcon from "../Images/github.png";
import tailwindIcon from "../Images/tailwind.png";
import luaIcon from "../Images/lua.png";
import robloxStudio from "../Images/roblox-studio.png";
import laravel from "../Images/laravel.png";

import propHunt from "../Images/PropHunt.png";
import tms from "../Images/TMS.png";
import shopping from "../Images/SimpleShopping.png";
import dashboard from "../Images/Dashboard.png";

import profile from "../Images/profile.png";

const skills = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JS" },
  { label: "React", icon: reactIcon },
  { label: "Tailwind", icon: tailwindIcon },
  { label: "Lua", icon: luaIcon },
  { label: "Roblox Studio", icon: robloxStudio },
  { label: "GitHub", icon: gitIcon },
];

const projectData = [
  {
    title: "Roblox Prop Hunt",
    category: "Game",
    description:
      "This is my most ambitious project. A game built over 3 years with 50,000+ lines of Lua. It challenged me to break down and solve complex problems by thinking like a true engineer.",
    image: propHunt,
    tools: [
      { label: "Roblox Studio", icon: robloxStudio },
      { label: "Lua", icon: luaIcon },
    ],
    playUrl:
      "https://www.roblox.com/games/10123001068/Prop-Hunt-Warzone#!/game-instances",
    gitLink: "https://github.com/eris-ismajli/prop-hunt-core-scripts",
  },
  {
    title: "Training Management System",
    category: "Full-Stack",
    description:
      "A full-stack app for delivering and tracking training with a smooth, role-specific experience for admins, trainers and students.",
    image: tms,
    tools: [
      { label: "React", icon: reactIcon },
      { label: "Tailwind", icon: tailwindIcon },
      { label: "PHP Laravel", icon: laravel },
      { label: "SQLite" },
    ],
    gitLink: "https://github.com/eris-ismajli/training-management-system",
  },
  {
    title: "Shopping Website",
    category: "Frontend",
    description:
      "A simple shopping site built with pure HTML, CSS, and JavaScript, with core e-commerce features built from scratch.",
    image: shopping,
    tools: [{ label: "HTML" }, { label: "CSS" }, { label: "JS" }],
    gitLink:
      "https://github.com/eris-ismajli/Javascript-Projects/blob/main/store.html",
  },
  {
    title: "Simple Dashboard",
    category: "Frontend",
    description:
      "A simple HTML, CSS, and JS project that lets users personalize their page by changing colors, images, and editing or removing cards for a tailored experience.",
    image: dashboard,
    tools: [{ label: "HTML" }, { label: "CSS" }, { label: "JS" }],
    gitLink:
      "https://github.com/eris-ismajli/Javascript-Projects/tree/main/Javascript%20Final%20Project",
  },
];

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const renderProjectsByCategory = (category) => (
    <div className="projects-holder" data-aos="fade-up">
      <div class="background-blobs background-blobs-projects">
        <div class="glow-project green-project"></div>
        <div class="glow-project blue-project"></div>
        <div class="glow-project blue1-project"></div>
        <div class="glow-project red1-project"></div>
        <div class="glow-project red2-project"></div>
        <div class="glow-project yellow-project"></div>
        <div class="glow-project blue2-project"></div>
      </div>
      <p className="project-category">{category} Projects</p>
      {projectData
        .filter((project) => project.category === category)
        .map((project, i) => (
          <div
            className="project-container"
            key={project.title}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <div className="project-left" data-aos="fade-zoom-in">
              <div className="image-wrapper">
                <div className="image-ambient"></div>
                <img
                  src={project.image}
                  className="image"
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="project-right" data-aos="fade-left">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <p className="tools-used">Tools used:</p>
              <div className="skill-icons skill-icons-project">
                {project.tools.map((tool, idx) => (
                  <div
                    className="skill-icon"
                    title={tool.label}
                    key={idx}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                  >
                    {tool.icon && (
                      <img
                        src={tool.icon}
                        alt={tool.label}
                        className="tool-icon"
                        loading="lazy"
                      />
                    )}
                    <p>{tool.label}</p>
                  </div>
                ))}
              </div>
              <div className="project-links">
                {project.playUrl && (
                  <a
                    href={project.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="play-button"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Play Game
                  </a>
                )}
                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <img
                      src={gitIcon}
                      alt="GitHub"
                      className="github-icon"
                      loading="lazy"
                    />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <section className="about-wrapper" id="about">
      <div className="about-main">
        <article className="about-me-info" data-aos="fade-up">
          <div className="about-title-wrapper" data-aos="zoom-in">
            <img src={profile} className="profile" alt="" />
            <h2 className="about-title about-me-text">About Me</h2>
          </div>

          <div className="bio-card" data-aos="fade-up">
            <div className="bio-skills">
              <p>
                I’m a 17 year old frontend developer with 3+ years of hands-on
                experience creating fast, user-focused websites and games. I
                specialize in JavaScript, React, and Lua, and I’ve built
                everything from full-stack training platforms to videogames. My
                work combines performance with polished design, and I’m always
                refining my skills to deliver clean, responsive, and engaging
                user experiences. I trained at{" "}
                <a
                  href="https://futureminds.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academy-link"
                >
                  Future Minds Academy
                </a>
                , where I mastered my frontend abilities, and I am determined to
                turn ideas into products that stand out.
              </p>
            </div>

            <div className="info-card" data-aos="fade-left">
              {["Date of Birth", "Location", "Experience with"].map(
                (field, i) => (
                  <div
                    className="info-wrapper"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <p className="card-field">{field}</p>
                    <p className="card-value">
                      {field === "Date of Birth" && "03/04/2008"}
                      {field === "Location" && "Gjilan, Kosovo"}
                      {field === "Experience with" && "JavaScript, React, Lua"}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="skills" data-aos="fade-up">
            <div className="skills-title-wrapper">
              <p className="about-title">Skills & Tools</p>
            </div>
            <div className="skill-icons skill-icons-tools">
              {skills.map((skill, idx) => (
                <div
                  className="skill-icon skill-icon-tool"
                  title={skill.label}
                  key={idx}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 80}
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      className="tool-icon"
                      loading="lazy"
                    />
                  )}
                  <p>{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="projects" id="projects">
          <div className="projects-main-container">
            <div
              className="skills-title-wrapper"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <p className="about-title projects-title">My Projects</p>
            </div>
            <div className="projects-container">
              {renderProjectsByCategory("Game")}
              {renderProjectsByCategory("Full-Stack")}
              {renderProjectsByCategory("Frontend")}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
