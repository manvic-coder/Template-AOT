import { motion } from "framer-motion";
import { useState } from "react";

const gallery = [
  { id: "attack", name: "Attack Titan", alias: "Shingeki no Kyojin", image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000", desc: "Always moves ahead, seeking freedom. Known for its incredible willpower and offensive capabilities." },
  { id: "colossal", name: "Colossal Titan", alias: "Cho Ogata Kyojin", image: "https://images.unsplash.com/photo-1542261777448-23d2a287091c?q=80&w=1000", desc: "The God of Destruction. Emits massive amounts of intense heat and steam, standing 60 meters tall." },
  { id: "armored", name: "Armored Titan", alias: "Yoroi no Kyojin", image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?q=80&w=1000", desc: "Covered in hardened, armor-like skin capable of breaching walls and withstanding cannon fire." },
  { id: "female", name: "Female Titan", alias: "Megata no Kyojin", image: "https://images.unsplash.com/photo-1520699049698-acd2fce18736?q=80&w=1000", desc: "High mobility and endurance, versatile in combat, with the ability to harden specific body parts." },
];

export const TitanGallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-background relative">
            <div className="max-w-[95vw] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:ml-8"
                >
                    <h2 className="text-4xl md:text-5xl font-heading text-white">The Nine Titans</h2>
                    <p className="text-neutral-500 mt-3 max-w-xl text-lg">Fragments of Ymir's soul, passed down through generations of Eldians. Each possesses unique abilities and devastating power.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row w-full h-[80vh] md:h-[600px] gap-3 md:gap-4">
                    {gallery.map((item, idx) => (
                        <motion.div 
                            key={item.id}
                            className={`relative rounded-xl overflow-hidden cursor-none ${hoveredIndex === idx ? 'md:flex-[3] flex-[2]' : 'flex-1'} transition-all duration-700 ease-spring border border-neutral-800/50`}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{ flex: hoveredIndex === idx ? 3 : 1 }}
                        >
                            {/* Background Image */}
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-all duration-700" 
                                style={{ 
                                    filter: hoveredIndex === idx ? 'grayscale(20%) brightness(0.7)' : 'grayscale(100%) brightness(0.3)',
                                    transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)'
                                }} 
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                <div className="flex flex-col">
                                    <span className="text-primary font-mono text-xs tracking-widest mb-2 opacity-80 uppercase">{item.alias}</span>
                                    <h3 className="text-2xl md:text-4xl font-heading text-white whitespace-nowrap mb-2">{item.name}</h3>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: hoveredIndex === idx ? 1 : 0, height: hoveredIndex === idx ? 'auto' : 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-md mt-2">{item.desc}</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};