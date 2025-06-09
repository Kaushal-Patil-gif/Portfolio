import { motion } from 'framer-motion';

const TimelineItem = ({ title, place, date, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pl-6 border-l-4 border-blue-500 mb-8 max-w-xl mx-auto"
    >
      <div className="absolute -left-3 w-5 h-5 bg-blue-500 rounded-full top-1" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {place} | {date}
      </span>
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;
