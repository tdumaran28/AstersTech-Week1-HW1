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