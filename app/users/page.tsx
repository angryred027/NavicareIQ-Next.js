type RiskLevel = 'Low Risk' | 'Moderate' | 'High Risk';

import SummaryCard from '@/components/summary-card/SummaryCard';
import Badge from '@/components/badge/Badge';
export default function Users() {
  const summaryData = [
    {
      id: '1',
      label: 'Cardiovascular Effects',
      icon: 'heart',
      level: 'Moderate',
    },
    {
      id: '2',
      label: 'Kidney Involvement',
      icon: 'bottle',
      level: 'Low Risk',
    },
    {
      id: '3',
      label: 'Dehidration',
      icon: 'waterDrop',
      level: 'High Risk',
    },
    {
      id: '4',
      label: 'Castrointestinal Dysfunction',
      icon: 'microscope',
      level: 'Low Risk',
    },
    {
      id: '5',
      label: 'Malnutrition',
      icon: 'pipette',
      level: 'High Risk',
    },
    {
      id: '6',
      label: 'Infection or Inflammation',
      icon: 'healthcare',
      level: 'Moderate',
    },
    {
      id: '7',
      label: 'Blood Glucose and Diabetes',
      icon: 'injector',
      level: 'Moderate',
    },
    {
      id: '8',
      label: 'Kidney Function',
      icon: 'flask1',
      level: 'Low Risk',
    },
    {
      id: '9',
      label: 'Nutrient Deficiencies',
      icon: 'capsule',
      level: 'High Risk',
    },
  ];

  const medicineData = [
    {
      id: '1',
      title: 'Vertisis Custom Compounded Sublingual DHEA 0.25 mg/mL',
      description: 'Hold 15 drops under the tongue for 30 seconds and swallow remaining solution twice per day.',
    },
    {
      id: '2',
      title: 'Vertisis Custom Compounded Sublingual Progesterone 10 mg/mL',
      description: 'Hold 30 drops under the tongue for 30 seconds and swallow remaining solution before bed.',
    },
  ];

  return (
    <>
      <div>
        <div></div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2box-border absolute w-[720px] h-[640px] left-1/2 -translate-x-1/2 top-[160px] bg-[#F6F9FA] border border-[#E6F0F8] border-b-0 rounded-t-[12px]"> */}
          {/* <div className="grid-cols-1 bg-[#E6F0F8] border border-[#E6F0F8] rounded-[12px] box-border"></div> */}

          {summaryData.map((item, index) => (
            <SummaryCard key={item.id} level={item.level} label={item.label} icon={item.icon} />
          ))}
          {/* <Badge icon="warning" level="Moderate" label="Previously presubscibed" /> */}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
        {summaryData.map((item, index) => (
          <SummaryCard key={item.id} level={item.level} label={item.label} icon={item.icon} />
        ))}
        <Badge icon="warning" level="Moderate" label="Previously presubscibed" />
      </div> */}
    </>
  );
}
