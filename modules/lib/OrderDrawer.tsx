'use client';

import Icon from '@/components/icon/Icon';
import Badge from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import { PatientInfo } from '../reports/patient-info/PatientInfo';

import { Lab, LabOrderItem } from '@/types/lab.type';
import { Patient } from '@/types/patient.type';
import { Medication, MedicationOrderItem } from '@/types/medication.type';

import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { getCurrentUser } from '@/store/features/authSlice';
import {
  addLabOrder,
  addMedicationOrder,
  setMedicationQuantity,
  loadStoredOrderData,
} from '@/store/features/orderSlice';
import QuantityDropdown from './QuantityDropdown';

type OrderDrawerProps = {
  patient: Patient;
};

export default function OrderDrawer({ patient }: OrderDrawerProps) {
  const dispatch = useAppDispatch();
  const { labOrders, medicationOrders } = useSelector((state: RootState) => state.order);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(loadStoredOrderData());

    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isDrawerOpen && (
        <div
          ref={drawerRef}
          className="overflow-y-auto [&::-webkit-scrollbar]:none fixed top-0 right-0 z-50 w-[400px] h-full bg-white shadow-lg p-4"
        >
          <div className="my-4 relative sm:flex-none bg-[#F6F9FA] rounded-md border border-[#E6F0F8]">
            <PatientInfo patient={patient} />
          </div>
          <div className="mb-2 font-inter font-semibold text-xs leading-[16px] text-[#757B80]">Lab Order</div>
          <div className="bg-[#F6F9FA] rounded-[12px] p-3">
            {labOrders.map((labOrder: LabOrderItem, index: number) => (
              <div className="flex flex-col justify-center rounded-[12px]">
                <div className="flex justify-between">
                  <span className="p-1 font-inter font-medium text-[12px] leading-[20px] text-[#000005] flex-nowrap">
                    {labOrder.lab?.name}
                  </span>
                  <div className="mt-1">
                    <Icon name="circleThreeDot" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                    <span className="font-semibold text-[#4167AF]">0.25 mg/mL</span>
                  </div>
                  <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                    <span>Qty. &nbsp;</span>
                    <Icon name="arrowDown" size={16} className=" text-[#4167AF]" />
                  </div>
                </div>
              </div>
            ))}
            <hr className="h-[1px] my-3 border-0 bg-[#E6F0F8]" />
            <div className="flex flex-col justify-center rounded-[12px]">
              <div className="flex justify-between">
                <span className="p-1 font-inter font-medium text-[12px] leading-[20px] text-[#000005] flex-nowrap">
                  {'Vertisis Custom Compounded Sublingual DHEA'}
                </span>
                <div className="mt-1">
                  <Icon name="circleThreeDot" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                  <span className="font-semibold text-[#4167AF]">0.25 mg/mL</span>
                </div>
                <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                  <span>Qty. &nbsp;</span>
                  <span className="font-semibold text-[#4167AF]">2</span>
                  <Icon name="arrowDown" size={16} className=" text-[#4167AF]" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge icon="warning" level="Moderate" label="Previously prescribed" />
            </div>
            <hr className="h-[1px] my-3 border-0 bg-[#E6F0F8]" />
            <div className="bg-white rounded-[8px] p-3">
              <div className="flex justify-between font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
                <span>Pharmacy</span>
                <Icon name="circleThreeDot" />
              </div>
              <div className="mt-1 font-inter font-medium text-[12px] leading-[16px] text-[#000005]">
                Vertisis Custom Pharmacy
              </div>
              <div className="mt-2 font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
                Est. Pickup: Feb 12, 2025
              </div>
            </div>
          </div>

          <div className="mb-2 mt-4 font-inter font-semibold text-xs leading-[16px] text-[#757B80]">
            Medication Order
          </div>
          <div className="bg-[#F6F9FA] rounded-[12px] p-3">
            {medicationOrders.map((medicationOrder: MedicationOrderItem, index: number) => (
              <div className="flex flex-col justify-center rounded-[12px]">
                <div className="flex justify-between">
                  <span className="p-1 font-inter font-medium text-[12px] leading-[20px] text-[#000005] flex-nowrap">
                    {medicationOrder.medication?.name}
                  </span>
                  <div className="mt-1">
                    <Icon name="circleThreeDot" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                    <span className="font-semibold text-[#4167AF]">0.25 mg/mL</span>
                  </div>
                  <div className="font-inter text-xs leading-[16px] text-[#757B80] flex">
                    <span>Qty. &nbsp;</span>
                    <span className="font-semibold text-[#4167AF]">1</span>
                    <Icon name="arrowDown" size={16} className=" text-[#4167AF]" />
                  </div>
                </div>
              </div>
            ))}
            <hr className="h-[1px] my-3 border-0 bg-[#E6F0F8]" />
            <div className="bg-white rounded-[8px] p-3">
              <div className="flex justify-between font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
                <span>Pharmacy</span>
                <Icon name="circleThreeDot" />
              </div>
              <div className="mt-1 font-inter font-medium text-[12px] leading-[16px] text-[#000005]">
                Vertisis Custom Pharmacy
              </div>
              <div className="mt-2 font-inter font-normal text-[10px] leading-[16px] text-[#757B80]">
                Est. Pickup: Feb 12, 2025
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            className="flex w-full my-5 items-center justify-center h-[3.5rem] bg-[#4167AF] rounded-[1rem]"
            type="submit"
          >
            Confirm & Place order
          </Button>
        </div>
      )}
    </>
  );
}
