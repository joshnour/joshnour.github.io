import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './sections/Contact';
import Courses from './sections/Courses';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {
    return (
        <>
            <Header />
            <main className="scroll-smooth">
                <Home />
                <Projects />
                <Skills />
                <Courses />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
