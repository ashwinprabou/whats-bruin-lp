import { CoffeeIcon, Award, Heart, BarChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ucla-blue">About What's Bruin?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built by UCLA students for UCLA students, with a passion for connection and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-ucla-blue mb-6">Our Story</h3>
            <div className="text-content">
              <p className="text-gray-700 mb-4">
                What's Bruin? was born from our own experiences as sophomore college students at UCLA. We understood the impact that meaningful connections could have on our academic journeys and future careers.
              </p>
              <p className="text-gray-700 mb-4">
                We recognized the challenges of building valuable networks on campus - the intimidation of approaching professors, the time-consuming nature of finding project partners, and the difficulty of connecting with alumni.
              </p>
              <p className="text-gray-700">
                Combining our values of data accessibility and meaningful networking, we created What's Bruin? - a platform that fights intimidation and saves time while creating valuable connections within the UCLA community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <CoffeeIcon className="text-ucla-gold w-6 h-6" />
                <h4 className="font-bold">Started in 2025</h4>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-ucla-gold w-6 h-6" />
                <h4 className="font-bold">UCLA Startup Award</h4>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-ucla-gold w-6 h-6" />
                <h4 className="font-bold">98% User Satisfaction</h4>
              </div>
              <div className="flex items-center gap-3">
                <BarChart className="text-ucla-gold w-6 h-6" />
                <h4 className="font-bold">5000+ Connections Made</h4>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            <div className="relative h-64">
              <img 
                src="https://images.pexels.com/photos/4778661/pexels-photo-4778661.jpeg" 
                alt="UCLA campus" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-64 transform translate-y-8">
              <img 
                src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg" 
                alt="Student coding" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-64 transform translate-y-4">
              <img 
                src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg" 
                alt="Coffee shop meeting" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative h-64 transform translate-y-12">
              <img 
                src="https://images.pexels.com/photos/7713175/pexels-photo-7713175.jpeg" 
                alt="Students collaborating" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24" data-aos="fade-up">
          <div className="bg-ucla-blue rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">What's Next for What's Bruin?</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our vision extends beyond just student networking. We're building a comprehensive UCLA hub that serves students, faculty, founders, and startups.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition duration-300">
                <h4 className="font-bold text-xl mb-3 text-ucla-gold">Startup Hub</h4>
                <p className="text-white/80">
                  Creating a thriving ecosystem for UCLA founders and startups to find resources, talent, and funding opportunities.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition duration-300">
                <h4 className="font-bold text-xl mb-3 text-ucla-gold">Marketing Services</h4>
                <p className="text-white/80">
                  Helping campus organizations and student-led initiatives create effective social media presence and marketing strategies.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition duration-300">
                <h4 className="font-bold text-xl mb-3 text-ucla-gold">Community Platform</h4>
                <p className="text-white/80">
                  Building a robust user base and community platform that connects all aspects of UCLA life in one accessible hub.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <button className="bg-white text-ucla-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                Join Our Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;