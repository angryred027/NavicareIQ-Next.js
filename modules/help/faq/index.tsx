import Collapse from '@/components/collapse/Collapse';
import { IFaqItem } from '@/types/help';

export function FaqContent() {
  const faqList: Array<IFaqItem> = [
    {
      title: 'What is the purpose of this product/service?',
      description:
        'Twitter surfing overrated e-commerce series A. Figma using Tik-Toker libertarian. Friends and Family raising, rationalist Job-seeker Paul Graham backed DeFi degenerate. Disruptive acquisition strategy for board seat taking. College Dropout, overenthusiastic founder. Former Hedgefund worker girlboss. ADA-buying dropshipping guru. Javascript writing capital markets. DogeCoin buying growth hacker. Healthcare platform consumer newsletter. Term sheet-loving international intelligence operative. Consumer Social underground crypto newsletter.',
    },
    {
      title: 'What is the purpose of this product/service?',
      description:
        'Twitter surfing overrated e-commerce series A. Figma using Tik-Toker libertarian. Friends and Family raising, rationalist Job-seeker Paul Graham backed DeFi degenerate. Disruptive acquisition strategy for board seat taking. College Dropout, overenthusiastic founder. Former Hedgefund worker girlboss. ADA-buying dropshipping guru. Javascript writing capital markets. DogeCoin buying growth hacker. Healthcare platform consumer newsletter. Term sheet-loving international intelligence operative. Consumer Social underground crypto newsletter.',
    },
    {
      title: 'What is the purpose of this product/service?',
      description:
        'Twitter surfing overrated e-commerce series A. Figma using Tik-Toker libertarian. Friends and Family raising, rationalist Job-seeker Paul Graham backed DeFi degenerate. Disruptive acquisition strategy for board seat taking. College Dropout, overenthusiastic founder. Former Hedgefund worker girlboss. ADA-buying dropshipping guru. Javascript writing capital markets. DogeCoin buying growth hacker. Healthcare platform consumer newsletter. Term sheet-loving international intelligence operative. Consumer Social underground crypto newsletter.',
    },
    {
      title: 'What is the purpose of this product/service?',
      description:
        'Twitter surfing overrated e-commerce series A. Figma using Tik-Toker libertarian. Friends and Family raising, rationalist Job-seeker Paul Graham backed DeFi degenerate. Disruptive acquisition strategy for board seat taking. College Dropout, overenthusiastic founder. Former Hedgefund worker girlboss. ADA-buying dropshipping guru. Javascript writing capital markets. DogeCoin buying growth hacker. Healthcare platform consumer newsletter. Term sheet-loving international intelligence operative. Consumer Social underground crypto newsletter.',
    },
    {
      title: 'What is the purpose of this product/service?',
      description:
        'Twitter surfing overrated e-commerce series A. Figma using Tik-Toker libertarian. Friends and Family raising, rationalist Job-seeker Paul Graham backed DeFi degenerate. Disruptive acquisition strategy for board seat taking. College Dropout, overenthusiastic founder. Former Hedgefund worker girlboss. ADA-buying dropshipping guru. Javascript writing capital markets. DogeCoin buying growth hacker. Healthcare platform consumer newsletter. Term sheet-loving international intelligence operative. Consumer Social underground crypto newsletter.',
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-base text-system-dark-900 font-bold">Frequently asked questions</p>
        <p className="text-sm text-system-dark-500 mt-2">
          Please check our F.A.Q. before reaching out to our customer support team.
        </p>
      </div>
      <div className="mt-2 border-t border-system-light-200">
        {faqList.map((faq, index) => (
          <div key={index}>
            <Collapse title={faq.title}>
              <p className="text-sm text-system-dark-500">{faq.description}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}
