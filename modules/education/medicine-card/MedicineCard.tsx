import Badge from '@/components/badge/Badge';
interface MedicineCardProps {
  image: string;
  name: string;
  category: string;
  uses: string;
}

export default function MedicineCard({ image, name, category, uses }: MedicineCardProps) {
  return (
    <>
      <div className="p-2 bg-[#F6F9FA] rounded-xl overflow-hidden border border-[#E6F0F8]">
        <img src={image} alt={name} className="w-full rounded-lg h-40 object-cover" />
        <div className="pt-4 pl-2">
          <Badge
            label={category}
            className="bg-[#4167AF] font-inter font-normal text-[0.75rem] leading-[1rem] text-center text-white flex-none order-0 grow-0"
          />
          <span className="block pt-2 font-inter font-semibold text-[0.875rem] leading-[1.25rem] text-[#000005] flex-none order-0 self-stretch grow-0">
            {name}
          </span>
          <span className="block py-2 font-inter font-normal text-[0.75rem] leading-[1rem] text-[#757B80] flex-none order-1 self-stretch grow-0">
            {uses}
          </span>
        </div>
      </div>
    </>
  );
}
