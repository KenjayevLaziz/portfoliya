import ProjectsText from "./ProjectsText";
import git from "../../../public/images/git.jpg";
import timer from "../../../public/images/timer.jpg";
import yemak from "../../../public/images/yemak.jpg";
import calc from "../../../public/images/clac.jpg";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Calculator",
    year: "2024",
    align: "right",
    image: calc,
    link: "https://calc-alpha-seven.vercel.app",
  },
  {
    name: "GitHub Finder",
    year: "2024",
    align: "left",
    image: git ,
    link: "https://git-nine-lemon.vercel.app/",
  },
  {
    name: "Timer",
    year: "2024",
    align: "right",
    image: timer,
    link: "https://timer-five-jade.vercel.app",
  },
  {
    name: "Yemak Desktop version",
    year: "2024",
    align: "left",
    image: yemak,
    link: "https://yemak1.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
