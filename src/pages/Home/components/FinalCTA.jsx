import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-brand-cream">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Swing"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-cream via-brand-cream/80 to-brand-cream/30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-8 leading-tight">
            Give Your Space <br className="hidden md:block" /> a Place to Pause.
          </h2>
          
          <p className="font-sans text-brand-charcoal/80 text-lg leading-relaxed mb-12 font-light">
            Explore swings crafted to bring comfort, character and timeless beauty into everyday living.
          </p>
          
          <button className="bg-brand-charcoal text-white px-10 py-5 font-sans text-sm tracking-widest uppercase hover:bg-brand-walnut transition-colors">
            Explore the Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
