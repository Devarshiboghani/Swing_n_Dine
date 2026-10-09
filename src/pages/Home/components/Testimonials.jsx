import { motion } from 'framer-motion';
import { testimonials } from '../../../data/mockData';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-cream border-y border-brand-beige">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">
            Spaces That Became Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col text-center"
            >
              <div className="flex justify-center space-x-1 mb-8 text-brand-terracotta">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="font-serif text-lg text-brand-charcoal leading-relaxed mb-8 grow">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-sans text-sm tracking-widest uppercase text-brand-charcoal font-medium">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs tracking-wider uppercase text-brand-charcoal/50 mt-1">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
