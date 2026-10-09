import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { featuredProducts } from '../../../data/mockData';

const FeaturedCollection = () => {
  return (
    <section className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">
              Signature Pieces
            </h2>
            <p className="font-sans text-brand-charcoal/70 leading-relaxed">
              Statement swings designed to become the soul of your space.
            </p>
          </div>
          <a href="#" className="inline-flex items-center text-brand-charcoal font-sans text-sm tracking-widest uppercase hover:text-brand-terracotta transition-colors group">
            View All Collections
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-brand-cream mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-brand-charcoal" />
                </div>
              </div>
              
              <div className="flex flex-col grow">
                <p className="font-sans text-xs text-brand-charcoal/50 tracking-wider uppercase mb-2">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl text-brand-charcoal mb-2 group-hover:text-brand-terracotta transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-brand-charcoal mt-auto pt-2 border-t border-brand-beige/50">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
