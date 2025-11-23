import WeatherWidget from "../components/WeatherWidget";

export default function Home() {
  return (
    <section className="text-center py-5">
      <h1 className="fw-bold display-4 mb-3">Hi. Welcome to my shop</h1>

      <WeatherWidget />
      
      <p className="lead">
        I am a computer enthuasiast who is always trying to learn how computer works under the hood. My area of passion are computer systems, hardware and electronics. I have worked a lot with system level projects. Now, I have dived into learning electronics and Networking which leads to me working with Arduino and Esp32. I have done some full stack projects and deployed on Azure which were my side projects. I have done some certifications on MS azure.
      </p>

      <div className="mt-5">
        <a href="/projects" className="btn btn-primary btn-lg px-3"> My Projects</a>
      </div>
    </section>
  );
}
