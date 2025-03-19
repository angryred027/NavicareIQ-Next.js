import { resolveNaptr } from 'dns';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiRequest) {
  const API_BASE_URL = process.env.API_BASE_URL;
  const X_Auth_Token = process.env.X_AUTH_TOKEN || '';

  try {
    const response = await fetch(`${API_BASE_URL}/success`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': X_Auth_Token,
      },
    });

    const obj = await response.json();
    if (response.ok) {
      console.log(obj);
    } else {
      console.log('Error:');
    }
    return NextResponse.json({ obj }, { status: response.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: { message: `Error:${error}` } }, { status: 500 });
  }
}
