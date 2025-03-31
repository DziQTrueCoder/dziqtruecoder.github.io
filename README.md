# Personal Portfolio - DziQTrueCoder

[![GitHub Pages](https://img.shields.io/github/deployments/DziQTrueCoder/dziqtruecoder.github.io/github-pages?label=GitHub%20Pages&logo=github)](https://dziqtruecoder.github.io/)

**Live Demo:** [https://dziqtruecoder.github.io/](https://dziqtruecoder.github.io/)

## Description

This is a personal portfolio website, created as an online showcase for potential employers and individuals interested in my work in the IT industry. It presents my skills, experience gained during studies and project implementation, as well as my career goals. The site is hosted using GitHub Pages.

## Features

* **Single Page Layout:** All key information is available on one page, with smooth scrolling between sections.
* **Responsive Design:** The site adapts to different screen sizes (desktop, tablet, mobile) thanks to the Bootstrap framework.
* **Key Sections:**
    * **Hero Section:** Brief introduction and main tagline.
    * **About Me:** A more detailed description of my profile and motivation.
    * **Competencies/Skills:** Divided into technical and soft skills.
    * **Projects & Experience:** Showcasing past achievements (e.g., Solvehack website, CTF participation).
    * **Contact:** Easy access to contact details and social profiles (LinkedIn, GitHub).
* **Interactive Navigation:** Navigation bar for easy site traversal.
* **Dynamic Components:** Content generated using the React library (loaded via CDN).

## Technologies

This website was built using the following technologies and tools:

* **HTML5:** Page structure.
* **CSS3:** Custom styles (`main.css`).
* **JavaScript (ES6+):** Site logic and DOM manipulation (via React).
* **React.js (v18 via CDN):** Library for building user interfaces based on components.
* **ReactDOM (v18 via CDN):** Library for rendering React components in the DOM.
* **Babel Standalone (via CDN):** In-browser JSX to JavaScript transpiler.
* **Bootstrap (v5.3 via CDN):** CSS framework for quickly creating responsive layouts and styling components.
* **Bootstrap Icons (optional, via CDN):** SVG icon library.
* **Git:** Version control system.
* **GitHub Pages:** Hosting platform.

## File Structure
## Running Locally

Thanks to using CDNs for libraries, the project doesn't require complex setup or a build process. To run the site locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DziQTrueCoder/dziqtruecoder.github.io.git](https://github.com/DziQTrueCoder/dziqtruecoder.github.io.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd dziqtruecoder.github.io
    ```
3.  **Open the `index.html` file** in any modern web browser (e.g., by double-clicking the file).

## Customization

Most of the site's content and structure is defined as React components in the `main.js` file. To customize the site:

* **Changing Texts:** Directly edit the string literals within the functional component definitions (e.g., `HeroSection`, `AboutSection`, etc.).
* **Updating Skills:** Modify the `technicalSkills` object or the `softSkills` array in the `SkillsSection` component.
* **Updating Projects:** Edit the `projectsData` array in the `ProjectsSection` component by adding or modifying project objects.
* **Changing Contact Details:** Update the links (`href`) and text in the `ContactSection` component, and potentially in `NavigationBar` and `Footer`.
* **Modifying Styles:** Add new rules or modify existing ones in the `main.css` file to change the site's appearance. Remember that Bootstrap styles have their own specificity, so sometimes more specific selectors or `!important` might be needed (though try to avoid the latter).

## License

This project is licensed under the MIT License. It is recommended to add a `LICENSE` file to the repository if you want to formally define the terms of use.

---
