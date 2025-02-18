import SpinningTetrahedron from "./../(components)/tetra";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col">
      {/* Sticky Navbar at Top Right with higher z-index */}
      <div className="fixed top-4 right-4 text-white p-2 rounded-lg z-50">
        <nav>
          <ul className="flex sm:flex-row sm:space-x-4 flex-col sm:space-y-0 space-y-2 text-right">
            <li><a href="#about" className="hover:underline focus:outline-none">About</a></li>
            <li><a href="#work" className="hover:underline focus:outline-none">Work</a></li>
            <li><a href="#contact" className="hover:underline focus:outline-none">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Landing Page */}
      <section className="h-screen flex flex-col justify-center relative">
        {/* Title and Subtitle aligned top left */}
        <div className="absolute top-4 left-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Eric Do</h1>
          <h2 className="text-sm sm:text-base md:text-lg">Computer Science Student @ UNSW</h2>
        </div>

        {/* Centered spinning tetrahedron */}
        <div className="flex items-center justify-center h-full">
          <SpinningTetrahedron />
        </div>
      </section>

      {/* Infinite scrolling sections */}
      <section id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">About Section</h2>
      </section>
      <section id="work" className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Work Section</h2>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Contact Section</h2>
      </section>
    </div>
  );
}