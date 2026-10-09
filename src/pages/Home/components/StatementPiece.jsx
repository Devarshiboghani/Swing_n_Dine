import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StatementPiece = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-125 w-full overflow-hidden">
      <motion.div 
        style={{ y: yPos }}
        className="absolute inset-0 w-full h-[120%] top-[-10%]"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="The Statement Piece"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center text-center p-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/90 font-sans text-xs tracking-[0.3em] uppercase mb-6"
          >
            The Statement Piece
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight"
          >
            Designed to command attention. <br className="hidden md:block" />
            Made to become your favourite place.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-white text-brand-charcoal px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-brand-cream transition-colors">
              Explore the Design
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatementPiece;
