import { motion } from "framer-motion";

const walls = [
  { name: "Maria", radius: "480km", pop: "High", desc: "The outermost wall, breached in year 845.", color: "from-red-900/20" },
  { name: "Rose", radius: "380km", pop: "Medium", desc: "The middle wall, protecting the majority of resources.", color: "from-amber-900/20" },
  { name: "Sina", radius: "250km", pop: "Low", desc: "The innermost wall, guarding the King and nobles.", color: "from-neutral-100/10" }
];

export const WallsSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-background relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-heading text-white mb-4">The Three Walls</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Towering 50 meters high, these concentric monoliths are humanity's shield against the terror outside.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 items-end justify-center h-auto md:h-[500px]">
                    {walls.map((wall, i) => (
                        <motion.div 
                            key={wall.name}
                            initial={{ opacity: 0, height: "0%" }}
                            whileInView={{ opacity: 1, height: "100%" }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex-1 w-full md:w-auto bg-neutral-900 border-x border-t border-neutral-800 rounded-t-xl overflow-hidden group min-h-[300px]"
                        >
                            {/* Stone Texture Background */}
                            <div className="absolute inset-0 opacity-[0.15] group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay">
                                <img 
                                    src="https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=800" 
                                    className="w-full h-full object-cover grayscale" 
                                    alt="stone texture" 
                                />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${wall.color} to-transparent opacity-50`} />

                            {/* Content */}
                            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-background via-background/90 to-transparent transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-heading text-white mb-4 drop-shadow-md">Wall {wall.name}</h3>
                                <div className="space-y-3 text-sm text-neutral-300 opacity-60 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                                        <span className="text-neutral-500">Radius</span>
                                        <span className="font-mono text-primary">{wall.radius}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                                        <span className="text-neutral-500">Population</span>
                                        <span className="font-mono">{wall.pop}</span>
                                    </div>
                                    <p className="pt-2 text-xs text-neutral-400 font-sans leading-relaxed">{wall.desc}</p>
                                </div>
                            </div>
                            
                            {/* Height Marker Line */}
                            <div className="absolute top-8 right-4 w-px h-[calc(100%-10rem)] bg-neutral-800/50">
                                <div className="absolute top-0 right-[-4px] w-2 h-px bg-neutral-600" />
                                <span className="absolute -top-6 -right-2 text-[10px] font-mono text-neutral-500">50m</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};