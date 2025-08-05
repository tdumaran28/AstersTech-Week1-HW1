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