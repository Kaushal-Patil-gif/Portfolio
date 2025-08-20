import TimelineItem from '../components/TimelineItem';

const Education = () => {
  const education = [
     {
      title: 'CDAC',
      place: 'Kharghar, Mumbai',
      date: '2025-2026',
      description: 'Ongoing',
    },
    {
      title: 'Masters in Computer Applications',
      place: 'Arka Jain University',
      date: '2023 - 2025',
      description: 'Post-Graduated with Grade A',
    },
    {
      title: 'BBA in Computer Applications',
      place: 'Sinhgad College of Science, SPPU',
      date: '2020 - 2023',
      description: 'Graduated with Grade A+',
    }
    
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="max-w-2xl mx-auto">
        {education.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
