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

```bash
npx create-next-app@latest "yourname" --use-npm
```
✅ If prompted, type y to overwrite existing files.

Wait a minute or two — your project will be ready to go!

## Step 4: Run Your Website
Start the development server:
```bash
npm run dev
```

Then:

Click the "PORTS" tab at the bottom of Codespaces.

Find port 3000, and click the link to open your live website.

## Step 5: Create an API for Resume Data
Open the pages/api/ folder.

Create a new file called: "resume.js"

Paste the following code inside:

```js
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
```

✅ Test your API route by visiting:

http://localhost:3000/api/resume

## Step 6: Create Your Resume Components
In the root of your project, create a new folder named:

"/components"
Inside components, create the following files:

components/Header.js
components/About.js
components/Skills.js
components/Projects.js
components/Contact.js

Example: components/Header.js
```js
export default function Header({ name, title }) {
  return (
    <header>
      <h1 style={{ fontSize: "2rem" }}>{name}</h1>
      <p style={{ color: "#555" }}>{title}</p>
    </header>
  );
}
```
Use similar structure for your other components. Pass in props and style them using inline styles.

## Step 7: Fetch Resume Data and Display It
Replace the contents of pages/index.js with the following code:
```js
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
```
## Step 8: Customize and Style Your Site
Use inline styles inside each component to make things look nice.

Example:
```js
<div style={{ backgroundColor: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
  <p>{about}</p>
</div>
```
✅ Tips:

Make each section visually distinct

Use padding, margin, background color, font size, etc.

## Step 9: Optional Add-Ons (Extra Credit 🎁)
If you're ahead of schedule, try adding any of these:

🖼️ Add a profile image to /public/avatar.png

🔗 Include social media links in your contact section

💼 Use emojis in your section titles (like 💼 Projects)

🌀 Add hover effects or simple animations using inline styles

## Step 10: Commit and Push Your Work
Click the Source Control (Git) icon in the left sidebar.

Write a brief commit message (e.g., Added resume components).

Click the ✓ Commit button.

Then click Push (cloud icon) to upload your code to GitHub.

## Step 11: Submit Your Homework
Copy your GitHub repo URL (e.g., https://github.com/yourname/week1-resume-nextjs)

Submit this link to your instructor

🛠 Troubleshooting Tips
Site won’t start?
Make sure you ran:
```bash
npm run dev
```
API not working?

Double-check that resume.js is located inside pages/api/

Visit: http://localhost:3000/api/resume

Still stuck?
Ask your instructor! 😄

