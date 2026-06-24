import { motion } from "framer-motion";

const timeline = [
  { year: "743", title: "The Foundation", desc: "King Fritz uses the Founding Titan to create the three walls: Maria, Rose, and Sina, wiping the memories of those inside." },
  { year: "845", title: "The Fall of Shiganshina", desc: "The Colossal Titan appears, breaching Wall Maria. Humanity is forced to retreat to Wall Rose, losing 20% of its population." },
  { year: "850", title: "Battle of Trost", desc: "The Colossal Titan attacks again. For the first time, humanity successfully defends a district using Eren's Titan form." },
  { year: "854", title: "The Rumbling", desc: "The walls are undone. Millions of Colossal Titans march to trample the world beyond the island." },
];

export const TimelineSection = () => {
    return (
        <section className="py-32 bg-[#050508] relative border-t border-neutral-900">
            <div className="max-w-5xl mx-auto px-6 relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <h2 className="text-4xl md:text-5xl font-heading text-white">Historical Archives</h2>
                    <p className="text-primary mt-3 font-mono text-sm tracking-widest uppercase">2000 Years of Conflict</p>
                </motion.div>

                {/* Center Line Desktop */}
                <div className="hidden md:block absolute left-1/2 top-48 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />
                {/* Left Line Mobile */}
                <div className="md:hidden absolute left-[39px] top-48 bottom-0 w-px bg-neutral-800" />

                <div className="space-y-24 md:space-y-32">
                    {timeline.map((item, idx) => (
                        <motion.div 
                            key={item.year}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row relative ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Dot Desktop */}
                            <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-10" />
                            {/* Dot Mobile */}
                            <div className="md:hidden absolute left-[31px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary mt-2 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-10" />

                            <div className="hidden md:block md:w-1/2" />
                            
                            <div className={`pl-20 md:pl-0 md:w-1/2 flex flex-col ${idx % 2 !== 0 ? 'md:pr-20 md:items-end md:text-right' : 'md:pl-20'}`}>
                                <span className="text-primary font-heading text-6xl mb-4 opacity-40 drop-shadow-md">{item.year}</span>
                                <h3 className="text-2xl font-heading text-white mb-3 tracking-wide">{item.title}</h3>
                                <p className="text-neutral-400 leading-relaxed bg-neutral-900/20 p-6 rounded-lg border border-neutral-800/50 backdrop-blur-sm shadow-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Fade out bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
};