import { Code, Users, BookOpen, MessagesSquare } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ucla-blue">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how What's Bruin? makes connecting with the UCLA community
            effortless and meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-20">
          <div data-aos="fade-right">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg"
                alt="Project collaboration"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-ucla-gold rounded-br-xl"></div>
              <div className="absolute top-0 left-0 bg-ucla-blue/80 text-white py-2 px-4 rounded-tl-xl rounded-br-xl font-medium">
                Project Builder
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-ucla-blue/10 rounded-full">
                <Code className="text-ucla-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Project Collaboration
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Find the perfect teammates for your next project based on
              complementary skills, interests, and availability. Our matching
              algorithm ensures you connect with other students who share your
              vision.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h4 className="font-bold mb-2 text-gray-800">How it works:</h4>
              <ol className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-ucla-blue flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
                    1
                  </span>
                  <span>
                    Create a project profile with your goals and required skills
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-ucla-blue flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
                    2
                  </span>
                  <span>Our AI matches you with potential collaborators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-ucla-blue flex items-center justify-center flex-shrink-0 text-white font-medium text-sm">
                    3
                  </span>
                  <span>Connect, collaborate, and create together</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-20">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-ucla-blue/10 rounded-full">
                <Users className="text-ucla-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Alumni Connections
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Connect with UCLA alumni who've walked your path and are willing
              to mentor and guide you. Filter by industry, graduation year, or
              interests to find the perfect mentor.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                  alt="Alumni profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Chen, '18</h4>
                  <p className="text-gray-500 text-sm">
                    Software Engineer at Google
                  </p>
                  <p className="text-gray-600 mt-2">
                    "I'm passionate about helping current CS students navigate
                    their career path. Happy to chat about internships and
                    interview prep!"
                  </p>
                  <button className="mt-3 text-ucla-blue font-medium text-sm hover:underline">
                    Request Connection
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg"
                alt="Alumni networking"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-ucla-gold rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 bg-ucla-blue/80 text-white py-2 px-4 rounded-tr-xl rounded-bl-xl font-medium">
                Alumni Network
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div data-aos="fade-right">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg"
                alt="Professor outreach"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-ucla-gold rounded-br-xl"></div>
              <div className="absolute top-0 left-0 bg-ucla-blue/80 text-white py-2 px-4 rounded-tl-xl rounded-br-xl font-medium">
                Professor Connect
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-ucla-blue/10 rounded-full">
                <BookOpen className="text-ucla-blue w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Professor Outreach
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Our NLP-powered email assistant helps you craft personalized,
              effective messages to professors for research opportunities,
              office hours, or mentorship.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Email Assistant Preview:
                  </h4>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <p className="text-gray-700 text-sm">
                      Dear Professor Johnson,
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      I'm a junior majoring in Environmental Science, and your
                      research on urban sustainability aligns perfectly with my
                      interest in green infrastructure development...
                    </p>
                    <div className="flex justify-end mt-3">
                      <button className="bg-ucla-blue text-white text-xs py-1 px-3 rounded hover:bg-blue-700">
                        Customize & Send
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm italic">
                  Our system analyzes professor research interests and
                  customizes outreach based on your academic background.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-ucla-blue mb-6">
            And Much More...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <MessagesSquare className="w-12 h-12 text-ucla-gold mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">
                Smart Cold Emailing
              </h4>
              <p className="text-gray-600 text-sm">
                Templates and AI assistance for reaching out to anyone in the
                UCLA community.
              </p>
            </div>

            <div className="card p-6">
              <Users className="w-12 h-12 text-ucla-gold mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Study Groups</h4>
              <p className="text-gray-600 text-sm">
                Find or create study groups for your courses with students who
                share your learning style.
              </p>
            </div>

            <div className="card p-6">
              <Code className="w-12 h-12 text-ucla-gold mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Startup Hub</h4>
              <p className="text-gray-600 text-sm">
                Connect with fellow entrepreneurs and find co-founders for your
                next venture.
              </p>
            </div>
          </div>

          <button className="btn-primary mt-12">Explore All Features</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
