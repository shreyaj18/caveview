
import { ChevronDown } from "lucide-react";
import heroImage from '../../public/heroimg.jpeg'

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen flex text-white items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/60" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
     
               
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
                    Caveview Homestay
                </h1>
               
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
                    Experience the warmth of heritage hospitality in the heart of Badami
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        className="bg-orange-600 px-5 py-2 hover:bg-orange-500/90  rounded-lg shadow-elevated transition-all duration-300 hover:scale-105"
                        onClick={() => scrollToSection('book')}
                    >
                       Book Now
                    </button>
                    <button
                        className="bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                        onClick={() => window.open("https://www.google.com/maps/place/Cave+view+Homestay/@15.9125399,75.6704941,17z/data=!3m1!4b1!4m9!3m8!1s0x3bb887000104e81f:0x4f657fd548dafbb5!5m2!4m1!1i2!8m2!3d15.9125399!4d75.6704941!16s%2Fg%2F11y4yk71y2?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D")}
                    >
                        Location
                    </button>
                </div>
            </div>

            <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 animate-bounce cursor-pointer"
                aria-label="Scroll to content"
            >
                <ChevronDown size={40} />
            </button>
        </section>
    );
};

export default Hero;