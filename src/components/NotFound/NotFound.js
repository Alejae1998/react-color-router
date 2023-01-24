import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <span>
      <div className=".container">
        <div className=".col-lg-12">
          <div className=".bg-img">
            <h1>404</h1>
            <h2>Oops, the color that you are looking for does not exist</h2>
            <p>
              You may want to go<Link to="/">home</Link>
            </p>
          </div>
        </div>
      </div>
      <div className=".bg-img"></div>
    </span>
  );
}
