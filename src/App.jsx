import { useState } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Students from './Students.jsx';
import Contact from './Contact.jsx';

const SCHOOL_NAME = 'EAV Kivumu TSS';
const CLASS_NAME = 'S4 Software Development';

export default function App() {
  const [activeView, setActiveView] = useState('Home');
  const [clickCount, setClickCount] = useState(0);

  function goTo(view) {
    setActiveView(view);
  }

  return (
    <main>
      <header>
        <h1>{SCHOOL_NAME}</h1>
        <p>{CLASS_NAME} Class Website</p>
        <nav aria-label="Main navigation">
          {['Home', 'About', 'Students', 'Contact'].map((view) => (
            <button key={view} onClick={() => goTo(view)} aria-current={activeView === view ? 'page' : undefined}>
              {view}
            </button>
          ))}
        </nav>
      </header>

      <section>
        {activeView === 'Home' && <Home schoolName={SCHOOL_NAME} className={CLASS_NAME} onNavigate={goTo} />}
        {activeView === 'About' && <About schoolName={SCHOOL_NAME} />}
        {activeView === 'Students' && <Students className={CLASS_NAME} />}
        {activeView === 'Contact' && <Contact schoolName={SCHOOL_NAME} onNavigate={goTo} />}
      </section>

      <section>
        <h2>React Click Counter</h2>
        <p>You have clicked the counter button {clickCount} time(s).</p>
        <button onClick={() => setClickCount((count) => count + 1)}>Click counter</button>
        <button onClick={() => setClickCount(0)}>Reset counter</button>
      </section>

      <footer>
        <p>{SCHOOL_NAME} | {CLASS_NAME}</p>
      </footer>
    </main>
  );
}
