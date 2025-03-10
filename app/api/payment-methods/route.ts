import { NextResponse } from "next/server";
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const customerId = searchParams.get('customer_id');
        const type = searchParams.get('type');

        if (!customerId) {
            return NextResponse.json(
                { error: 'Customer ID is required' },
                { status: 400 }
            );
        }
        const accountId = request.headers.get('tilled-account');
        if (!accountId) {
            return NextResponse.json(
                { error: 'Tilled Account ID is required' },
                { status: 400 }
            )
        }
        const secretKey = process.env.TILLED_SECRET_KEY;
        if (!secretKey) {
            return NextResponse.json(
                { error: 'Tilled Secret Key not configured' },
                { status: 500 }
            );
        }
        const queryParams = new URLSearchParams();
        queryParams.append('customer_id', customerId);
        if (type) {
            queryParams.append('type', type);
        }

        const tilledResponse = await fetch(
            `https://api.tilled.com/v1/payment-methods?${queryParams.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${secretKey}`,
                    'tilled-account': accountId,
                }
            }
        );

        if (!tilledResponse.ok) {
            const errorData = await tilledResponse.json();
            return NextResponse.json(
                { error: errorData },
                { status: tilledResponse.status }
            )
        }
        const paymentMethods = await tilledResponse.json();
        return NextResponse.json(paymentMethods);
    } catch (error) {
        console.error("Error fetching payment methods: ", error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}