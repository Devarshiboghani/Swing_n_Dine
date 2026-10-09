import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-svh min-h-150 w-full flex items-center justify-center overflow-hidden bg-brand-ivory pt-24 md:pt-32">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Swing in Modern Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white font-sans text-xs md:text-sm tracking-[0.2em] uppercase mb-6"
        >
          Crafted for the art of living
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-serif mb-6 max-w-4xl leading-tight"
        >
          Where Comfort <br /> Meets Craftsmanship
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 font-sans text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light"
        >
          Discover beautifully crafted swings designed to bring timeless elegance, comfort and character into the spaces you call home.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="bg-white text-brand-charcoal px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-brand-ivory transition-colors">
            Explore Swings
          </button>
          <button className="border border-white/50 text-white px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
            Discover Our Craft
          </button>
        </motion.div>
      </div>

      {/* Side Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <p className="text-white/60 font-sans text-xs tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Designed to swing with life
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
      >
        <div className="w-px h-12 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="w-full h-1/2 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
