import ToogleBackground from "./ToogleBackground";

export default function Footer() {
  return (
    <footer className=" bg-primary text-light text-center py-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} All Good </p>
      <p></p>
      <ToogleBackground/>
    </footer>
  );
}
