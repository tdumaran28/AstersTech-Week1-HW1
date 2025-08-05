// We're importing all the components we made from the components folder
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

// This function is the main homepage of your website
export default function Home() {
  // This object holds all your resume information
  const resume = {
    name: "Your Name", // This will be passed to the Header
    title: "Aspiring Fullstack Developer", // Also for the Header
    about: "Write a short bio about yourself here.", // For About section
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"], // For Skills section
    projects: [
      {
        name: "Portfolio Website", // Project title
        description: "A site to showcase my work.", // What it's about
        url: "https://example.com" // Link to the project
      }
    ],
    contact: {
      email: "your@email.com",
      phone: "123-456-7890"
    }
  };

  return (
    // This is the main area where all content is shown
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      {/* Each component is called with the matching data from resume */}
      <Header name={resume.name} title={resume.title} />
      <About about={resume.about} />
      <Skills skills={resume.skills} />
      <Projects projects={resume.projects}/>
      <Contact contact={resume.contact} />
    </main>
  );
}