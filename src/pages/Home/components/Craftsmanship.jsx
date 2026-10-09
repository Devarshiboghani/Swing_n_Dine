import { motion } from 'framer-motion';

const Craftsmanship = () => {
  const features = [
    {
      id: "01",
      title: "Premium Materials",
      description: "Sourced from sustainable forests and crafted with the highest grade acrylics and metals."
    },
    {
      id: "02",
      title: "Thoughtful Craftsmanship",
      description: "Every joint, curve, and polish is executed by artisans with decades of experience."
    },
    {
      id: "03",
      title: "Designed for Comfort",
      description: "Ergonomically contoured seats ensuring hours of relaxation without compromise."
    },
    {
      id: "04",
      title: "Made for Modern Spaces",
      description: "Clean lines and contemporary silhouettes that elevate any interior aesthetic."
    }
  ];

  return (
    <section id="craftsmanship" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">
            Crafted With Intention
          </h2>
          <div className="w-16 h-px bg-brand-terracotta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border-t border-brand-beige pt-8 cursor-default"
            >
              <div className="text-brand-terracotta font-serif text-2xl mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {feature.id}
              </div>
              
              <h3 className="font-serif text-xl text-brand-charcoal mb-4 group-hover:-translate-y-1 transition-transform">
                {feature.title}
              </h3>
              
              <p className="font-sans text-brand-charcoal/60 text-sm leading-relaxed group-hover:-translate-y-1 transition-transform delay-75">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
