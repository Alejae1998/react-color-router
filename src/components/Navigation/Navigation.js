import { NavLink, useParams } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const { r, g, b } = useParams();
  const color = `rgb(${r},${g},${b})`;

  return (
    <div className="redirect" style={{ '--color': color }}>
      <NavLink to="/rgb/160/230/255" className="colors">
        Winter Wizard
      </NavLink>
      <NavLink to="/rgb/255/166/220" className="colors">
        Lavender Rose
      </NavLink>
      <NavLink to="/rgb/255/0/125" className="colors">
        Winter Sky
      </NavLink>
    </div>
  );
}
