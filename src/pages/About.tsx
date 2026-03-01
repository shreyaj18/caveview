import { Home, Heart, MapPin } from "lucide-react";

const About = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .icon-circle {
          transition: all 0.4s ease;
        }

        .card-hover:hover .icon-circle {
          transform: rotate(360deg) scale(1.1);
          background: linear-gradient(135deg, #fb923c 0%, #ea580c 100%);
        }

        .card-hover:hover .icon-circle svg {
          color: white;
        }
      `}</style>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome Home
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nestled in the historic town of Badami, Caveview Homestay offers an authentic experience 
              where ancient heritage meets modern comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg bg-white shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 icon-circle">
                <Home className="text-orange-600" size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">Authentic Stay</h3>
              <p className="text-gray-600">
                Experience traditional hospitality in a home that blends heritage charm with modern amenities.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-white shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 icon-circle">
                <Heart className="text-orange-600" size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">Warm Hospitality</h3>
              <p className="text-gray-600">
                Our family welcomes you with open arms, ensuring your stay is comfortable and memorable.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-white shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 icon-circle">
                <MapPin className="text-orange-600" size={32} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">Prime Location</h3>
              <p className="text-gray-600">
                Minutes away from the famous cave temples and the breathtaking Agastya Lake.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              Badami, the ancient capital of the Chalukya dynasty, is renowned for its stunning rock-cut cave temples 
              and dramatic red sandstone cliffs. Our homestay provides the perfect base to explore these architectural 
              marvels while enjoying the comfort of a home away from home.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              Wake up to panoramic views of the hills, savor home-cooked traditional meals, and immerse yourself 
              in the rich cultural heritage of this UNESCO World Heritage site nominee.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;