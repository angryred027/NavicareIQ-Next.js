import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || 'https://ferrari38totem33igloo23beach98.org';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const X_Auth_Token = process.env.X_AUTH_TOKEN;
  if (!X_Auth_Token) {
    return NextResponse.json(
      {
        error: { message: 'No defined X_Auth_Token!' },
      },
      { status: 403 }
    );
  }

  try {
    const response = await fetch(`${API_BASE_URL}/v1/medication/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': X_Auth_Token,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ data }, { status: 200 });
    } else {
      return NextResponse.json({ error: { message: data } }, { status: 500 });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: { message: `Fetch Data Error: ${error}` } }, { status: 500 });
  }
}
