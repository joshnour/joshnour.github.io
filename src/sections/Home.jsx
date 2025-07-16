function Home() {
    return (
        <section
            id="home"
            className="flex flex-col justify-center items-center px-6 md:px-20 w-full bg-white dark:bg-gray-900 py-8"
        >
            <h1 className="text-3xl font-semibold mb-10 py-6 text-gray-900 dark:text-gray-100">
                Joshua Nouriyelian
            </h1>
            <div className="text-lg text-gray-700 dark:text-gray-300 w-full justify-center md:max-w-full space-y-4">
                <p>Hi, I'm Josh, a (Software) Engineer.</p>
                <p>
                    I went to the University of Pennsylvania and graduated Summa Cum Laude with a BSE in
                    Computer Science and an MSE in Data Science in 2022.
                </p>
                <p>
                    I spent over a year at Amazon before attending a two-year analytical fellowship which I have recently
                    returned from.
                </p>
                <p>
                    I’m currently open to full-time opportunities in the NYC area. Feel free to reach out!
                </p>
                <p> Email: jnour124 (at) gmail
                </p>
            </div>
        </section>
    );
}

export default Home;
