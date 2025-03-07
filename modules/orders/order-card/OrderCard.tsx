interface OrderCardProps {
  category: string;
  name: string;
  date: string;
}
export default function OrderCard({ category, name, date }: OrderCardProps) {
  return (
    <>
      <div className="py-2 first:pt-4">
        <div className="bg-white border border-[#EDF2F6] rounded-lg box-border p-4">
          <p className="text-[0.875rem] leading-[1.25rem] font-inter font-normal text-[#000005]">{category}</p>
          <div className="text-[0.75rem] leading-[1.25rem] font-inter font-medium text-[#757B80]">
            <span>{name}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </>
  );
}
