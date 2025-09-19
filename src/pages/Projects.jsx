const projects = [
  {
    title: "Stationary Website",
    description: "A Website that sells stationary item in online using Django.",
    link: "https://github.com/banupraveena21/Prototype12StationaryShopWebsite",
  },
  {
    title: "Trading Website",
    description: "A Website that used for information about Trading using Django.",
    link: "https://github.com/banupraveena21/Prototype13TradingWebsite",
  },
  {
    title: "Second hand bike Website",
    description: "A Website to sell and buy Second Hand Bike through online using Django.",
    link: "https://github.com/banupraveena21/Prototype14SecondhandBikeWebsite",
  },
];

const Projects = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
