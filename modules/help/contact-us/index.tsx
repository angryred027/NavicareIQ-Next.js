'use client';

import { useMemo } from 'react';
import { z as zod } from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '@/components/button/Button';
import TextArea from '@/components/text-area/TextArea';
import TextField from '@/components/text-field/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, RHFTextField } from '@/components/hook-form';
import { RHFTextArea } from '@/components/hook-form/rhf-text-area';

export const NewContactSchema = zod.object({
  email: zod.string().min(1, { message: 'Email is required!' }),
  name: zod.string().min(1, { message: 'Name is required!' }),
  message: zod.string().min(1, { message: 'Message is required!' }),
});
export type NewContactSchemaType = zod.infer<typeof NewContactSchema>;

export function ContactUsContent() {
  const defaultValues = useMemo(
    () => ({
      email: '',
      name: '',
      message: '',
    }),
    []
  );
  const methods = useForm<NewContactSchemaType>({
    mode: 'all',
    resolver: zodResolver(NewContactSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const handleSendContacts = handleSubmit(async (data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="min-w-[380px] rounded-[12px] p-4 border border-system-right-200 bg-[#F5F9FA]">
      <span className="text-bsae font-bold text-system-dark-900">Contact Us</span>
      <p className="text-sm text-system-dark-500 mt-2">
        Leave your message here and one of our customer support representatives will contact you shortly.
      </p>

      <Form methods={methods}>
        <div className="mt-6 flex flex-col gap-5">
          <RHFTextField label="Email" name="email" />
          <RHFTextField label="Name" name="name" />
          <RHFTextArea label="Message" style={{ height: 346 }} name="message" />
        </div>

        <div className="mt-6">
          <Button className="w-full" onClick={handleSendContacts}>
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
