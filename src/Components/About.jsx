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
    title: "Roblox Prop Hunt Game",
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
    description:
      "A simple shopping site built with pure HTML, CSS, and JavaScript, with core e-commerce features built from scratch.",
    image: shopping,
    tools: [{ label: "HTML" }, { label: "CSS" }, { label: "JS" }],
    gitLink:
      "https://github.com/eris-ismajli/Javascript-Projects/blob/main/store.html",
  },
  {
    title: "Simple Dashboard",
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
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section className="about-wrapper" id="about">
      <div className="about-main" data-aos="fade-up">
        <article className="about-me-info" data-aos="fade-up">
          <div className="about-title-wrapper">
            <h2 className="about-title">About Me</h2>
          </div>

          <div className="bio-card">
            <div className="bio-skills">
              <p>
                I'm a passionate software enthusiast and developer with over 3
                years of experience building websites and games that blend
                performance with creativity. I focus on crafting clean,
                user-friendly experiences that are both functional and visually
                engaging. I developed a strong foundation in JavaScript, React,
                and Lua through hands-on projects and formal training at{" "}
                <a
                  href="https://futureminds.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academy-link"
                >
                  Future Minds Academy
                </a>{" "}
                where I mastered my frontend development skills. I'm always
                exploring new ideas and pushing the boundaries of what I can
                create.
              </p>
            </div>

            <div className="info-card">
              {["Date of Birth", "Location", "Experience with"].map(
                (field, i) => (
                  <div className="info-wrapper" key={i}>
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

          <div className="skills">
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

        <article className="projects" data-aos="fade-up" id="projects">
          <div className="skills-title-wrapper">
            <p className="about-title">My Projects</p>
          </div>

          <div className="projects-holder">
            {projectData.map((project, i) => (
              <div
                className="project-container"
                key={i}
                style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
                data-aos="fade-up"
              >
                <div className="project-left">
                  <div className="image-wrapper">
                    <div className="image-glow"></div>
                    <img
                      src={project.image}
                      className="image"
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="project-right">
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
        </article>
      </div>
    </section>
  );
};
