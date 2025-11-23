import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="fw-bold mb-5">404 Page Not Found</h1>
      <Link className="btn btn-primary" to="/">Go to Home  Page</Link>
    </div>
  );
}
