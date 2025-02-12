/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'passage-auth': PassageAuthElement;
      'passage-profile': PassageElement;
      'passage-register': PassageElement;
      'passage-login': PassageElement;
    }
  }
}

interface PassageElement extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

interface PassageAuthElement extends PassageElement {
  'app-id': string;
}

declare module '@passageidentity/passage-elements/passage-auth';
declare module '@passageidentity/passage-elements/passage-profile';
declare module '@passageidentity/passage-elements/passage-register';
declare module '@passageidentity/passage-elements/passage-login';

export {}; 