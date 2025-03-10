export const fetchPaymentIntent = async (
    amount: number,
    preventDuplicates = true
) : Promise<IPaymentIntent> => {
    const tilledAccount = "";
    const salesTax = Number(process.env.NEXT_PUBLIC_TILLED_MERCHANT_TAX) || 1;
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    if (tilledAccount) requestHeaders.set("tilled_account", tilledAccount);

    const response = await fetch("/api/payments-intents", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify({
            payment_intent: {
                amount: Math.round(amount * salesTax),
                currency: "usd",
                payment_method_types: ["card", "ach_debit"],
                metadata: {
                    user_id: "user_12345",
                },
            },
            prevent_duplicates: preventDuplicates,
        }),
    });

    if (!response.ok) {
        const defaultErrorMessage = "Unable to fetch payments from backend";
        const responseBody = await response.json();
        const {message = defaultErrorMessage} = responseBody || {};

        throw new (Error as any)(`${message} Status: ${response.statusText}`)
    }
    return response.json();
};

export default fetchPaymentIntent;