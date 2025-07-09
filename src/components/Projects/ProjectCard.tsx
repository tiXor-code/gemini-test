
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <Image src={image} alt={title} width={500} height={300} className="rounded-lg" />
      <h3 className="text-2xl font-bold text-gray-200 mt-4">{title}</h3>
      <p className="text-lg text-gray-200 mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
