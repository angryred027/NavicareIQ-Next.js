interface PastPrescriptionProps {
  prescriptionNumber: string;
  date: string;
}

export const PastPrescription = ({ prescriptionNumber, date }: PastPrescriptionProps) => {
  return (
    <div className="border border-[#EDF2F6] bg-white rounded-[8px] px-4 py-3 space-y-2 max-w-[300px]">
      <div className="text-body text-system-dark-900">{prescriptionNumber}</div>
      <div className="flex items-center justify-between">
        <div className="text-caption text-system-dark-500">10 mg/mL</div>
        <div className="text-caption text-system-dark-500">{date}</div>
      </div>
    </div>
  );
};