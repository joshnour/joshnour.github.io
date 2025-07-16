function Contact() {
    return (
        <section id="contact" className="w-full bg-white dark:bg-gray-900 px-6 py-6 text-gray-800 dark:text-gray-200">
            <div className="max-w-full mx-auto text-center">
                <h1 className="text-3xl font-semibold mb-6">Contact Me</h1>
                <p className="text-gray-700">
                    Email:{" "}
                    <a>
                        jnour124 (at) gmail
                    </a>
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <a href="https://github.com/joshnour" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/joshnour" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
