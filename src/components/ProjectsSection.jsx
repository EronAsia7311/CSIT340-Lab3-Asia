import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/EronAsia7311/CSIT340-Lab1-Asia"
        />
        <ProjectCard
          year="2025"
          title="TrikeGo"
          description="A lightweight ride-hailing platform for tricycles in the Philippines."
          tech="Python, PostgreSQL, HTML5, CSS3, Vanilla JavaScript"
          link="https://github.com/Threetato/TrikeGo"
        />
        <ProjectCard
          year="2025"
          title="Task Tide"
          description="A productivity management system that lets users create tasks and set energy levels required for said tasks"
          tech="Java, MySQL, JavaScript"
          link="https://github.com/AsiaEron/IT342-Asia-TaskTide"
        />
        <ProjectCard
          year="2026"
          title="Portfolio in React"
          description="My second react project, a portfolio website showcasing my skills and projects. (Including this one, I dont have that many projects yet)."
          tech="React · Tailwind CSS"
          link="https://github.com/EronAsia7311/CSIT340-Lab3-Asia"
        />
      </div>
    </section>
  );
}

export default ProjectsSection