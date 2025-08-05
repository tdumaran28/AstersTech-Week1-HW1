// /components/Contact.jsx
export default function Contact({ contact }) {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
    </section>
  );
}
