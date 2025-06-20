import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive and interactive portfolio website designed to showcase my skills, projects, and achievements. It reflects my personal brand and provides visitors with a smooth browsing experience through an intuitive UI and dynamic features like dark mode toggle. The website is fully responsive and optimized for all screen sizes.',
      technologies: ['JavaScript', 'HTML','CSS','UI/UX','React.Js','Next.Js'],
      image: 'algorithm',
      link: 'https://github.com/sharanyasinghal/My_Portfolio',
    },
    {
      title: 'Identity Reconciliation',
      description: 'Built a project on identity reconciliation that matches and merges duplicate or related records across datasets to ensure accurate and unified identity resolution.',
      technologies: ['SQL','Node.Js','Typescript'],
      image: 'algorithm',
      link: 'https://github.com/sharanyasinghal/Identity_reconciliation',
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Developed an interactive algorithm visualizer for DSA and DAA concepts, enabling real-time visualization of algorithm execution through dynamic and intuitive animations.',
      technologies: ['HTML','CSS','JavaScript','UI/UX'],
      image: 'algorithm',
      link: 'https://github.com/sharanyasinghal/Algorithm_Visualizer',
    },
    {
      title: 'Medicine Suggestor',
      description: 'Developed a web-based tool that suggests appropriate medicines based on user-input symptoms, aiming to provide basic healthcare guidance in the absence of immediate medical consultation.',
      technologies: ['JavaScript','PHP','HTML','CSS'],
      image: 'algorithm',
      link: 'https://github.com/sharanyasinghal/Medicine_Suggestor',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
