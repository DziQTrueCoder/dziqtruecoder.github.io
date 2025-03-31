const { useState, useEffect, Fragment } = React;

const getLanguageFromCountry = (countryCode) => {
    const countryLangMap = {
        PL: 'pl',
        DE: 'de', AT: 'de', CH: 'de',
        ES: 'es', MX: 'es', AR: 'es', CO: 'es', PE: 'es', VE: 'es', CL: 'es',
        GB: 'en', US: 'en', CA: 'en', AU: 'en', IE: 'en', NZ: 'en'
    };
    return countryLangMap[countryCode] || 'en';
};

const NavigationBar = ({ t }) => {
    const brandName = t.navbarBrand || "Konrad Gaca";
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="#hero">{brandName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#hero">{t.navStart || 'Start'}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">{t.navAbout || 'About'}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">{t.navSkills || 'Skills'}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">{t.navProjects || 'Projects'}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">{t.navContact || 'Contact'}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const HeroSection = ({ t }) => {
    return (
        <section id="hero" className="d-flex align-items-center text-center" style={{ minHeight: '90vh' }}>
             <div className="container">
                <h1 className="display-3 fw-bold">{t.heroName || 'Konrad Gaca'}</h1>
                <p className="lead fs-4 my-3">{t.heroTitle || 'Loading title...'}</p>
                <p className="mx-auto" style={{ maxWidth: '750px' }}>{t.heroTagline || 'Loading tagline...'}</p>
                <a href="#skills" className="btn btn-primary btn-lg m-2 mt-4">{t.heroBtnSkills || 'Discover Skills'}</a>
                <a href="#contact" className="btn btn-outline-secondary btn-lg m-2 mt-4">{t.heroBtnContact || 'Get in Touch'}</a>
            </div>
        </section>
    );
};

const AboutSection = ({ t }) => {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">{t.aboutHeading || 'About Me'}</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="fs-5 mb-4" dangerouslySetInnerHTML={{ __html: t.aboutP1 || 'Loading...' }}></p>
                        <p className="fs-5 mb-4" dangerouslySetInnerHTML={{ __html: t.aboutP2 || 'Loading...' }}></p>
                        <p className="fs-5" dangerouslySetInnerHTML={{ __html: t.aboutP3 || 'Loading...' }}></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillsSection = ({ t }) => {
    const technicalSkillsData = {
        [t.skillsCatOS || 'OS']: [t.skillsCatOS1, t.skillsCatOS2],
        [t.skillsCatProg || 'Prog']: [t.skillsCatProg1, t.skillsCatProg2],
        [t.skillsCatWeb || 'Web']: [t.skillsCatWeb1, t.skillsCatWeb2, t.skillsCatWeb3],
        [t.skillsCatTools || 'Tools']: [t.skillsCatTools1, t.skillsCatTools2],
        [t.skillsCatCyber || 'Cyber']: [t.skillsCatCyber1, t.skillsCatCyber2],
        [t.skillsCatSupport || 'Support']: [t.skillsCatSupport1, t.skillsCatSupport2]
    };
    const softSkillsData = [t.softSkill1, t.softSkill2, t.softSkill3, t.softSkill4, t.softSkill5, t.softSkill6];

    const validSoftSkills = softSkillsData.filter(skill => skill);
    const validTechnicalSkills = Object.entries(technicalSkillsData)
        .map(([category, skills]) => ({ category, skills: skills.filter(skill => skill) }))
        .filter(entry => entry.skills.length > 0);

    return (
        <section id="skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">{t.skillsHeading || 'Competencies'}</h2>
                <h3 className="text-center text-muted mb-4">{t.skillsSubHeadingTech || 'Technical'}</h3>
                <div className="row justify-content-center g-4">
                    {validTechnicalSkills.map(({ category, skills }) => (
                        <div className="col-md-6 col-lg-4" key={category}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{category}</h5>
                                    <ul className="list-unstyled mb-0">
                                        {skills.map(skill => skill && <li key={skill} className="mb-1"><i className="bi bi-check-lg text-success me-2"></i>{skill}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <h3 className="text-center text-muted mt-5 mb-4">{t.skillsSubHeadingSoft || 'Soft Skills'}</h3>
                 <div className="row justify-content-center">
                    <div className="col-lg-10">
                         <div className="text-center">
                            {validSoftSkills.map(skill => skill && <span key={skill} className="badge bg-secondary fs-6 m-2 p-2 rounded-pill">{skill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectsSection = ({ t }) => {
    const projectsData = [
        {
            title: t.project1Title,
            description: t.project1Desc,
            skills: t.project1Skills,
            link: "#"
        },
        {
            title: t.project2Title,
            description: t.project2Desc,
            skills: t.project2Skills,
            link: null
        }
    ].filter(p => p.title);

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">{t.projectsHeading || 'Projects'}</h2>
                <div className="row g-4 justify-content-center">
                     {projectsData.map((project, index) => (
                        <div className="col-md-6 col-lg-5" key={index}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text flex-grow-1" dangerouslySetInnerHTML={{ __html: project.description || '...' }}></p>
                                    <p className="card-text mt-3"><strong>{t.projectsLabelSkills || 'Key skills:'}</strong> <small className="text-muted">{project.skills || '...'}</small></p>
                                    {project.link && project.link !== "#" && <a href={project.link} className="btn btn-outline-primary mt-2 align-self-start" target="_blank" rel="noopener noreferrer">{t.projectsBtnSeeOnline || 'See online'}</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = ({ t }) => {
    const email = "konrad.gaca.dev@gmail.com"; // <- Zmień!
    const linkedinUrl = "https://www.linkedin.com/in/konrad-gaca/"; // <- Zmień!
    const githubUrl = "https://github.com/DziQTrueCoder/dziqtruecoder.github.io";

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container text-center">
                <h2 className="mb-4">{t.contactHeading || 'Contact'}</h2>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    {t.contactLead || 'Loading...'}
                </p>
                <div className="mt-4">
                    <a href={`mailto:${email}`} className="btn btn-primary btn-lg m-2">
                        <i className="bi bi-envelope-fill"></i> {t.contactEmailBtn || 'Email Me'}
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-dark btn-lg m-2 ${linkedinUrl === '#' ? 'disabled' : ''}`}>
                        <i className="bi bi-linkedin"></i> {t.contactLinkedinBtn || 'LinkedIn Profile'}
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
                        <i className="bi bi-github"></i> {t.contactGithubBtn || 'GitHub Code'}
                    </a>
                </div>
            </div>
        </section>
    );
};

const Footer = ({ t }) => {
    const currentYear = new Date().getFullYear();
    const copyrightText = t.footerCopyright || `Copyright &copy; Konrad Gaca ${currentYear}`;

    return (
        <footer className="py-4 bg-dark text-white-50 text-center">
            <div className="container">
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: copyrightText.replace('Konrad Gaca', t.navbarBrand || 'Konrad Gaca') }}></p>
            </div>
        </footer>
    );
}

const App = () => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://ip-api.com/json/?fields=status,message,countryCode')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'success' && data.countryCode) {
                    const detectedLang = getLanguageFromCountry(data.countryCode);
                    setLanguage(detectedLang);
                    document.documentElement.lang = detectedLang;
                } else {
                    setLanguage('en');
                    document.documentElement.lang = 'en';
                }
            })
            .catch(e => {
                console.error("Error fetching geolocation:", e);
                setError("Could not determine location, defaulting to English.");
                setLanguage('en');
                document.documentElement.lang = 'en';
            });
    }, []);

    useEffect(() => {
        if (!language) return;

        setIsLoading(true);
        setError(null);
        fetch(`/locales/${language}.json`)
            .then(response => {
                if (!response.ok) {
                     if (language !== 'en') {
                        console.warn(`Failed to fetch ${language}.json, attempting fallback to en.json`);
                        return fetch(`/locales/en.json`).then(fallbackResponse => {
                            if (!fallbackResponse.ok) {
                                throw new Error(`Fallback en.json also failed! status: ${fallbackResponse.status}`);
                            }
                            setLanguage('en');
                            document.documentElement.lang = 'en';
                            return fallbackResponse.json();
                        });
                    } else {
                         throw new Error(`HTTP error! status: ${response.status} for ${language}.json`);
                    }
                }
                return response.json();
            })
            .then(data => {
                setTranslations(data);
                document.title = data.pageTitle || 'Konrad Gaca - IT Portfolio';
                setIsLoading(false);
            })
            .catch(e => {
                console.error(`Error fetching or parsing translations for ${language}:`, e);
                setError(`Could not load translations.`);
                setTranslations({});
                setIsLoading(false);
            });
    }, [language]);

    if (isLoading) {
        return <div className="loading-indicator">{translations.loading || 'Loading...'}</div>;
    }

    if (error && Object.keys(translations).length === 0) {
         return <div className="loading-indicator">Error loading translations. Please try again later.</div>;
    }

    return (
        <Fragment>
            <NavigationBar t={translations} />
            <HeroSection t={translations} />
            <AboutSection t={translations} />
            <SkillsSection t={translations} />
            <ProjectsSection t={translations} />
            <ContactSection t={translations} />
            <Footer t={translations} />
        </Fragment>
    );
};

const domContainer = document.querySelector('#root');

if (domContainer) {
    const root = ReactDOM.createRoot(domContainer);
    root.render(<App />);
} else {
    console.error('Nie znaleziono elementu #root w DOM do zainicjowania aplikacji React.');
}
