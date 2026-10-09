import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const LifestyleSection = () => {
  const spaces = [
    {
      id: 1,
      title: "Living Room",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Balcony",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Garden & Outdoor",
      image: "https://images.unsplash.com/photo-1581404172453-2ce1dd4dc6f8?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="inspiration" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">
            Made for Every Corner of Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-4/5 overflow-hidden cursor-pointer"
            >
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                  <h3 className="font-serif text-2xl text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {space.title}
                  </h3>
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
