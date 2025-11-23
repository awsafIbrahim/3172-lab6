import React, { useState, useEffect } from "react";
import skills from "../data/Skills";

export default function Skills() {
  const [searchData, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const categories = ["Frontend", "Backend", "Database", "Game Development", "Software Development", "Systems Programming"];

  // Applying filters
  useEffect(() => {
    applyFilters();
  }, [searchData, selectedCategory]);

  const applyFilters = () => {
    let results = skills;

    // Search filter
    if (searchData.trim() !== "") {
      results = results.filter(skill =>
        skill.name.toLowerCase().includes(searchData.toLowerCase())
      );
    }

    // Sategory filter
    if (selectedCategory !== "") {
      results = results.filter(skill => skill.category === selectedCategory);
    }

    setFilteredSkills(results);
  };

  const handleSearch = () => {
    
    applyFilters();
  };

  const CategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Skill Set</h2>

      {/*Search Bar*/}
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Mention Skill for search"
          value={searchData}
          onChange={(e) => setSearchInput(e.target.value)}
          
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="d-flex gap-2 flex-wrap mb-4">
        {categories.map((searchcategory) => (
          <button
            key={searchcategory}
            className={`btn ${
              selectedCategory === searchcategory ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => CategoryClick(searchcategory)}
          >
            {searchcategory}
          </button>
        ))}
      </div>

      {/* Display section */}
      <div className="row">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">{skill.name}</h5>
                  <p className="text-muted">{skill.category}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No skills found with your search</p>
        )}
      </div>
    </div>
  );
}