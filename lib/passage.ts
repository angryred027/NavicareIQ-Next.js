import { Passage } from '@passageidentity/passage-js';

export const PassageConfig = {
  appId: process.env.NEXT_PUBLIC_PASSAGE_APP_ID!,
};

export const passage: any = new Passage(PassageConfig.appId); 