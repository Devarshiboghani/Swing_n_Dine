import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../../../data/mockData';

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-6">
            Find Your Signature Swing
          </h2>
          <p className="font-sans text-brand-charcoal/70 leading-relaxed">
            From timeless wooden classics to contemporary acrylic silhouettes, discover a collection designed for every kind of space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-brand-cream cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2 h-100 lg:h-full' : 'h-75'
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-white">
                    {category.name}
                  </h3>
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

export default Collections;
