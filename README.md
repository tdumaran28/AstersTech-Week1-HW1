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

In the terminal at the bottom of Codespaces, run:

```bash
npx create-next-app@latest . --use-npm
If prompted, type y to overwrite existing files.

After a minute or two, your project will be ready to go!

Step 4: Run Your Website
In the terminal, run the development server:

bash
Copy
Edit
npm run dev
Then, click the "PORTS" tab at the bottom of Codespaces.

Find port 3000, and click the link to view your website live.

Step 5: Create an API for Resume Data
Go to the pages/api folder.

Create a new file called resume.js.

Add this code:

js
Copy
Edit
export default function handler(req, res) {
  res.status(200).json({
    name: "Your Name",
    title: "Aspiring Fullstack Developer",
    about: "Write a short bio about yourself here.",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    projects: [
      {
        name: "Portfolio Website",
        description: "A site to showcase my work.",
        url: "https://example.com"
      }
    ],
    contact: {
      email: "your@email.com",
      phone: "123-456-7890"
    }
  });
}
Test it by visiting: http://localhost:3000/api/resume

Step 6: Create Your Resume Components
Create a new folder called components in the root directory.

Inside it, create:

css
Copy
Edit
components/Header.js
components/About.js
components/Skills.js
components/Projects.js
components/Contact.js
Example Header.js:

jsx
Copy
Edit
export default function Header({ name, title }) {
  return (
    <header>
      <h1 style={{ fontSize: "2rem" }}>{name}</h1>
      <p style={{ color: "#555" }}>{title}</p>
    </header>
  );
}
Build the other components similarly using props and inline styling.

Step 7: Fetch Resume Data and Display It
Replace your pages/index.js with:

jsx
Copy
Edit
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/resume");
  const resume = await res.json();
  return { props: { resume } };
}

export default function Home({ resume }) {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <Header name={resume.name} title={resume.title} />
      <About about={resume.about} />
      <Skills skills={resume.skills} />
      <Projects projects={resume.projects} />
      <Contact contact={resume.contact} />
    </main>
  );
}
Step 8: Customize and Style Your Site
Use inline styles inside your components:

jsx
Copy
Edit
<div style={{ backgroundColor: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
  <p>{about}</p>
</div>
Make each section visually distinct.

Step 9: Optional Add-Ons (Extra Credit 🎁)
Add a profile image (/public/avatar.png)

Display social media links

Use emojis in section headers (e.g., 💼 Projects)

Add hover effects or simple animations

Step 10: Commit and Push Your Work
Click the Source Control (Git) icon in the sidebar.

Write a commit message (e.g., Added resume components).

Click the ✓ Commit, then click Push to upload to GitHub.

Step 11: Submit Your Homework
Copy your GitHub repo URL (e.g., https://github.com/yourname/week1-resume-nextjs)

Share the link with your instructor

Troubleshooting Tips
If the site doesn’t run, recheck your terminal and confirm you ran:

bash
Copy
Edit
npm run dev
If your resume data doesn't load:

Double-check that your resume.js file is inside pages/api/

Make sure the fetch URL matches: http://localhost:3000/api/resume

Still stuck? Ask your instructor! 😄

