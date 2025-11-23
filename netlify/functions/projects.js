const projects = require("./data/projects.json");

exports.handler = async () => {
  
    try {
    return {
      statusCode: 200,
      body: JSON.stringify(projects),
      headers: {
        "Content-Type": "application/json"
      }
    };
  } 
  
  catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Failed to fetch data" })
    };
  }
};
