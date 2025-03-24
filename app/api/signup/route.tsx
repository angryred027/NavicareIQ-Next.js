import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || 'https://ferrari38totem33igloo23beach98.org';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const psg_auth_token = process.env.psg_auth_token;
  if (!psg_auth_token) return NextResponse.json({ error: { message: 'No defined psg_auth_token!' } });
  console.log('API test', psg_auth_token);

  try {
    const response = await fetch(`${API_BASE_URL}/v1/facility`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${psg_auth_token}`,
      },
      data: JSON.stringify()
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({ error: { message: data } });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: { message: `Fetch Data Error: ${error}` } });
  }
}
