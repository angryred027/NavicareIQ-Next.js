import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || 'https://ferrari38totem33igloo23beach98.org';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  //   const { patient_id } = req.query;
  //   const url = new URL(req.url);
  //   const patient_id = url.searchParams.get('patient_id');

  //   if (!patient_id || isNaN(Number(patient_id))) {
  //     return NextResponse.json({ error: { message: 'Invalid or missing patient_id.' } });
  //   }
  const patient_id = 1;

  const psg_auth_token = process.env.psg_auth_token;
  if (!psg_auth_token) return NextResponse.json({ error: { message: 'No defined psg_auth_token!' } });
  console.log('API test', psg_auth_token);

  try {
    const response = await fetch(`${API_BASE_URL}/v1/order/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${psg_auth_token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data); // For debugging purposes; consider removing in production
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({ error: { message: data } });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: { message: `Fetch Data Error: ${error}` } });
  }
}
