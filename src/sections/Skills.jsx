import SkillBar from '../components/SkillBar';

const Skills = () => {
  const skills = [
    { skill: 'React', level: 95 },
    { skill: 'Java', level: 95 },
    { skill: 'AWS', level: 90 },
    { skill: 'PHP', level: 90 },
    { skill: 'Git & GitHub', level: 90 },
     { skill: 'SQL', level: 85 },
    { skill: 'MongoDB', level: 80 },
    { skill: 'Python', level: 70 },
    { skill: 'Node', level: 60 },
   
    
    
   
    

  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="max-w-2xl mx-auto">
        {skills.map((s, i) => (
          <SkillBar key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
