import { motion } from "framer-motion";

const STATS = [
  { value: "100%", label: "Kayıt Garantisi" },
  { value: "3+", label: "Aktif Ofis" },
  { value: "10+", label: "Uzman Kadro" },
  { value: "12+", label: "Partner Üniversite" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
