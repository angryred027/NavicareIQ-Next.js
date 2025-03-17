import React, { FC } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/common';
import Image from 'next/image';
import PlusDarkIcon from '@/assets/icons/plus-dark.svg';
import PaperGray from '@/assets/icons/paper-gray.svg';
import AlertTriangle from '@/assets/icons/alert-triangle.svg';
import { BadgeStatus } from '@/components/common';

type Props = {
  name: string;
  description: string;
  onClick?: () => void;
  previousPrescription?: boolean;
};

const PrescriptionItem: FC<Props> = ({ name, description, onClick, previousPrescription }) => {
  return (
    <div className="p-[16px] w-full border-b-[#E6F0F8] border-[1px]">
      <div className={clsx('flex justify-between  w-full')}>
        <div>
          <div className="text-[14px] font-semibold flex gap-[8px] items-center">
            <div>{name}</div>
            <Image src={PaperGray} alt="Prescription" width={20} height={20} />
          </div>
          <div className="text-[#757B80] text-[12px]">{description}</div>
        </div>
        <div>
          <Button
            onClick={onClick}
            startIcon={<Image src={PlusDarkIcon} alt="Add to order" />}
            label="Add to order"
            variant="outlined"
          />
        </div>
      </div>
      {previousPrescription && (
        <div className="mt-[8px]">
          <BadgeStatus
            label={
              <div className="flex items-center gap-[8px] py-[2px]">
                <Image src={AlertTriangle} alt="Alert" width={16} height={16} />
                <div>Previously Prescribed</div>
              </div>
            }
            status="not-ready"
          />
        </div>
      )}
    </div>
  );
};

export default PrescriptionItem;
