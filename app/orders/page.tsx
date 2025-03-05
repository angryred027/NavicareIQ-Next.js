import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import FavoutiteCard from '@/modules/orders/favoutite-card/FavoutiteCard';

const favouriteData = [
  {
    title: 'Quantitative hCG Pregnancy',
    category: 'LabCorp',
    price: 80,
  },
  {
    title: 'Liver Health',
    category: 'LabCorp',
    price: 40,
  },
  {
    title: 'Anemia',
    category: 'LabCorp',
    price: 20,
  },
  {
    title: 'Inflammation (hs-CRP)',
    category: 'LabCorp',
    price: 80,
  },
  {
    title: 'Diabetes Risk (HbA1c)',
    category: 'LabCorp',
    price: 50,
  },
];

export default function OrderPage() {
  return (
    <>
      <div className="flex h-screen gap-4">
        <div className="basis-1/4 md:basis-1/3 h-screen overflow-y-auto p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border">
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter font-bold text-[#000005]">
            Previous Orders
          </span>
          <div className="relative flex-1 sm:flex-none w-full  my-2 sm:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
          </div>
        </div>
        <div className="basis-3/4 md:basis-2/3 gap-2 flex flex-col">
          <div className="flex justify-between overflow-hidden p-4 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border">
            <div className="block mr-2 mb-4 sm:mb-0 flex-1 sm:flex-none">
              <span className="block font-inter font-bold text-[1rem] leading-[1.5rem] text-[#000005]">Labs</span>
              <span className="font-inter font-medium text-[0.75rem] leading-[1.25rem] text-[#757B80]">
                Displaying: 124
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none w-full sm:w-[15rem] mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-[#BFCFDA] rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Icon name="search" className="absolute left-3 top-2 text-gray-400" />
              </div>

              <div className="flex flex-col sm:flex-row sm:ml-4 sm:space-x-4 w-full sm:w-auto">
                <Button variant="gray" className="mb-4 sm:mb-0">
                  <Icon name="filter" className="mr-4" /> Filter
                </Button>
                <Button variant="gray">
                  <Icon name="sort" className="mr-2" /> Sort By
                </Button>
              </div>
            </div>
          </div>
          <div className="p-2 bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border">
            <span className="m-2 text-[0.75rem] leading-[1rem] font-inter font-semibold text-[#91A3B0]">
              Favourites
            </span>

            <div className="flex">
              {favouriteData.map((item, index) => (
                <FavoutiteCard key={index} title={item.title} category={item.category} price={item.price} />
              ))}
            </div>
          </div>
          <div className=" bg-[#F6F9FA] border border-[#E6F0F8] rounded-xl box-border"></div>
        </div>
      </div>
    </>
  );
}
