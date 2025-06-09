import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl transition-all"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline text-sm"
          rel="noreferrer"
        >
          View Project →
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
