import './Sidebar.css';
import { navElements } from '../header/Header';

export default function Sidebar({ setShowSidebar }) {
  const handleTabClick = (unquieId) => {
    if (unquieId === 'menu') {
      return null;
    }
    else {
      const targetSection = document.getElementById(unquieId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <nav className="sidebar">
      <button onClick={() => setShowSidebar(false)}>X</button>
      <ul>
        {navElements.map(({ label, unquieId }) => {
          if (label === 'Menu') return null;
          return (
            <li
              onClick={() => handleTabClick(unquieId)}
              key={label}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
