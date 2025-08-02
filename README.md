# AstersTech Week 1 Homework — Resume Website (Next.js)

Welcome to your first AstersTech homework assignment! In this project, you'll build your very own **1-page resume website** using **Next.js** and **React**, running entirely in **GitHub Codespaces**.

---

## Step 1: Fork the Starter Repository

1. You will receive a link to the starter repo, for example:  
   `https://github.com/AstersTech/week1-resume-nextjs`

2. Open the link in your browser.

3. Click the **Fork** button at the top-right corner of the page.  
   This creates a copy of the repository in your own GitHub account.

4. Your forked repo URL will look like:  
   `https://github.com/your-username/week1-resume-nextjs`

---

## Step 2: Open the Forked Repo in GitHub Codespaces

1. Navigate to your forked repo page on GitHub.

2. Click the green **Code** button.

3. Select the **Codespaces** tab.

4. Click **Create codespace on main**.

5. Wait a minute or two for Codespaces to launch your cloud IDE.

---

## Step 3: Create a New Next.js App

In the terminal inside Codespaces, run the following command to generate a new Next.js project:

Make sure to replace "yourname" with the actual name. Remember this can't have capital letters, spaces, and special characters.

```bash
npx create-next-app@latest "yourname" --use-npm
```
✅ If prompted, type y to overwrite existing files.

Wait a minute or two — your project will be ready to go!

Now enter the new folder that was created. Remember replace "yourname" with the name of the folder.

```bash
cd "yourname"
```

## Step 4: Run Your Website
Start the development server:
```bash
npm run dev
```

Then:

Click the "PORTS" tab at the bottom of Codespaces.

Find port 3000, and click the link to open your live website.

If the site was created correctly, you should see a white "NextJS logo"

## Step 5: Create Your Resume Components
In the root of your project (the folder called "yourname"), create a new folder named:

"components"

Inside components, create the following files:

```
Header.jsx
About.jsx
Skills.jsx
Projects.jsx
Contact.jsx
```

Example: components/Header.jsx
```js
// This function defines a "Header" component
// Components in React are like reusable chunks of a webpage
export default function Header({ name, title }) {
  // The `name` and `title` values come from the parent file (like page.tsx)
  // and are displayed using JSX, which is a mix of HTML and JavaScript

  return (
    // <header> is an HTML element that usually contains titles or intro info
    <header>
      {/* <h1> is used for main headings. We're making the text bigger using inline styles */}
      <h1 style={{ fontSize: "2rem" }}>{name}</h1>

      {/* <p> is used for paragraphs. We're changing the text color using a hex color */}
      <p style={{ color: "#555" }}>{title}</p>
    </header>
  );
}

```
Use similar structure for your other components. Use your knowledge of HTML and CSS that you learned during class to change the code to display something else. Make sure to change the title of the function from "header" to something tha tmatches the component you are working on. For each component pass in the information you defined in resume.js. Make sure to include a place for every variable. If you ever get stuck or need help with HTMl, reach out to your instructor or use AI to create a good component for you.

Use this list of HTML tags to help you on your journey: https://www.semrush.com/blog/html-tags-list/

Example: components/About.jsx
```jsx
// This component displays a short bio or description about the person
export default function About({ about }) {
  // The `about` variable is a piece of text passed from the main page

  return (
    // <div> is a general-purpose container for content
    <div>
      {/* We're placing the bio inside a paragraph and coloring the text */}
      <p style={{ color: "#555" }}>{about}</p>
    </div>
  );
}
```
Example: components/Skills.jsx
```jsx
// This component will show a list of skills
export default function Skills({ skills }) {
  // `skills` is expected to be an array of skill names, like ["HTML", "CSS"]

  return (
    <section>
      {/* This is a section heading */}
      <h2 style={{ fontSize: "1.5rem" }}>Skills</h2>

      {/* <ul> means unordered list. We use this to show each skill in a bullet point */}
      <ul>
        {/* .map() is used to loop through the array and return one <li> for each skill */}
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li> // key helps React keep track of each item
        ))}
      </ul>
    </section>
  );
}
```

## Step 6: Fetch Resume Data and Display It
Replace the contents of app/page.tsx with the following code:
```jsx
// We're importing all the components we made from the components folder
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
      <Projects projects={resume.projects} />
      <Contact contact={resume.contact} />
    </main>
  );
}
```

Some Important Links : 
1. https://divmagic.com/tailwind
2. https://react.dev/learn
3. https://www.semrush.com/blog/html-tags-list/

