import SpinningTetrahedron from "./../(components)/tetra";

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-48 bg-gray-900 text-white p-4 flex flex-col space-y-4">
        <h1 className="text-xl font-bold">Menu</h1>
        <nav>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#work" className="hover:underline">Work</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="ml-48 flex-1 flex flex-col items-center justify-center p-4">
        {/* Top left text */}
        <div className="absolute top-4 left-52 text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Eric Do</h1>
          <h2 className="text-sm sm:text-base md:text-lg">Computer Science Student @ UNSW</h2>
        </div>
        
        {/* Centered spinning tetrahedron */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
          <SpinningTetrahedron />
        </div>

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
    </div>
  );
}
