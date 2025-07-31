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

## Step 5: Create an API for Resume Data

Right click on the folder named "app" and create a new folder called "api"

Right click on the foler called "api" and create a new folder called "resume"

Finally, right click on the resume folder and create a new file (not folder) called "route.js"

Open route.js and paste the following code inside:

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

## Step 6: Create Your Resume Components
In the root of your project (the folder called "yourname"), create a new folder named:

"components"

Inside components, create the following files:

```
Header.js
About.js
Skills.js
Projects.js
Contact.js
```

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
Use similar structure for your other components. Use your knowledge of HTML and CSS that you learned during class to change the code to display something else. Make sure to change the title of the function from "header" to something tha tmatches the component you are working on. For each component pass in the information you defined in resume.js. Make sure to include a place for every variable. If you ever get stuck or need help with HTMl, reach out to your instructor or use AI to create a good component for you.

Use this list of HTML tags to help you on your journey: https://www.semrush.com/blog/html-tags-list/

Example: components/About.js
```js
export default function About({ about }) {
  return (
    <div>
      <p style={{ color: "#555" }}>{about}</p>
    </div>
  );
}
```

## Step 7: Fetch Resume Data and Display It
Replace the contents of app/page.tsx with the following code:
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
## ✅ Step 8: Add Tailwind CSS and Style Your Site

Tailwind CSS provides a utility-first approach for styling, making your components cleaner and easier to maintain.

---

### **1. Install Tailwind CSS**
Run the following commands inside your Next.js project folder:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This creates:
- `tailwind.config.js` (Tailwind configuration)
- `postcss.config.js` (PostCSS configuration)

---

### **2. Configure `tailwind.config.js`**
Update the `content` property so Tailwind knows where your components and pages are:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### **3. Add Tailwind Directives to Global CSS**
Open `styles/globals.css` and add the following at the top:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This loads Tailwind's core styles.

---

### **4. Start Using Tailwind in Components**
Now you can remove inline styles and use Tailwind utility classes:

**Before (inline styles):**
```jsx
<div style={{ backgroundColor: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
  <p>{about}</p>
</div>
```

**After (Tailwind):**
```jsx
<div className="bg-gray-100 p-4 rounded-lg">
  <p>{about}</p>
</div>
```

---

✅ **Now you can use any Tailwind class like `text-center`, `bg-blue-500`, `flex`, `grid`, etc.**  
Run your development server:

```bash
npm run dev
```

Your Next.js app now supports Tailwind CSS styling. Use the TailWindCSS documentation to add cool styling to your website: https://divmagic.com/tailwind  

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

Some Important Links : 
1. https://divmagic.com/tailwind
2. https://react.dev/learn
3. https://www.semrush.com/blog/html-tags-list/

