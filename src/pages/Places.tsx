import FlipCard from "../componenets/FlipCard";

const Places = () => {
    const cards = [
        {
            image: "/cave_temple.jpg",
            heading: "Cave Temple",
            subheading: "1.5km Away",
            details: 'These remarkable rock-cut temples, originating in the 6th century, are adorned with detailed carvings and listed as a UNESCO World Heritage Site. They provide a fascinating window into India\'s ancient architecture and spiritual traditions.'
        },
        {
            image: "/bhutnath_temple.jpg",
            heading: "Bhutnath Temple",
            subheading: "1.5kms Away",
            details: "Situated along the shores of Agastya Lake, this temple is devoted to Lord Shiva and showcases exquisite carvings and architecture characteristic of the Chalukyan style."
        },
        {
            image: "/temple.jpg",
            heading: "Banashankri Temple",
            subheading: "7km Away",
            details: "Dedicated to the goddess Banashankari, this historic temple is admired for its elegant architecture and serene ambiance, making it an ideal destination for those on a spiritual journey."
        },
        {
            image: "/badami_fort.webp",
            heading: "Badami Fort",
            subheading: "1.5km Away",
            details: "Set on a hilltop, this fort offers sweeping views of the town and its scenic surroundings. The climb is well worth it, leading to the discovery of fascinating ancient structures along the way."
        },
        {
            image: "/aihole.jpg",
            heading: "Aihole",
            subheading: "36km Away",
            details: "Located just a short drive from Badami, Aihole is celebrated as the cradle of Indian temple architecture, home to more than a hundred ancient temples waiting to be explored."
        },
        {
            image: "/maha.webp",
            heading: "Shri Mahakuteshwara Temple",
            subheading: "15km Away",
            details: "Dakshina Kaashi Shri Mahakuteshwara Temple, located in the serene village of Mahakuta, is one of the most sacred and architecturally rich temple complexes from the Early Chalukya period (6th–7th century CE)."
        },
           {
            image: "/patadkallu.jpeg",
            heading: "Patadkallu",
            subheading: "23km Away",
            details: "Pattadakal, a 7th and 8th-century UNESCO World Heritage Site in Karnataka, India, is a renowned temple complex showcasing a unique blend of North Indian (Nagara) and South Indian (Dravidian) architectural styles."
        },
           {
            image: "/hampi.jpg",
            heading: "Hampi",
            subheading: "125km Away",
            details: "Hampi is a historical city located within Karnataka in India. The city was known to be the seat of the Vijayanagara empire which flourished here from the 14th century."
        }
    ];

    return (
        <div className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-amber-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mx-4 md:mx-8 justify-items-center">
                {cards.map((card, index) => (
                    <FlipCard
                        key={index}
                        image={card.image}
                        heading={card.heading}
                        subheading={card.subheading}
                        details={card.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default Places;