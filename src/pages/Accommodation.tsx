import { Wifi, Wind, Users, Car, Coffee, Tv, } from "lucide-react";
import { useState, useEffect } from "react";

const Accommodation = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Sample images - replace with actual homestay images
  const images = [
    "/Room1.webp",
    "/Room2.webp",
    "/Hall.webp",
    "/Kitchen.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const amenities = [
    { icon: <Users size={24} />, label: "2 BHK", desc: "Spacious rooms" },
    { icon: <Wifi size={24} />, label: "Free WiFi", desc: "High-speed internet" },
    { icon: <Wind size={24} />, label: "Air Conditioning", desc: "All rooms" },
    { icon: <Car size={24} />, label: "Free Parking", desc: "Secure parking" },
    { icon: <Coffee size={24} />, label: "Complimentary Tea", desc: "Morning & evening" },
    { icon: <Tv size={24} />, label: "Entertainment", desc: "TV in living room" },
  ];

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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .image-slider {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }

        .image-slide {
          animation: slideIn 0.5s ease-out;
        }

        .amenity-card {
          transition: all 0.3s ease;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #fff5e6 0%, #ffe4cc 100%);
        }

        .amenity-icon {
          transition: all 0.3s ease;
        }

        .dot {
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 2rem;
          background: #ea580c;
        }

        .room-stat {
          transition: all 0.3s ease;
        }

        .room-stat:hover {
          transform: scale(1.1);
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .accommodation-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .accommodation-title {
            font-size: 2rem;
          }

          .accommodation-subtitle {
            font-size: 1rem;
          }

          .amenity-card {
            padding: 0.75rem;
          }

          .amenity-label {
            font-size: 0.8rem;
          }

          .amenity-desc {
            font-size: 0.7rem;
          }

          .amenity-icon svg {
            width: 20px;
            height: 20px;
          }

          .banner-title {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
          }

          .room-stat-number {
            font-size: 2.5rem;
          }

          .room-stat-label {
            font-size: 0.9rem;
          }

          .room-stat-sublabel {
            font-size: 0.7rem;
          }

          .stats-grid {
            gap: 1rem;
          }

          .banner-padding {
            padding: 1.25rem 1rem;
          }

          .image-slider-card {
            padding: 1rem;
          }
        }
      `}</style>

      <section id="accommodation" className="accommodation-section py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="animate-fade-in-up text-center mb-12">
            <h2 className="accommodation-title font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Accommodation
            </h2>
            <p className="accommodation-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
              Comfortable, spacious, and equipped with everything you need for a memorable stay
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Image Slider */}
            <div className="image-slider-card bg-white rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="image-slider aspect-video mb-4">
                <img 
                  src={images[currentImage]} 
                  alt="Homestay accommodation" 
                  className="w-full h-full object-cover image-slide rounded-lg"
                  key={currentImage}
                />
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`dot h-2 rounded-full transition-all ${
                      index === currentImage ? 'w-8 bg-orange-600 active' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {amenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="amenity-card bg-white rounded-xl p-3 shadow-md animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <div className="amenity-icon text-orange-600 mb-2 sm:mb-3">
                    {amenity.icon}
                  </div>
                  <h4 className="amenity-label font-semibold text-gray-900 mb-1 text-sm sm:text-base">{amenity.label}</h4>
                  <p className="amenity-desc text-xs sm:text-sm text-gray-600">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Room Details Banner */}
          <div className="banner-padding bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-3 md:p-4 text-white shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="banner-title font-serif text-3xl font-bold mb-8 text-center">House Configuration</h3>
            <div className="stats-grid grid grid-cols-3 md:grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="room-stat">
                <div className="room-stat-number text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">2</div>
                <div className="room-stat-label text-orange-100 text-base sm:text-lg">Bedrooms</div>
                <div className="room-stat-sublabel text-xs sm:text-sm text-orange-200 mt-1">Queen-sized beds</div>
              </div>
              <div className="room-stat">
                <div className="room-stat-number text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">4-6</div>
                <div className="room-stat-label text-orange-100 text-base sm:text-lg">Guests</div>
                <div className="room-stat-sublabel text-xs sm:text-sm text-orange-200 mt-1">Comfortable capacity</div>
              </div>
              <div className="room-stat">
                <div className="room-stat-number text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">1</div>
                <div className="room-stat-label text-orange-100 text-base sm:text-lg">Living Hall</div>
                <div className="room-stat-sublabel text-xs sm:text-sm text-orange-200 mt-1">Shared common area</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;