const students = [
  { id: 'S001', name: 'Alexandre Iradukunda', trade: 'Software Development' },
  { id: 'S002', name: 'Student Two', trade: 'Software Development' },
  { id: 'S003', name: 'Student Three', trade: 'Software Development' },
  { id: 'S004', name: 'Student Four', trade: 'Software Development' },
  { id: 'S005', name: 'Student Five', trade: 'Software Development' }
];

export default function Students({ className }) {
  return (
    <article>
      <h2>Our Students</h2>
      <p>Class: {className}</p>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.id}</strong> — {student.name} — {student.trade}
          </li>
        ))}
      </ul>
      <p>Replace the sample names with the correct names of your classmates before submitting.</p>
    </article>
  );
}
