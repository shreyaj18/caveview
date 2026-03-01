import { Mail, Phone } from "lucide-react";

const BookNow = () => {
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
            transform: translateY(0);
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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
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

        .shimmer {
          background: linear-gradient(to right, #f97316 0%, #fb923c 50%, #f97316 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <section id="book" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Stay
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to experience the charm of Badami? Get in touch with us to reserve your dates 
              and create unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="mailto:caveviewhomestay@gmail.com" 
              className="group bg-white p-8 rounded-2xl shadow-lg card-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-circle">
                <Mail className="text-orange-600" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-gray-900 text-center">
                Email Us
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Drop us an email with your preferred dates and requirements
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold text-lg group-hover:underline">
                  caveviewhomestay@gmail.com
                </span>
              </div>
            </a>

            <a 
              href="tel:+919876543210" 
              className="group bg-white p-8 rounded-2xl shadow-lg card-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-circle">
                <Phone className="text-orange-600" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-gray-900 text-center">
                Call Us
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Speak directly with our team for instant assistance
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold text-lg group-hover:underline">
                  +91 95382 15759
                </span>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in text-center" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              We're here to help you plan your perfect getaway to Badami. Whether you have questions 
              about our rooms, local attractions, or special requirements, we're just a call or email away.
            </p>
            <div className="inline-block shimmer text-white font-semibold py-3 px-8 rounded-full text-lg">
              We look forward to hosting you!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNow;