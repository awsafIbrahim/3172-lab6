exports.handler = async () => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      console.error("NO WEATHER_API_KEY");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing API key" })
      };
    }

    const city = "Dartmouth";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

 
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
      })
    };

  } 
  catch (err) {
    console.error("Serverless function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch weather DATA" })
    };
  }
};
