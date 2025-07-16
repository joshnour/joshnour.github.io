function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: "My personal site built with React (you're viewing it now!).",
            tech: ['React', 'Tailwind'],
            link: 'https://joshnour.com',
            repo: 'https://github.com/joshnour/joshnour.github.io',
        },
    ];

    return (
        <section id="projects" className="w-full bg-white dark:bg-gray-900 px-6 py-6 text-gray-800 dark:text-gray-200">
            <div className="max-w-full mx-auto flex justify-center">
                <div className="text-center w-full max-w-3xl">
                    <h1 className="text-3xl font-semibold mb-10">Projects</h1>

                    <div className="grid gap-8 md:grid-cols-2 text-left">
                        {projects.map((proj, index) => (
                            <div
                                key={index}
                                className="p-6 border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md transition bg-white dark:bg-gray-800"
                            >
                                <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-3">{proj.description}</p>
                                <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    {proj.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 text-blue-600 dark:text-blue-400 text-sm">
                                    {proj.link && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer">
                                            Live
                                        </a>
                                    )}
                                    {proj.repo && (
                                        <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
