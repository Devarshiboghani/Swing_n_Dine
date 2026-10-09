import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative overflow-hidden aspect-4/5 md:aspect-square lg:aspect-4/5">
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Swing" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -top-32 lg:-top-48 right-0 text-[180px] lg:text-[240px] font-serif text-brand-walnut/5 select-none leading-none">
              01
            </div>
            
            <div className="relative z-10 max-w-lg">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-terracotta mb-6">
                The Zula Experience
              </p>
              
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
                More Than a Swing. <br /> A Space to Belong.
              </h2>
              
              <p className="font-sans text-brand-charcoal/70 text-lg leading-relaxed mb-10 font-light">
                We believe a swing is more than furniture. It is a place to pause, connect, unwind and create everyday moments worth remembering. Handcrafted with intention, designed for the modern home.
              </p>
              
              <a href="#" className="inline-flex items-center text-brand-charcoal font-sans text-sm tracking-widest uppercase hover:text-brand-terracotta transition-colors group">
                Discover Our Story 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
