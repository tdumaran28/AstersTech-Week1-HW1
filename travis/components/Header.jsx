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
