import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        const update = (e: MouseEvent) => {
            if (hidden) setHidden(false);
            setPos({ x: e.clientX, y: e.clientY });
            
            const target = e.target as HTMLElement;
            // Check if hovered element is interactive
            const computed = window.getComputedStyle(target);
            setIsPointer(
                computed.cursor === 'pointer' || 
                target.tagName.toLowerCase() === 'button' || 
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') !== null ||
                target.closest('a') !== null
            );
        };
        
        const hide = () => setHidden(true);

        window.addEventListener('mousemove', update);
        window.addEventListener('mouseleave', hide);
        
        return () => {
            window.removeEventListener('mousemove', update);
            window.removeEventListener('mouseleave', hide);
        };
    }, [hidden]);

    if (hidden) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Inner Dot */}
            <motion.div 
                className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full mix-blend-screen"
                animate={{ x: pos.x - 3, y: pos.y - 3, scale: isPointer ? 0 : 1 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Outer Ring / Crosshair */}
            <motion.div 
                className="absolute top-0 left-0 w-12 h-12 border-[1.5px] border-primary/50 rounded-full flex items-center justify-center"
                animate={{ 
                    x: pos.x - 24, 
                    y: pos.y - 24, 
                    scale: isPointer ? 1.2 : 1,
                    rotate: isPointer ? 90 : 0,
                    borderColor: isPointer ? 'rgba(220, 38, 38, 0.9)' : 'rgba(220, 38, 38, 0.4)'
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            >
                {/* Crosshair ticks */}
                <div className="absolute top-0 w-px h-2 bg-primary/60" />
                <div className="absolute bottom-0 w-px h-2 bg-primary/60" />
                <div className="absolute left-0 w-2 h-px bg-primary/60" />
                <div className="absolute right-0 w-2 h-px bg-primary/60" />
                
                {/* Center dot when hovering */}
                <motion.div 
                    className="w-1 h-1 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isPointer ? 1 : 0 }}
                />
            </motion.div>
        </div>
    );
};