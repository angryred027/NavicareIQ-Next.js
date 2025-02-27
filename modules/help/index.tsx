import { ContactUsContent } from './contact-us';
import { FaqContent } from './faq';

export default function HelpView() {
  return (
    <div className="flex gap-4">
      <div className="grow">
        <FaqContent />
      </div>
			<ContactUsContent />
    </div>
  );
}
