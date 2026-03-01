import FlipCard from "../componenets/FlipCard";

const Places = () => {
    const cards = [
        {
            image: "/cave_temple.jpg",
            heading: "Cave Temple",
            subheading: "1km Away",
            details: 'These remarkable rock-cut temples, originating in the 6th century, are adorned with detailed carvings and listed as a UNESCO World Heritage Site. They provide a fascinating window into India\'s ancient architecture and spiritual traditions.'
        },
        {
            image: "/bhutnath_temple.jpg",
            heading: "Bhutnath Temple",
            subheading: "1.5kms Away",
            details: "Situated along the shores of Agastya Lake, this temple is devoted to Lord Shiva and showcases exquisite carvings and architecture characteristic of the Chalukyan style."
        },
        {
            image: "/banashakri_temple.jpeg",
            heading: "Banashankri Temple",
            subheading: "4km Away",
            details: "Dedicated to the goddess Banashankari, this historic temple is admired for its elegant architecture and serene ambiance, making it an ideal destination for those on a spiritual journey."
        },
        {
            image: "/badami_fort.webp",
            heading: "Badami Fort",
            subheading: "3km Away",
            details: "Set on a hilltop, this fort offers sweeping views of the town and its scenic surroundings. The climb is well worth it, leading to the discovery of fascinating ancient structures along the way."
        },
        {
            image: "/aihole.jpg",
            heading: "Aihole",
            subheading: "6km Away",
            details: "Located just a short drive from Badami, Aihole is celebrated as the cradle of Indian temple architecture, home to more than a hundred ancient temples waiting to be explored."
        },
        {
            image: "/agastya_lake.jpeg",
            heading: "Agastya Lake",
            subheading: "5km Away",
            details: "Resting at the base of the Badami cliffs, this scenic lake is perfect for peaceful strolls and provides a tranquil setting to unwind and capture memorable photos."
        }
    ];

    return (
        <div className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-amber-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-4 md:mx-8 justify-items-center">
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