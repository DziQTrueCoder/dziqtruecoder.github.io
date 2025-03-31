const NavigationBar = () => {
    const brandName = "Konrad Gaca";

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="#hero">{brandName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#hero">Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">O mnie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Kompetencje</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projekty</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const HeroSection = () => {
    const name = "Konrad Gaca";
    const title = "Ambitny Technik Informatyk | Junior IT Specialist";
    const tagline = "Poszukuję możliwości rozwoju w IT, oferując solidne podstawy w zakresie administracji systemami (Windows/Linux), programowania (Python, C++) oraz praktyczne doświadczenie z projektów webowych i konkursów CTF. Szybko przyswajam wiedzę i jestem zdeterminowany, by efektywnie wspierać cele zespołu technicznego.";

    return (
        <section id="hero" className="d-flex align-items-center text-center" style={{ minHeight: '90vh' }}>
             <div className="container">
                <h1 className="display-3 fw-bold">{name}</h1>
                <p className="lead fs-4 my-3">{title}</p>
                <p className="mx-auto" style={{ maxWidth: '750px' }}>
                    {tagline}
                </p>
                <a href="#skills" className="btn btn-primary btn-lg m-2 mt-4">Odkryj moje kompetencje</a>
                <a href="#contact" className="btn btn-outline-secondary btn-lg m-2 mt-4">Skontaktuj się</a>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">O Mnie</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="fs-5 mb-4">Jako absolwent Technikum Informatycznego posiadam silne podstawy teoretyczne, które aktywnie przekuwam w praktyczne umiejętności. Moje zaangażowanie w branżę IT wykracza poza szkolne mury – samodzielnie <strong>opracowałem stronę internetową</strong> na potrzeby hackathonu Solvehack i <strong>rozwijałem umiejętności analityczne oraz pracy zespołowej</strong> podczas rywalizacji w konkursach Capture The Flag.</p>
                        <p className="fs-5 mb-4">Przyjmuję proaktywne podejście do nauki, koncentrując się na praktycznym rozwiązywaniu problemów. Posiadam fundamentalną wiedzę z zakresu programowania w C++ i Pythonie oraz <strong>administracji systemami Windows i Linux</strong>.</p>
                        <p className="fs-5">Jestem zmotywowany do dalszego intensywnego rozwoju, szczególnie w obszarach wsparcia technicznego (Helpdesk), administracji systemami, podstaw cyberbezpieczeństwa oraz koncepcji DevOps. <strong>Poszukuję środowiska, w którym będę mógł szybko wdrażać się w nowe technologie</strong> i efektywnie przyczyniać się do realizacji celów biznesowych firmy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillsSection = () => {
    const technicalSkills = {
        "Systemy Operacyjne": ["Administracja Windows ", "Obsługa Linux (CLI, Podstawy)"],
        "Programowanie / Skrypty": ["Python ", "C++ "],
        "Web Development": ["HTML, CSS, JavaScript", "Bootstrap", "React.js (Podstawy przez CDN)"],
        "Narzędzia / Technologie": ["Git / GitHub", "Podstawy Sieci (TCP/IP)"],
        "Podstawy Cyberbezpieczeństwa": ["Wiedza z CTF", "Świadomość zagrożeń"],
        "Wsparcie IT": ["Troubleshooting", "Podstawy Helpdesk"]
    };
    const softSkills = ["Rozwiązywanie Problemów", "Szybkie Uczenie Się", "Praca Zespołowa", "Komunikatywność", "Proaktywność", "Zarządzanie Czasem"];

    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Kluczowe Kompetencje</h2>
                <h3 className="text-center text-muted mb-4">Techniczne</h3>
                <div className="row justify-content-center g-4">
                    {Object.entries(technicalSkills).map(([category, skills]) => (
                        <div className="col-md-6 col-lg-4" key={category}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{category}</h5>
                                    <ul className="list-unstyled mb-0">
                                        {skills.map(skill => <li key={skill} className="mb-1"><i className="bi bi-check-lg text-success me-2"></i>{skill}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <h3 className="text-center text-muted mt-5 mb-4">Miękkie</h3>
                 <div className="row justify-content-center">
                    <div className="col-lg-10">
                         <div className="text-center">
                            {softSkills.map(skill => (
                                <span key={skill} className="badge bg-secondary fs-6 m-2 p-2 rounded-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectsSection = () => {
    const projectsData = [
        {
            title: "Strona internetowa dla Hackathonu Solvehack",
            description: "<strong>Zaprojektowałem i wdrożyłem</strong> responsywną stronę informacyjną dla hackathonu Solvehack, zapewniając uczestnikom dostęp do kluczowych informacji. Wykorzystałem technologie front-endowe do stworzenia przejrzystego interfejsu.",
            skills: "HTML, CSS, JavaScript, Bootstrap, Projektowanie UI , Zarządzanie projektem",
            link: "#"
        },
        {
            title: "Aktywny Udział w Konkursach CTF (Unicorns of Security, 1753c)",
            description: "<strong>Rozwijałem umiejętności analityczne i techniczne</strong> w dziedzinie cyberbezpieczeństwa, uczestnicząc w zespołowych konkursach CTF. <strong>Współpracowałem</strong> z członkami drużyn przy rozwiązywaniu złożonych zadań pod presją czasu.",
            skills: "Praca zespołowa, Problem Solving, Bezpieczeństwo IT , Myślenie analityczne",
            link: null
        }
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Projekty i Doświadczenie Praktyczne</h2>
                <div className="row g-4 justify-content-center">
                     {projectsData.map((project, index) => (
                        <div className="col-md-6 col-lg-5" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text flex-grow-1" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                    <p className="card-text mt-3"><strong>Kluczowe umiejętności:</strong> <small className="text-muted">{project.skills}</small></p>
                                    {project.link && project.link !== "#" && <a href={project.link} className="btn btn-outline-primary mt-2 align-self-start" target="_blank" rel="noopener noreferrer">Zobacz online</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    const email = "konradgaca04@gmail.com"; // <- Zmień na swój email!
    const linkedinUrl = "https://www.linkedin.com/in/konrad-gaca-a855a0320/"; // <- Wstaw link do LinkedIn!
    const githubUrl = "https://github.com/DziQTrueCoder/dziqtruecoder.github.io";

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">Porozmawiajmy o współpracy</h2>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    Jestem gotów, aby wnieść swoje umiejętności, entuzjazm i chęć do nauki do Państwa zespołu. Zapraszam do kontaktu w celu omówienia, jak mogę przyczynić się do sukcesu Państwa organizacji.
                </p>
                <div className="mt-4">
                    <a href={`mailto:${email}`} className="btn btn-primary btn-lg m-2">
                        <i className="bi bi-envelope-fill"></i> Napisz E-mail
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-dark btn-lg m-2 ${linkedinUrl === '#' ? 'disabled' : ''}`}>
                        <i className="bi bi-linkedin"></i> Profil LinkedIn
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                        <i className="bi bi-github"></i> Zobacz Kod na GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const name = "Konrad Gaca";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 bg-dark text-white-50 text-center">
            <div className="container">
                <p className="mb-0">Copyright &copy; {name} {currentYear}</p>
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </React.Fragment>
    );
};

const domContainer = document.querySelector('#root');

if (domContainer) {
    const root = ReactDOM.createRoot(domContainer);
    root.render(<App />);
    console.log("Aplikacja React została zainicjowana.");
} else {
    console.error('Nie znaleziono elementu #root w DOM do zainicjowania aplikacji React.');
}
