import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logov3.png';

export const navElements = [
  { label: <img src={logo} height='50px' width='250px'/>, route: '', style: {  marginRight: '260px'} },
  { label: 'Services', route: 'model_s', style: { textAlign: 'center' } },
  { label: 'Testimonials', route: 'model_x', className: 'underline-on-hover' },
  { label: 'Orders Served', route: 'cybertruck' },
  { label: 'About Us', route: 'shop' },
  { label: 'Menu', route: null, style: { marginLeft: 'auto' }  },
];

export default function Header({ setShowSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style = {} }) => {
            return (
              <li className='underline-on-hover'
                style={style}
                key={label}
                onClick={() => {
                  if (label === 'Menu') {
                    setShowSidebar(true);
                  } else {
                    navigate(`/${route}`);
                  }
                }}
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
