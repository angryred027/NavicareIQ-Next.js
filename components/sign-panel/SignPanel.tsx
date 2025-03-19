'use client';

import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Button from '@/components/button/Button';
const SignPanel = () => {
  const signCanvas = useRef<SignatureCanvas | null>(null);

  const clearSignature = () => {
    signCanvas.current?.clear();
  };

  const getSignatureAsBase64 = async () => {
    if (signCanvas.current) {
      const signatureDataUrl = signCanvas.current.toDataURL('image/png');

      return signatureDataUrl;
    }
  };

  const uploadSignature = async () => {};

  return (
    <div className="flex flex-col items-center">
      <SignatureCanvas
        ref={signCanvas}
        penColor="black"
        canvasProps={{
          width: 480,
          height: 240,
          className: 'border border-[#BFCFDA] shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-xl',
        }}
      />
      <div className="mt-4 flex gap-4 w-full justify-center">
        <div className="flex flex-row gap-2">
          <Button
            variant="ghost"
            className="flex w-full items-center justify-center h-[56px] p-5 border border-[#BFCFDA] rounded-[1rem] box-border font-inter font-semibold text-base leading-[1.25rem] text-center text-[#515253]"
            onClick={clearSignature}
          >
            Clear
          </Button>
          <Button
            variant="secondary"
            type="submit"
            className="flex w-full items-center justify-center h-[56px] p-5 bg-[#4167AF] rounded-[1rem] font-inter font-semibold text-base leading-[1.25rem] text-center text-white"
            onClick={getSignatureAsBase64}
          >
            Get Binary Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignPanel;
