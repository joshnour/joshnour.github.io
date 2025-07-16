function Skills() {
    return (
        <section id="skills" className="w-full bg-white dark:bg-gray-900 py-6">
            <div className="w-full max-w-screen-xl mx-auto px-6">
                <h1 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-white">
                    Skills
                </h1>

                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl">
                        <div>
                            <h2 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                                Languages
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                <li>Python</li>
                                <li>Java / Kotlin</li>
                                <li>JavaScript / TypeScript</li>
                                <li>C</li>
                                <li>R, Matlab</li>
                                <li>SQL</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                                Frameworks & Tools
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                <li>Node.js</li>
                                <li>Apache Spark</li>
                                <li>AWS (EMR)</li>
                                <li>NumPy, Pandas, scikit-learn</li>
                                <li>Git / GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
