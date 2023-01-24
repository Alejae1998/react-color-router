import { useParams } from 'react-router-dom';
import './Colors.css';

export default function Colors() {
  const { r, g, b } = useParams();
  const color = `rgb(${r},${g},${b})`;

  return (
    <div style={{ backgroundColor: color }} className="rgb-color">
      <h1>{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
