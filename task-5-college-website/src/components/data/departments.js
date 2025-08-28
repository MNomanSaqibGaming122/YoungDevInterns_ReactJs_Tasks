import computerScienceImage from '../../assets/images/departments/computer.jpg';
import businessImage from '../../assets/images/departments/business.jpg';
import artsandhumanitiesImage from '../../assets/images/departments/artsandhumanities.png';
import healthImage from '../../assets/images/departments/health.jpg';
import naturalscienceImage from '../../assets/images/departments/naturalscience.jpg';
import commerceImage from '../../assets/images/departments/commerce.jpg';

const departments = [
  {
    id: 1,
    name: 'Computer Science & Engineering',
    description: 'A cutting-edge program focusing on software development, AI, and cybersecurity.',
    fullDescription: 'Our Computer Science & Engineering program is designed to give students a comprehensive understanding of algorithms, data structures, and software engineering principles. Students can specialize in areas like artificial intelligence, machine learning, and cybersecurity.',
    courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Operating Systems', 'Cybersecurity'],
    faculty: ['Dr. John Smith', 'Dr. Sarah Chen', 'Prof. Alex Jones'],
    image: computerScienceImage,
  },
  {
    id: 2,
    name: 'Business Administration',
    description: 'Learn the principles of management, finance, and marketing in a dynamic environment.',
    fullDescription: 'The Business Administration program offers a flexible curriculum that prepares students for leadership roles in various industries. We emphasize practical skills in finance, marketing, and strategic management.',
    courses: ['Financial Accounting', 'Principles of Marketing', 'Business Law', 'Organizational Behavior'],
    faculty: ['Dr. Jane Doe', 'Prof. Michael Brown'],
    image: businessImage,
  },
  {
    id: 3,
    name: 'Arts & Humanities',
    description: 'Explore history, literature, and philosophy to understand the human experience.',
    fullDescription: 'This program encourages critical thinking and a deep appreciation for culture and history. Courses cover a wide range of topics from ancient history to modern literature.',
    courses: ['World History', 'Introduction to Philosophy', 'Literary Analysis'],
    faculty: ['Dr. Emily Davis', 'Prof. Chris Lee'],
    image: artsandhumanitiesImage,
  },
  {
    id: 4,
    name: 'Natural Sciences',
    description: 'Dive into biology, chemistry, and physics with hands-on lab and research opportunities.',
    fullDescription: 'Our Natural Sciences programs combine theoretical knowledge with extensive hands-on laboratory experience, preparing students for careers in research, medicine, and environmental science.',
    courses: ['General Biology', 'Organic Chemistry', 'Calculus-Based Physics'],
    faculty: ['Dr. Alice Williams', 'Dr. Ben Miller'],
    image: naturalscienceImage,
  },
  {
    id: 5,
    name: 'Health Sciences',
    description: 'Prepare for a career in healthcare with programs in nursing, public health, and therapy.',
    fullDescription: 'The Health Sciences program offers a pathway to a rewarding career in healthcare. The curriculum includes core subjects in human biology, pharmacology, and public health policy.',
    courses: ['Human Anatomy', 'Pharmacology', 'Public Health Policy'],
    faculty: ['Dr. Olivia Garcia', 'Prof. David Wilson'],
    image: healthImage,
  },
  {
    id: 6,
    name: 'Commerce',
    description: 'Study the principles of trade, business, and economics.',
    fullDescription: 'The Commerce program provides a solid foundation in business principles, economics, and finance. Students will learn about market dynamics, consumer behavior, and the global economy.',
    courses: ['Principles of Economics', 'Business Law', 'Financial Management'],
    faculty: ['Dr. Rachel Green', 'Prof. Ross Geller'],
    image: commerceImage,
  }
];

export default departments;