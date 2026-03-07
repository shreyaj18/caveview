import { Mail, Phone } from "lucide-react";

const BookNow = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
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

        /* Host photo spinning border */
        .host-photo-wrapper {
          position: relative;
          width: 140px;
          height: 140px;
          flex-shrink: 0;
        }
        .host-photo-wrapper::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(#f97316, #fb923c, #fbbf24, #f97316);
          animation: rotateBorder 4s linear infinite;
          z-index: 0;
        }
        .host-photo-wrapper::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: white;
          z-index: 1;
        }
        .host-photo {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          object-fit: cover;
          z-index: 2;
          width: calc(100% - 10px);
          height: calc(100% - 10px);
        }
        .host-photo-placeholder {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fed7aa 0%, #fdba74 50%, #fb923c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          font-size: 52px;
          color: white;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          letter-spacing: -1px;
        }

        .quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          line-height: 0;
          vertical-align: -1.5rem;
          color: #fed7aa;
          margin-right: 4px;
        }
      `}</style>

      <section id="book" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Book Your Stay
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              Ready to experience the charm of Badami? Get in touch with us to reserve your dates
              and create unforgettable memories.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <a
              href="mailto:caveviewhomestay@gmail.com"
              className="group bg-white p-8 rounded-2xl shadow-lg card-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-circle">
                <Mail className="text-orange-600" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3 text-gray-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                Email Us
              </h3>
              <p className="text-gray-600 text-center mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
                Drop us an email with your preferred dates and requirements
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold text-lg group-hover:underline" style={{ fontFamily: "'Lato', sans-serif" }}>
                  caveviewhomestay@gmail.com
                </span>
              </div>
            </a>

            <div
              className="group bg-white p-8 rounded-2xl shadow-lg card-hover animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-circle">
                <Phone className="text-orange-600" size={40} />
              </div>

              <h3
                className="font-serif text-2xl font-semibold mb-3 text-gray-900 text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Call Us
              </h3>

              <p
                className="text-gray-600 text-center mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Speak directly with our team for instant assistance
              </p>

              <div className="text-center mb-2">
                <a
                  href="tel:+919538215759"
                  className="text-orange-600 font-semibold text-md hover:underline"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Kiran: +91 95382 15759 (Host)
                </a>
              </div>

              <div className="text-center">
                <a
                  href="tel:+91886133174"
                  className="text-orange-600 font-semibold text-md hover:underline"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Shwetha: +91 8861 33174 (Co-Host)
                </a>
              </div>
            </div>
          </div>

          {/* Host Introduction Card */}
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up mb-8"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Decorative top bar */}


            <div className="p-8 md:p-10 flex flex-col items-center text-center">

              {/* Circular Host Photo - centered on top */}
              <div className="host-photo-wrapper mb-6">
                {/* Replace the src below with the actual host photo URL */}
                <img src="/kk.jpeg" alt="Kiran - Your Host" className="host-photo" />

              </div>

              {/* Host Bio Text - centered */}
              <div className="max-w-2xl">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-orange-500" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Meet Your Host
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Kiran
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem' }}>
                  <span className="quote-mark">"</span>
                  I'm an MBA graduate and the host of Cave View Homestay in Badami. Hosting guests has been
                  a truly fulfilling experience for me. I'm passionate about creating a clean, peaceful, and
                  family-friendly environment where visitors can relax and feel at home.
                </p>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem' }}>
                  I enjoy interacting with guests, sharing local insights, and helping them explore the beauty
                  and history of Badami. My goal is to make every stay comfortable and memorable by paying
                  attention to small details and ensuring everyone has a pleasant experience during their visit.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-3 mt-6 justify-center">
                  <div className="h-px w-12 bg-orange-300" />
                  <span className="text-orange-400 text-lg">✦</span>
                  <div className="h-px w-12 bg-orange-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-fade-in text-center" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-900 leading-relaxed mb-6" style={{ fontFamily: "'Lato', sans-serif" }}>
              We're here to help you plan your perfect getaway to Badami. Whether you have questions
              about our rooms, local attractions, or special requirements, we're just a call or email away.
            </p>
            <div className="inline-block shimmer text-white font-semibold py-3 px-8 rounded-full text-lg" style={{ fontFamily: "'Lato', sans-serif" }}>
              We look forward to hosting you!
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BookNow;