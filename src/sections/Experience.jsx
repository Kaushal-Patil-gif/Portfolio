import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const experience = [
    {
      title: 'Full-Stack Developer Intern',
      place: 'IT Developer',
      date: 'Jan 2025 – Mar 2025',
      description:
        'Implemented Google Authentication using Clerk, enabling seamless and secure login experiences, improving user onboarding success rate by 35%. Developed Follow System allowing users to follow/unfollow each other, contributing to a dynamic and personalized user network. Integrated Real-Time Functionality with Convex backend, ensuring live updates to the feed and follower activity, reducing perceived latency by 40%. Optimized State Management and API calls to improve app responsiveness, leading to a 25% improvement in interaction speed. Collaborated with Design and Backend Teams to ensure smooth integration of features and resolve issues rapidly, improving sprint completion rate by 20%.',
    },
    {
      title: 'AWS Cloud Intern',
      place: 'Technobrilliant Learning Solutions',
      date: 'Jan 2024 - Jun 2024',
      description:
        ' Improved AWS resource utilization by 30% through strategic configuration of EC2, VPC, ELB, IAM, and S3 services. Contributed to cloud architecture designs that increased scalability and security, reducing operational costs by 20%. Enhanced cloud performance and reduced monthly AWS spend by 15% through continuous monitoring and optimization. Maintained 100% data integrity and improved backup efficiency by 25% using S3 lifecycle policies and automated backup tools. Accelerated deployment time by 40% through automation of CI/CD processes using AWS CLI and SDKs. Resolved infrastructure incidents, decreasing average downtime by 50% through proactive issue identification and response.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="max-w-2xl mx-auto">
        {experience.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
