import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <span>
      <div className=".container">
        <h1>404</h1>
        <h2>Oops, the color that you are looking for does not exist in our palette</h2>
        <p>
          You may want to go<Link to="/">home</Link>
        </p>
      </div>

      <div className="img"></div>
    </span>
  );
}
