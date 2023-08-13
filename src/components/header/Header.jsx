import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logov3.png';

export const navElements = [
  { label: <img src={logo} alt="Logo" height='50px' width='250px' style={{ backgroundColor: 'white', padding: '10px' }} />, route: '', style: { marginRight: '260px' }, noHover: true },
  { label: 'Services', unquieId:'services', style: { textAlign: 'center' } },
  { label: 'Testimonials', unquieId:'testimonials', className: 'underline-on-hover' },
  { label: 'Orders Served', unquieId:'orders' },
  { label: 'About Us', unquieId:'about'},
  { label: 'Menu', unquieId:'menu', style: { marginLeft: 'auto' }  },
];

export default function Header({ setShowSidebar }) {
  const handleTabClick = (unquieId) => {
    if (unquieId === 'menu') {
      setShowSidebar(true);
    }
    else {
      const targetSection = document.getElementById(unquieId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, unquieId, style = {}, noHover }) => {
            const liClassName = noHover ? 'no-hover' : 'underline-on-hover';

            return (
              <li className={liClassName}
                style={style}
                key={label}
                onClick={() => handleTabClick(unquieId)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
