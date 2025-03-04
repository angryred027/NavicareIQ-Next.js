import Passage from '@passageidentity/passage-node';

const appId = process.env.NEXT_PUBLIC_PASSAGE_APP_ID;
const apiKey = process.env.PASSAGE_API_KEY;

if (!appId) {
  throw new Error('NEXT_PUBLIC_PASSAGE_APP_ID is not defined');
}

if (!apiKey) {
  throw new Error('PASSAGE_API_KEY is not defined');
}

export const passageServer = new Passage({
  appId: appId,
  apiKey: apiKey,
});
