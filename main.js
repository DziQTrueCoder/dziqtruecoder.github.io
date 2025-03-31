const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center text-center bg-light" style={{ minHeight: '80vh' }}>
             <div className="container">
                <h1 className="display-3">Jan Kowalski (Przykład)</h1>
                <p className="lead fw-bold">Ambitny Technik Informatyk | Junior IT Specialist</p> {/* Użyj np. fw-bold dla wyróżnienia */}
                <p className="mx-auto" style={{ maxWidth: '700px' }}> {/* Ogranicz szerokość dla lepszej czytelności */}
                    Poszukuję możliwości rozwoju w IT, oferując solidne podstawy w zakresie administracji systemami (Windows/Linux), programowania (Python, C++) oraz praktyczne doświadczenie z projektów webowych i konkursów CTF. Szybko przyswajam wiedzę i jestem zdeterminowany, by efektywnie wspierać cele zespołu technicznego.
                </p>
                <a href="#skills" className="btn btn-primary btn-lg m-2">Odkryj moje kompetencje</a> {/* Zmiana CTA */}
                <a href="#contact" className="btn btn-secondary btn-lg m-2">Skontaktuj się</a>
            </div>
        </section>
    );
};

// Komponent Sekcji O Mnie
const AboutSection = () => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">O Mnie</h2>
                <div className="row">
                    <div className="col-lg-8 mx-auto"> {/* Użyj większej kolumny na szerszych ekranach */}
                        <p>Jako absolwent Technikum Informatycznego posiadam silne podstawy teoretyczne, które aktywnie przekuwam w praktyczne umiejętności. Moje zaangażowanie w branżę IT wykracza poza szkolne mury – samodzielnie <strong>opracowałem stronę internetową</strong> na potrzeby hackathonu Solvehack i <strong>rozwijałem umiejętności analityczne oraz pracy zespołowej</strong> podczas rywalizacji w konkursach Capture The Flag.</p>
                        <p>Przyjmuję proaktywne podejście do nauki, koncentrując się na praktycznym rozwiązywaniu problemów. Posiadam fundamentalną wiedzę z zakresu programowania w C++ i Pythonie oraz <strong>administracji systemami Windows i Linux</strong>.</p>
                        <p>Jestem zmotywowany do dalszego intensywnego rozwoju, szczególnie w obszarach wsparcia technicznego (Helpdesk), administracji systemami, podstaw cyberbezpieczeństwa oraz koncepcji DevOps. <strong>Poszukuję środowiska, w którym będę mógł szybko wdrażać się w nowe technologie</strong> i efektywnie przyczyniać się do realizacji celów biznesowych firmy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


const SkillsSection = () => {
    const technicalSkills = {
        "Systemy Operacyjne": ["Administracja Windows", "Obsługa Linux"],
        "Programowanie / Skrypty": ["Python (Podstawy)", "C++ (Podstawy)"],
        "Web Development": ["HTML, CSS, JavaScript", "Bootstrap", "React.js"],
        "Narzędzia / Technologie": ["Git / GitHub", "Podstawy Sieci (TCP/IP)"],
        "Podstawy Cyberbezpieczeństwa": ["Wiedza z CTF", "Świadomość zagrożeń"],
        "Wsparcie IT": ["Troubleshooting", "Podstawy Helpdesk"]
    };
    const softSkills = ["Rozwiązywanie Problemów", "Szybkie Uczenie Się", "Praca Zespołowa", "Komunikatywność", "Proaktywność"];

    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Kluczowe Kompetencje</h2> {}
                <h3 className="text-center text-muted mb-4">Techniczne</h3>
                <div className="row justify-content-center g-4"> {}
                    {Object.entries(technicalSkills).map(([category, skills]) => (
                        <div className="col-md-6 col-lg-4" key={category}>
                            <div className="card h-100 shadow-sm"> {}
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{category}</h5>{}
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
                    <div className="col-lg-8">
                         <div className="text-center">
                            {softSkills.map(skill => (
                                <span key={skill} className="badge bg-secondary fs-6 m-1 p-2">{skill}</span> // Badge dla umiejętności miękkich
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Komponent Sekcji Projekty (użycie mocniejszych czasowników i podkreślenie umiejętności)
const ProjectsSection = () => {
    const projectsData = [
        {
            title: "Strona internetowa dla Hackathonu Solvehack",
            description: "<strong>Zaprojektowałem i wdrożyłem</strong> responsywną stronę informacyjną dla hackathonu Solvehack, zapewniając uczestnikom dostęp do kluczowych informacji. Wykorzystałem technologie front-endowe do stworzenia przejrzystego interfejsu.",
            skills: "HTML, CSS, JavaScript, Bootstrap, Projektowanie UI (Podstawy), Zarządzanie projektem", // Zaktualizuj wg stanu faktycznego!
            link: "#" // Wstaw link jeśli jest
        },
        {
            title: "Aktywny Udział w Konkursach CTF (Unicorns of Security, 1753c)",
            description: "<strong>Rozwijałem umiejętności analityczne i techniczne</strong> w dziedzinie cyberbezpieczeństwa, uczestnicząc w zespołowych konkursach CTF. <strong>Współpracowałem</strong> z członkami drużyn przy rozwiązywaniu złożonych zadań pod presją czasu.",
            skills: "Praca zespołowa, Problem Solving, Bezpieczeństwo IT (Podstawy), Myślenie analityczne",
            link: null
        }
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Projekty i Doświadczenie Praktyczne</h2>
                <div className="row g-4">
                     {projectsData.map((project, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    {/* Użycie dangerouslySetInnerHTML dla pogrubień w opisie - UWAŻAJ przy dynamicznych danych! Tutaj jest bezpieczne, bo tekst jest statyczny. */}
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                    <p className="card-text mt-auto pt-3"><strong>Kluczowe umiejętności:</strong> <small className="text-muted">{project.skills}</small></p>
                                    {project.link && <a href={project.link} className="btn btn-outline-primary mt-2 align-self-start" target="_blank" rel="noopener noreferrer">Zobacz online</a>}
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
    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">Porozmawiajmy o współpracy</h2>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    Jestem gotów, aby wnieść swoje umiejętności, entuzjazm i chęć do nauki do Państwa zespołu. Zapraszam do kontaktu w celu omówienia, jak mogę przyczynić się do sukcesu Państwa organizacji.
                </p>
                <div>
                    {/* Zastąp # prawdziwymi linkami/danymi */}
                    <a href="mailto:twoj.email@przyklad.com" className="btn btn-primary btn-lg m-2"> 
                        <i className="bi bi-envelope-fill me-2"></i> Napisz E-mail
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                        <i className="bi bi-linkedin me-2"></i> Profil LinkedIn
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                        <i className="bi bi-github me-2"></i> Zobacz Kod na GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App/>); 
