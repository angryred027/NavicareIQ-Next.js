import Button from '@/components/button/Button';
import TextArea from '@/components/text-area/TextArea';
import TextField from '@/components/text-field/TextField';

export function ContactUsContent() {
  return (
    <div
      className="min-w-[380px] rounded-[12px] p-4 border border-system-right-200 bg-[#F5F9FA]"
      style={{ minWidth: 380, backgroundColor: '#F5F9FA' }}
    >
      <span className="text-bsae font-bold text-system-dark-900">Contact Us</span>
      <p className="text-sm text-system-dark-500 mt-2">
        Leave your message here and one of our customer support representatives will contact you shortly.
      </p>

      <div className="mt-6 flex flex-col gap-5" style={{ marginTop: 24 }}>
        <TextField label="Email" />
        <TextField label="Name" />
        <TextArea label='Message' style={{ height: 346 }} />
      </div>

			<div className='mt-6' style={{ marginTop: 24 }}>
				<Button className='w-full'>Send</Button>
			</div>
    </div>
  );
}
