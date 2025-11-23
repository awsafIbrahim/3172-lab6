import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" to="/">My Portfolio</Link>

    
        <div id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
