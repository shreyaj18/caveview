import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Jain",
      rating: 5,
      description: "The stay was comfortable, peaceful and serene Enjoyed the lush green surroundings and the exotic sunrise . Very safe place and friendly owners. Would highly recommend for ladies and girls who plan their group travels. Excellent for family stay too"
    },
    {
      name: "Sagar",
      rating: 5,
      description: "Excellent location. Very neat and clean rooms. The property is located near the Badami caves. Owner Mr. Kiran was extremely helpful, he helped us arrange auto for local site seeing and guided us throughout the stay for food, transfers etc. Moreover, he was reachable throughout in spite of his job commitments. I'm really thankful to him."
    },
    {
      name: "Neeraja",
      rating: 5,
      description: `The location is excellent, conveniently close to major attractions, making it perfect for sightseeing or exploring nearby areas. The hospitality provided by the hosts is exceptional, with attentive and friendly service that truly enhances the stay. We loved every moment here and would highly recommend it to anyone looking for a memorable and comfortable stay. Thank you for the wonderful experience`
    },
    {
      name: "Mikkel",
      rating: 5,
      description: "An authentic Indian hospitality experience! The hosts shared fascinating stories about Badami's history. The view from the terrace is stunning. Exceeded all expectations."
    },
    {
      name: "Sandra",
      rating: 5,
      description: "The attentive and energetic welcome, the tranquility of the place, and the accommodation is very good."
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isPaused = false;

    const autoScroll = setInterval(() => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    }, 30);

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(autoScroll);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .review-card {
          transition: all 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(234, 88, 12, 0.2);
        }

        .scroll-container {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          gap: 24px;
          padding: 20px 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .star-icon {
          transition: all 0.2s ease;
        }

        .review-card:hover .star-icon {
          transform: scale(1.2) rotate(15deg);
        }
      `}</style>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Guest Reviews
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our guests have to say about their memorable stay at Caveview Homestay
            </p>
          </div>

          <div ref={scrollRef} className="scroll-container">
            {/* Duplicate reviews for infinite scroll effect */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="review-card bg-white rounded-2xl p-8 shadow-lg min-w-[380px] max-w-[380px] flex-shrink-0"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl text-gray-900">{review.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`star-icon ${
                          i < review.rating
                            ? "fill-orange-500 text-orange-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Reviews;