import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import './Colors.css';

export default function Colors() {
  const { r, g, b } = useParams();
  const color = `rgb(${r},${g},${b})`;

  return (
    <div style={{ backgroundColor: color }} className="rgb-color">
      <Navigation />
      <h1>{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
