import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This is the portfolio you’re viewing!',
      link: '#',
    },
    {
      title: 'InstaTalk App',
      description: 'A Social Media Application. Built using Clerk, Convex which supports real-time updates.',
      link: 'https://github.com/Kaushal-Patil-gif/InstaTalk-App.',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack site with admin panel and payment gateway.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
