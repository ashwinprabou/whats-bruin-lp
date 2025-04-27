import { Coffee, Sparkles, MessageSquare } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ucla-blue">
            Our Solution: What's Bruin?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've created a platform that bridges the gap between students,
            professors, and alumni, making networking accessible and meaningful
            for everyone in the UCLA community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-ucla-blue mb-6">
              Brewing Connections, Not Just Coffee
            </h3>
            <div className="space-y-6 text-content">
              <p className="text-gray-700">
                What's Bruin? uses natural language processing to create
                targeted, customized networking opportunities that align with
                your academic interests, career goals, and personal values.
              </p>
              <p className="text-gray-700">
                Our platform transforms cold emails into warm introductions,
                project searches into meaningful collaborations, and alumni
                networking into genuine mentorship.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Coffee className="text-ucla-gold" />
                    <h4 className="font-bold">Accessible Data</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Making campus information and opportunities available to
                    everyone who needs it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-ucla-gold" />
                    <h4 className="font-bold">Meaningful Network</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Creating connections that go beyond superficial
                    interactions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="text-ucla-gold" />
                    <h4 className="font-bold">NLP-Powered Communications</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our platform adapts to your communication style and helps
                    craft messages that resonate with professors and alumni.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            <img
              src="/community.png"
              alt="Students collaborating"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ucla-gold/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ucla-blue/70 backdrop-blur-sm text-white py-3 px-6 rounded-lg shadow-lg font-medium">
              Connecting Bruins Since 2025
            </div>
          </div>
        </div>

        <div
          className="mt-20 bg-ucla-blue rounded-2xl p-8 md:p-12 text-white"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How We Transform UCLA Networking
              </h3>
              <p className="text-lg opacity-90 mb-6">
                What's Bruin? isn't just another campus app—it's a revolution in
                how UCLA students connect with their community and build their
                future.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-ucla-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ucla-blue font-bold text-sm">✓</span>
                  </div>
                  <span>
                    Transform cold outreach to professors into personalized
                    introductions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-ucla-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ucla-blue font-bold text-sm">✓</span>
                  </div>
                  <span>
                    Connect with alumni based on shared interests and career
                    paths
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-ucla-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ucla-blue font-bold text-sm">✓</span>
                  </div>
                  <span>
                    Find project collaborators with complementary skills and
                    interests
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-ucla-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ucla-blue font-bold text-sm">✓</span>
                  </div>
                  <span>
                    Discover opportunities tailored to your academic and career
                    goals
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-center">
                <h4 className="text-ucla-blue font-bold text-xl mb-4">
                  Ready to start brewing connections?
                </h4>
                <p className="text-gray-600 mb-6">
                  Join What's Bruin? today and transform how you network at
                  UCLA.
                </p>
                <button
                  className="bg-ucla-gold text-ucla-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 mt-auto"
                  onClick={() =>
                    (window.location.href = "https://github.com/anshulkc/mav")
                  }
                >
                  Check out the GitHub!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
