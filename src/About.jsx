export default function About({ schoolName }) {
  return (
    <article>
      <h2>About Our Class</h2>
      <p>The purpose of this website is to present our class, introduce the Software Development trade, and share student and contact information.</p>
      <p>{schoolName} provides technical and vocational learning that helps students develop practical skills.</p>
      <h3>Subjects and skills we learn</h3>
      <ul>
        <li>Front-End Application Development with ReactJS</li>
        <li>Web development with HTML and JavaScript</li>
        <li>Database development using SQL and MySQL</li>
        <li>Backend development and programming logic</li>
      </ul>
    </article>
  );
}
