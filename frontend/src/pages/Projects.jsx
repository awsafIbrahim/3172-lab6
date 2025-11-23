import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  async function fetchProjects() {
    try {
      const isLocal = window.location.hostname === "localhost";

      const url = isLocal
        //For TEsting locally
        ? "/projects.json" 
        // Online URL
        : "/.netlify/functions/projects"; 

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("error:", err);
      setError("Failed to load");
    } finally {
      setLoading(false);
    }
  }

  fetchProjects();
}, []);




  if (error) {
    return <p className="text-center mt-5">{error}</p>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Projects List</h2>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-12 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <h6 className="text-muted">{project.author}</h6>
                
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
