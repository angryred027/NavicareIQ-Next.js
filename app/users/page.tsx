import { SwitchButton } from '@/components/switch/Switch';
import Badge from '@/components/badge/Badge';
import SummaryCard from '@/components/summary-card/Card';
export default function Users() {
  const summary = [
    {
      id: '1',
      title: 'Cardiovascular Effects',
      icon: '❤️', // Replace with an actual icon component if needed
      risk: 'Moderate',
    },
    {
      id: '2',
      title: 'Kidney Involvement',
      icon: '🩸',
      risk: 'Low Risk',
    },
    {
      id: '3',
      title: 'Dehydration',
      icon: '💧',
      risk: 'High Risk',
    },
    {
      id: '4',
      title: 'Gastrointestinal Dysfunction',
      icon: '🦠',
      risk: 'Low Risk',
    },
    {
      id: '5',
      title: 'Malnutrition',
      icon: '🍽️',
      risk: 'High Risk',
    },
  ];

  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"></div>;
}
