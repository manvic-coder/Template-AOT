import { useState } from "react";
import { Volume2, VolumeX, Disc } from "lucide-react";
import { motion } from "framer-motion";

export const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="fixed bottom-8 left-8 z-[9990] flex items-center gap-4">
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-700 backdrop-blur-md flex items-center justify-center text-white hover:bg-neutral-800 hover:border-primary/50 transition-all group scale-100 active:scale-95"
            >
                {isPlaying ? <Volume2 className="w-5 h-5 group-hover:text-primary transition-colors" /> : <VolumeX className="w-5 h-5 text-neutral-500" />}
            </button>
            <div className="flex flex-col">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Ambient OST</span>
                <div className="flex items-center gap-2">
                    <motion.div 
                        animate={{ rotate: isPlaying ? 360 : 0 }} 
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    >
                        <Disc className={`w-3 h-3 ${isPlaying ? 'text-primary' : 'text-neutral-600'}`} />
                    </motion.div>
                    <span className={`text-xs font-medium ${isPlaying ? 'text-white' : 'text-neutral-600'}`}>To You, 2000 Years</span>
                </div>
            </div>
        </div>
    );
};