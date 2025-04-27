const Testimonials = () => {
  return (
    <section className="section-padding coffee-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-espresso">What Bruins Are Saying</h2>
          <p className="text-lg text-coffee-dark max-w-3xl mx-auto">
            Hear from students who've transformed their UCLA experience with What's Bruin?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                alt="Student testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800">Sophia Martinez</h4>
                <p className="text-gray-500 text-sm">Computer Science, Class of 2026</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "What's Bruin? helped me find an amazing research position with a professor whose work I admire. The email templates were a game-changer - I got a response within hours!"
            </p>
            <div className="flex mt-4">
              <span className="text-ucla-gold">★★★★★</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                alt="Student testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800">James Wilson</h4>
                <p className="text-gray-500 text-sm">Business Economics, Class of 2025</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I connected with an alumni who works at my dream company. She's now mentoring me and even helped me secure an internship for next summer. This platform is invaluable!"
            </p>
            <div className="flex mt-4">
              <span className="text-ucla-gold">★★★★★</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                alt="Student testimonial" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-800">Aisha Johnson</h4>
                <p className="text-gray-500 text-sm">Environmental Science, Class of 2024</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I found the perfect team for my senior project through What's Bruin? We all have complementary skills and similar work ethics, which has made our collaboration incredibly productive."
            </p>
            <div className="flex mt-4">
              <span className="text-ucla-gold">★★★★★</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-2xl text-espresso font-serif italic mb-6">
              "What's Bruin? has transformed how students network and collaborate at UCLA. I've seen a significant increase in thoughtful outreach from students and more meaningful connections being formed."
            </p>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg" 
                alt="Professor testimonial" 
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-800">Dr. Robert Chen</h4>
                <p className="text-gray-600">Professor of Computer Science, UCLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;