// main.js (upewnij się, że w HTML masz <script type="text/babel" src="main.js">)

// === DEFINICJE KOMPONENTÓW ===

// Komponent Paska Nawigacji
const NavigationBar = () => {
    // Zaktualizuj href w 'a.navbar-brand' i tekst, jeśli chcesz
    const brandName = "Konrad Gaca"; // Zmień na swoje imię i nazwisko

    return (
        // Użyto fixed-top, pamiętaj o padding-top w CSS dla body
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

// Komponent Sekcji Hero
const HeroSection = () => {
    // Zaktualizuj swoje dane
    const name = "Konrad Gaca";
    const title = "Ambitny Technik Informatyk | Junior IT Specialist";
    const tagline = "Poszukuję możliwości rozwoju w IT, oferując solidne podstawy w zakresie administracji systemami (Windows/Linux), programowania (Python, C++) oraz praktyczne doświadczenie z projektów webowych i konkursów CTF. Szybko przyswajam wiedzę i jestem zdeterminowany, by efektywnie wspierać cele zespołu technicznego.";

    return (
        <section id="hero" className="d-flex align-items-center text-center" style={{ minHeight: '90vh' }}> {/* Zwiększono minHeight */}
             <div className="container">
                <h1 className="display-3 fw-bold">{name}</h1> {/* Dodano fw-bold */}
                <p className="lead fs-4 my-3">{title}</p> {/* Zwiększono font i margines */}
                <p className="mx-auto" style={{ maxWidth: '750px' }}> {/* Zwiększono maxWidth */}
                    {tagline}
                </p>
                <a href="#skills" className="btn btn-primary btn-lg m-2 mt-4">Odkryj moje kompetencje</a> {/* Dodano mt-4 */}
                <a href="#contact" className="btn btn-outline-secondary btn-lg m-2 mt-4">Skontaktuj się</a> {/* Zmieniono na outline */}
            </div>
        </section>
    );
};

// Komponent Sekcji O Mnie
const AboutSection = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">O Mnie</h2> {/* Zwiększono mb */}
                <div className="row justify-content-center"> {/* Użyto justify-content-center */}
                    <div className="col-lg-8 text-center"> {/* Wyśrodkowanie tekstu w kolumnie */}
                        <p className="fs-5 mb-4">Jako absolwent Technikum Informatycznego posiadam silne podstawy teoretyczne, które aktywnie przekuwam w praktyczne umiejętności. Moje zaangażowanie w branżę IT wykracza poza szkolne mury – samodzielnie <strong>opracowałem stronę internetową</strong> na potrzeby hackathonu Solvehack i <strong>rozwijałem umiejętności analityczne oraz pracy zespołowej</strong> podczas rywalizacji w konkursach Capture The Flag.</p>
                        <p className="fs-5 mb-4">Przyjmuję proaktywne podejście do nauki, koncentrując się na praktycznym rozwiązywaniu problemów. Posiadam fundamentalną wiedzę z zakresu programowania w C++ i Pythonie oraz <strong>administracji systemami Windows i Linux</strong>.</p>
                        <p className="fs-5">Jestem zmotywowany do dalszego intensywnego rozwoju, szczególnie w obszarach wsparcia technicznego (Helpdesk), administracji systemami, podstaw cyberbezpieczeństwa oraz koncepcji DevOps. <strong>Poszukuję środowiska, w którym będę mógł szybko wdrażać się w nowe technologie</strong> i efektywnie przyczyniać się do realizacji celów biznesowych firmy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Komponent Sekcji Umiejętności
const SkillsSection = () => {
    // Zaktualizuj swoimi umiejętnościami
    const technicalSkills = {
        "Systemy Operacyjne": ["Administracja Windows (Podstawy)", "Obsługa Linux (CLI, Podstawy)"],
        "Programowanie / Skrypty": ["Python (Podstawy)", "C++ (Podstawy)"],
        "Web Development": ["HTML, CSS, JavaScript", "Bootstrap", "React.js (Podstawy przez CDN)"],
        "Narzędzia / Technologie": ["Git / GitHub", "Podstawy Sieci (TCP/IP)"],
        "Podstawy Cyberbezpieczeństwa": ["Wiedza z CTF", "Świadomość zagrożeń"],
        "Wsparcie IT": ["Troubleshooting", "Podstawy Helpdesk"]
    };
    const softSkills = ["Rozwiązywanie Problemów", "Szybkie Uczenie Się", "Praca Zespołowa", "Komunikatywność", "Proaktywność", "Zarządzanie Czasem"]; // Dodano Zarządzanie Czasem

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
                    <div className="col-lg-10"> {/* Zwiększono szerokość kolumny */}
                         <div className="text-center">
                            {softSkills.map(skill => (
                                <span key={skill} className="badge bg-secondary fs-6 m-2 p-2 rounded-pill">{skill}</span> // Użyto rounded-pill
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Komponent Sekcji Projekty
const ProjectsSection = () => {
    // Zaktualizuj swoimi projektami
    const projectsData = [
        {
            title: "Strona internetowa dla Hackathonu Solvehack",
            description: "<strong>Zaprojektowałem i wdrożyłem</strong> responsywną stronę informacyjną dla hackathonu Solvehack, zapewniając uczestnikom dostęp do kluczowych informacji. Wykorzystałem technologie front-endowe do stworzenia przejrzystego interfejsu.",
            skills: "HTML, CSS, JavaScript, Bootstrap, Projektowanie UI (Podstawy), Zarządzanie projektem",
            link: "#" // Wstaw prawdziwy link jeśli jest!
        },
        {
            title: "Aktywny Udział w Konkursach CTF (Unicorns of Security, 1753c)",
            description: "<strong>Rozwijałem umiejętności analityczne i techniczne</strong> w dziedzinie cyberbezpieczeństwa, uczestnicząc w zespołowych konkursach CTF. <strong>Współpracowałem</strong> z członkami drużyn przy rozwiązywaniu złożonych zadań pod presją czasu.",
            skills: "Praca zespołowa, Problem Solving, Bezpieczeństwo IT (Podstawy), Myślenie analityczne",
            link: null
        }
        // Możesz dodać więcej projektów jako obiekty w tej tablicy
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Projekty i Doświadczenie Praktyczne</h2>
                <div className="row g-4 justify-content-center"> {/* Wyśrodkowanie kart jeśli jest ich mało */}
                     {projectsData.map((project, index) => (
                        <div className="col-md-6 col-lg-5" key={index}> {/* Zmieniono rozmiar kolumn dla lepszego dopasowania */}
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    {/* Użycie dangerouslySetInnerHTML dla pogrubień w opisie. */}
                                    <p className="card-text flex-grow-1" dangerouslySetInnerHTML={{ __html: project.description }}></p> {/* flex-grow-1 aby opis wypełniał przestrzeń */}
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

// Komponent Sekcji Kontakt
const ContactSection = () => {
    // Zaktualizuj linki i email
    const email = "twoj.email@przyklad.com";
    const linkedinUrl = "#"; // Wstaw link do LinkedIn
    const githubUrl = "https://github.com/DziQTrueCoder/dziqtruecoder.github.io"; // Link do Twojego repo

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">Porozmawiajmy o współpracy</h2>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    Jestem gotów, aby wnieść swoje umiejętności, entuzjazm i chęć do nauki do Państwa zespołu. Zapraszam do kontaktu w celu omówienia, jak mogę przyczynić się do sukcesu Państwa organizacji.
                </p>
                <div className="mt-4"> {/* Dodano margines górny */}
                    <a href={`mailto:${email}`} className="btn btn-primary btn-lg m-2">
                        <i className="bi bi-envelope-fill"></i> Napisz E-mail
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-dark btn-lg m-2 ${linkedinUrl === '#' ? 'disabled' : ''}`}> {/* Wyłącz przycisk jeśli link to # */}
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

// Komponent Stopki
const Footer = () => {
    // Zaktualizuj imię i nazwisko
    const name = "Konrad Gaca";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 bg-dark text-white-50 text-center"> {/* Zmieniono kolor tekstu */}
            <div className="container">
                <p className="mb-0">Copyright &copy; {name} {currentYear}</p>
            </div>
        </footer>
    );
}


// === GŁÓWNY KOMPONENT APLIKACJI ===
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


// === RENDEROWANIE APLIKACJI ===
// Ten kod musi być na samym końcu pliku, po definicji WSZYSTKICH komponentów, w tym 'App'.

// 1. Znajdź kontener w DOM
const domContainer = document.querySelector('#root');

// 2. Utwórz root Reacta (tylko jeśli kontener istnieje)
if (domContainer) {
    const root = ReactDOM.createRoot(domContainer);
    // 3. Wyrenderuj komponent App w kontenerze
    root.render(<App />);
    console.log("Aplikacja React została zainicjowana."); // Dodajmy log, żeby widzieć w konsoli, że ten punkt został osiągnięty
} else {
    console.error('Nie znaleziono elementu #root w DOM do zainicjowania aplikacji React.');
}
