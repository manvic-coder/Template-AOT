import { motion } from "framer-motion";

const titansScaleOptions = [
  { name: "Human", height: 1.8, color: "bg-neutral-500" },
  { name: "Cart", height: 4, color: "bg-neutral-700" },
  { name: "Jaw", height: 5, color: "bg-neutral-600" },
  { name: "Female", height: 14, color: "bg-indigo-900/80" },
  { name: "Attack", height: 15, color: "bg-emerald-900/80" },
  { name: "Armored", height: 15, color: "bg-amber-900/80" },
  { name: "Beast", height: 17, color: "bg-stone-700/80" },
  { name: "Colossal", height: 60, color: "bg-primary" },
];

export const TitansScale = () => {
    return (
        <section className="py-32 bg-[#020205] border-y border-neutral-900 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="max-w-[90vw] mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-heading text-white">Scale of Despair</h2>
                    <p className="text-primary mt-2 font-mono text-sm uppercase tracking-widest">Classified Military Height Records</p>
                </motion.div>

                <div className="flex items-end justify-between h-[500px] md:h-[700px] border-l border-b border-neutral-800 pb-0 pl-4 relative">
                    {/* Measurement lines */}
                    {[10, 20, 30, 40, 50, 60].map(mark => (
                        <div key={mark} className="absolute left-0 w-full border-t border-neutral-800/30 flex items-start z-0" style={{ bottom: `${(mark/60)*100}%` }}>
                            <span className="text-[10px] font-mono text-neutral-600 -translate-x-full pr-2 -translate-y-1/2">{mark}m</span>
                        </div>
                    ))}

                    <div className="flex items-end justify-around w-full h-full relative z-10 px-2 md:px-12 gap-2 md:gap-4">
                        {titansScaleOptions.map((titan, i) => (
                            <div key={titan.name} className="flex flex-col items-center group w-full relative h-full justify-end">
                                {/* Hover Tooltip */}
                                <div className="absolute -top-12 md:-top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 border border-neutral-700 text-white text-[10px] md:text-xs py-1.5 px-3 rounded whitespace-nowrap z-20 pointer-events-none shadow-xl transform -translate-y-2 group-hover:translate-y-0">
                                    {titan.name} {titan.name !== 'Human' && 'Titan'}
                                    <div className="text-primary font-mono mt-1 text-center">{titan.height}m</div>
                                </div>
                                
                                {/* Silhouette Pillar */}
                                <motion.div 
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${Math.max((titan.height / 60) * 100, 2)}%` }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1.5, delay: i * 0.1, type: "spring", bounce: 0.2 }}
                                    className={`w-full max-w-[30px] md:max-w-[70px] ${titan.color} rounded-t-sm relative overflow-hidden flex items-end justify-center pb-3 border-x border-t border-white/10`}
                                    style={{ 
                                        boxShadow: titan.name === 'Colossal' ? '0 0 50px rgba(220,38,38,0.15)' : 'none'
                                    }}
                                >
                                    {/* Inner gradient/glow */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay" />
                                    
                                    {/* Name written vertically */}
                                    <span className="text-[9px] md:text-xs font-heading tracking-widest text-white/70 mix-blend-screen whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                        {titan.name.toUpperCase()}
                                    </span>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};