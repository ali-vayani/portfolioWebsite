import NavBar from "@/components/sections/NavBar";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="bg-black -z-10">
      <NavBar/>
      <About/>
    </div>
  );
}
