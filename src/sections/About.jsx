import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg'; 

const About = () => (
  <section id="about" className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-900">
   
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
      >
        <img
          src={profileImg}
          alt="Kaushal Patil"
          className="w-full h-full object-cover"
        />
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl"
      >
        <p className="mb-4">
          Hello! I’m <span className="text-blue-500 font-semibold">Kaushal Patil</span>. I’m a passionate and solutions-driven <strong>Computer Engineering</strong> student with a strong foundation in <span className="font-semibold text-blue-400">full-stack development</span> and <span className="font-semibold text-blue-400">cloud computing</span>.
        </p>
        <p className="mb-4">
          During my <strong>AWS Cloud Internship</strong>, I worked with services like EC2, VPC, IAM, S3, and ELB to design <strong>secure</strong>, <strong>cost-effective</strong>, and <strong>scalable architectures</strong>. I gained deep exposure to cloud infrastructure and DevOps practices.
        </p>
        <p className="mb-4">
          I’ve developed responsive React frontends and efficient Node.js backends using MongoDB. I emphasize <strong>performance</strong>, <strong>clean code</strong>, and intuitive <strong>user experiences</strong>.
        </p>
        <p>
          I’m always eager to explore new tech and build impactful solutions. Whether it’s product consulting or full-stack applications, I love making things that matter. <span className="text-blue-400 font-semibold">Let’s connect and build something great!</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
