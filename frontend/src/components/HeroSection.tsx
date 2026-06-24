import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effects for different layers
    const ySky = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yTitan = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yWall = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen overflow-hidden bg-black flex items-center justify-center border-b border-neutral-900">
            {/* Sky Background */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 z-0">
                 <img 
                    src="https://images.unsplash.com/photo-1534214488353-294793739796?q=80&w=2000" 
                    alt="Stormy Sky" 
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity brightness-50" 
                />
            </motion.div>
            
            {/* Colossal Titan (Abstract representation via shapes and smoke) */}
            <motion.div style={{ y: yTitan }} className="absolute inset-0 z-10 flex justify-center items-end pb-[20vh] opacity-90">
                {/* Glowing red aura */}
                <div className="w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-red-900/30 rounded-t-full blur-[100px]" />
                {/* Smoke/Embers texture masked as a titan silhouette */}
                <img 
                    src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1000" 
                    alt="Embers" 
                    className="absolute w-[60vw] max-w-[800px] h-auto bottom-[10vh] opacity-60 mix-blend-screen scale-y-150" 
                    style={{ maskImage: 'linear-gradient(to top, transparent, black 80%)', WebkitMaskImage: 'linear-gradient(to top, transparent, black 80%)' }} 
                />
            </motion.div>

            {/* Title Layer */}
            <motion.div style={{ y: yText, opacity: opacityText }} className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-[-5vh]">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-primary font-heading tracking-[0.3em] text-xs md:text-xl mb-6 drop-shadow-lg"
                >
                    TO YOU, 2000 YEARS FROM NOW
                </motion.h2>
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-[10rem] leading-none font-heading font-black text-white uppercase tracking-tighter drop-shadow-2xl"
                >
                    Beyond <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">The Walls</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-8 text-neutral-400 font-sans max-w-lg mx-auto text-base md:text-lg"
                >
                    Explore the dark fantasy world of Titans, humanity's last bastion, and the grim truth of the world.
                </motion.p>
            </motion.div>

            {/* Wall Foreground */}
            <motion.div style={{ y: yWall }} className="absolute bottom-[-10vh] left-[-5vw] right-[-5vw] h-[40vh] z-30">
                <img 
                    src="https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=2000" 
                    alt="Wall Pattern" 
                    className="w-full h-full object-cover grayscale brightness-[0.2] contrast-150" 
                />
                {/* Fade into the next section */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-600/20 to-transparent" />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 z-40 flex flex-col items-center gap-2 text-neutral-500"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Initiate Expedition</span>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                    <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
            </motion.div>
        </div>
    );
};