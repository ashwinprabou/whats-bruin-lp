const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div className="text-white" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connecting Bruins,
              <br />
              <span className="text-ucla-gold">Brewing Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              What's Bruin? is your all-in-one platform for UCLA students to
              connect with peers, professors, and alumni through meaningful,
              data-driven networking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>

          <div className="relative" data-aos="fade-up">
            <div className="relative z-10 animate-float">
              <img
                src="public/aboutss.png"
                alt="What's Bruin? Coffee Cup"
                className="rounded-xl shadow-2xl mx-auto max-w-full"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-ucla-gold/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-ucla-blue/40 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="#problem"
            className="text-white/80 hover:text-white flex flex-col items-center transition-colors duration-300"
          >
            <span className="mb-2">Discover More</span>
            <div className="w-5 h-10 border-2 border-white/80 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-2"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
