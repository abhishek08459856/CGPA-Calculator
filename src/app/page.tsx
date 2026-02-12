import CGPADashboard from "@/features/cgpa/CGPADashboard";

export default function Home() {
  return (
    <main className="bg-black">

      {/* HERO SECTION */}
      <section className="relative h-[30vh] lg:h-[45vh] min-h-[200px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-section.jpg)' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Bottom Gold Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

        {/* Floating Navbar */}
        <div className="absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[88%] max-w-5xl">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-10 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            <div className="text-sm md:text-lg font-semibold text-white">
              Namdapha House
            </div>

            <div className="hidden lg:flex gap-8 text-sm text-gray-300">
              <button className="hover:text-purple-400 transition">
                Calculator
              </button>
              <button className="hover:text-purple-400 transition">
                Planner
              </button>
              <button className="hover:text-purple-400 transition">
                About
              </button>
            </div>

            <button className="border border-[#F59E0B] text-[#F59E0B] px-3 md:px-4 py-1 rounded-full hover:bg-[#F59E0B]/10 transition text-xs md:text-sm">
              Join WhatsApp
            </button>
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative text-center z-10 mt-20 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            CGPA Calculator
          </h1>
          <p className="text-gray-400 mt-3 text-xs md:text-sm lg:text-base">
            Plan your academic performance with precision.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-16">
        <CGPADashboard />
      </section>
    </main>
  );
}
