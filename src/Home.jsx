export default function Home({ schoolName, className, onNavigate }) {
  return (
    <article>
      <h2>Welcome to Our Class Website</h2>
      <p>Welcome to {schoolName}!</p>
      <p>Class level and trade: {className} — Software Development.</p>
      <p>This website introduces our class, shares information about our trade, lists students, and provides school contact details.</p>
      <h3>Explore the website</h3>
      <p>
        <button onClick={() => onNavigate('About')}>Learn about our class</button>{' '}
        <button onClick={() => onNavigate('Students')}>View students</button>{' '}
        <button onClick={() => onNavigate('Contact')}>Contact us</button>
      </p>
    </article>
  );
}
