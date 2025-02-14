import { Passage } from '@passageidentity/passage-js';

const appId = process.env.NEXT_PUBLIC_PASSAGE_APP_ID;

if (!appId) {
  throw new Error('NEXT_PUBLIC_PASSAGE_APP_ID is not defined');
}

export const passage = new Passage(appId);

export const PassageConfig = {
  appId,
}; 