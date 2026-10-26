export default function Contact({ schoolName, onNavigate }) {
  return (
    <article>
      <h2>Contact</h2>
      <p>School: {schoolName}</p>
      <p>Location: Kivumu, Ngororero District, Rwanda</p>
      <p>Contact email: Replace-with-your-school-email@example.com</p>
      <button onClick={() => onNavigate('Home')}>Return to Home</button>
    </article>
  );
}
