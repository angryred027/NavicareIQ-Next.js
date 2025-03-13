'use client';
import { useState, useEffect } from 'react';
import { SelectDropDown } from '@/components/common/inputs/select-dropdown';

import Modal from '@/components/modal/Modal';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';

type LabItem = {
  value: string;
  label: string;
};

type AddFavouriteModalProps = {
  isOpen: boolean;
  labsData: LabItem[];
  favouritesData: LabItem[];
  frequentlyUsedLabsData: LabItem[];
};

const labs = [
  { value: 'thyroid', label: 'Standard Thyroid' },
  { value: 'tb_blood', label: 'Tuberculosis (TB) Blood' },
  { value: 'hcg_pregnancy', label: 'Quantitative hCG Pregnancy' },
  { value: 'anemia', label: 'Anemia' },
];

export default function AddFavouriteModal({
  isOpen = false,
  labsData = labs,
  favouritesData = labs,
  frequentlyUsedLabsData = labs,
}: AddFavouriteModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLabs, setSelectedLabs] = useState<{ label: string; value: string }[]>([]);
  const [selectedLab, setSelectedLab] = useState('');
  const [reason, setReason] = useState<string>('');

  useEffect(() => {
    setIsModalOpen(isOpen);
    setSelectedLabs(favouritesData);
  }, [isOpen, favouritesData]);

  const handleSelect = (value: string) => {
    if (!value || selectedLabs.some((tag) => tag.value === value)) return;
    const option = labsData.find((opt) => opt.value === value);
    if (option) {
      setSelectedLabs((prev) => [...prev, option]);
    }
  };

  const handlePlus = (value: string) => {
    handleSelect(value);
  };

  const removeTag = (value: string) => {
    setSelectedLabs((prev) => prev.filter((tag) => tag.value !== value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add to Order">
        <div className="overflow-y-auto [&::-webkit-scrollbar]:none">
          <div className="flex flex-col gap-4 mx-1 my-5 h-[56px]">
            <SelectDropDown label="Lab" value={selectedLab} options={labsData} onChange={handleSelect} />
          </div>
          <div className="my-3">
            {selectedLabs.length > 0 && (
              <div className="flex flex-wrap w-full gap-2">
                {selectedLabs.map((tag) => (
                  <div
                    key={tag.value}
                    className="flex flex-row justify-start items-center p-[6px_12px] gap-[8px] bg-[#3DBD7B] rounded-[8px]"
                  >
                    <span className="text-white text-center text-[0.75rem] leading-[1rem] font-inter font-normal">
                      {tag.label}
                    </span>
                    <button
                      onClick={() => removeTag(tag.value)}
                      className="text-white focus:outline-none hover:text-red-300"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <hr className="h-[1px] border-0 bg-[#E6F0F8]" />

          <div className="mt-5">
            <span className="font-inter font-semibold text-xs leading-[1rem] text-[#91A3B0]">Frequently used</span>
          </div>
          <div>
            {frequentlyUsedLabsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between p-4 h-[3rem] my-2 bg-[#F6F9FA] rounded-lg"
                onClick={() => handlePlus(item.value)}
              >
                <span className="cursor-pointer font-inter text-base leading-[1.25rem] text-[#00jij0005]">
                  {item.label}
                </span>
                <Icon name="roundPlus" className="cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-8 h-[1px] border-0 bg-[#E6F0F8]" />

        <Button
          variant="primary"
          className="flex w-full my-5 items-center justify-center h-[56px] p-5 bg-[#4167AF] rounded-[1rem] font-inter font-semibold text-base leading-[1.25rem] text-center text-white"
          type="submit"
        >
          Add to Favourites
        </Button>
      </Modal>
    </>
  );
}
