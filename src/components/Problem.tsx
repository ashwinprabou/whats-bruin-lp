import { Clock, Users, BookX } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ucla-blue">
            The Challenges UCLA Students Face
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In today's fast-paced academic environment, UCLA students encounter
            several obstacles when trying to build meaningful connections and
            access valuable resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon">
              <Clock className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Time Consumption
            </h3>
            <p className="text-gray-600">
              Finding the right connections and opportunities requires hours of
              searching through fragmented resources and platforms, taking
              valuable time away from studies.
            </p>
          </div>

          <div className="card p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon">
              <Users className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Network Intimidation
            </h3>
            <p className="text-gray-600">
              Approaching professors, alumni, and even peers can be
              intimidating, creating barriers to forming valuable connections
              that could shape your academic journey.
            </p>
          </div>

          <div className="card p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon">
              <BookX className="w-full h-full" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Information Overload
            </h3>
            <p className="text-gray-600">
              With an abundance of data and opportunities flying around, it's
              challenging to filter what's relevant to your specific academic
              and career goals.
            </p>
          </div>
        </div>

        <div
          className="mt-16 coffee-gradient rounded-2xl p-8 md:p-12"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-espresso">
                The Hidden Cost
              </h3>
              <p className="text-coffee-espresso text-lg mb-6">
                These challenges don't just affect your college experience—they
                can impact your future career trajectory. Many opportunities are
                missed simply because students didn't have the right connections
                at the right time.
              </p>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
                <p className="italic text-coffee-dark font-medium">
                  "I spent my first two years at UCLA not knowing how to
                  approach professors for research opportunities. By the time I
                  figured it out, many positions were already filled."
                </p>
                <p className="text-right mt-2 text-espresso font-medium">
                  — UCLA Junior
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg"
                alt="Stressed student with books"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-ucla-blue/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
