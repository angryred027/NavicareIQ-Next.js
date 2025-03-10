'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState, useRef, FormEvent } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import type { PaymentResult, TilledPaymentFormProps } from '@/types/payment';
import type { TilledConstructor, TilledFormValues, PaymentFormProps } from '@/types/tilled';
const formSchema = z.object({
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  cardNumber: z.number().min(8).max(13),
  ccv: z.number().min(3).max(4),
  billingAddress: z.string().min(15),
  expirationMonth: z.string(),
  expirationYear: z.string(),
});

export default function TilledPaymentForm({
  paymentIntent: initialPaymentIntent,
  amount,
  subscriptions,
  onSubmitted,
}: PaymentFormProps): React.ReactElement {
  const [type, setType] = useState("card");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState(initialPaymentIntent);

  const tilled = useRef<{card: any, ach_debit: any}>({card: null, ach_debit: null});
  const buttonDisabledRed = useRef(false)

  const {handleSubmit, control } = useForm<TilledFormValues>();

  const pkPubKey = process.env.NEXT_PUBLIC_TILLED_PUBLIC_KEY || '';
  const accountId = process.env.NEXT_PUBLIC_TILLED_MERCHANT_ACCOUNT_ID || '';
  const customerId = process.env.NEXT_PUBLIC_TILLED_CUSTOMER_ID || '';


  // const [isLoading, setIsLoading] = useState(true);
  // const [isTilledLoaded, setIsTilledLoaded] = useState<any>(false);
  // const [tilled, setTilled] = useState(null);
  // const [handleSubmit, control] = useForm<TilledFormValues | any>();
  // const formContainerRef = useRef(null);
  // const formRef = useRef<FormEvent | null>(null);

  // Probably need to move this to a specific route and not tied to the actual component
  useEffect(() => {
    const loadTilledScript = () => {
      setIsLoading(true);
      setError(null);
      if (document.querySelector('script[src="https://js.tilled.com/v2"]')) {
        setIsTilledLoaded(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://js.tilled/com/v2';
      script.async = false;
      script.defer = true;

      script.onload = () => {
        setIsTilledLoaded(true);
      };
      script.onerror = () => {
        toast.error('Failed to load tilled-js');
      };

      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    };

    if (!document.querySelector('script[src="https://js.tilled.com/v2"]')) {
      loadTilledScript();
    } else {
      setIsLoading(false);
      initializeTilled();
    }
  }, []);

  const initializeTilled = () => {
    if (window.Tilled && publishableKey && accountId) {
      try {
        const tilledInstance: TilledConstructor = new window.Tilled(publishableKey, accountId, { sandbox: true });
        setTilled(tilledInstance);
        const tilledForm = tilledInstance.form({ payment_method_type: 'card' });
        const cardNumberField = tilledForm.createField('cardNumber');
        cardNumberField.inject('#card-number-container');
      } catch (err) {
        console.error('Error initializing tilled: ', err);
        setError('Failed to initialized Tilled. Please check the API pub key');
      }
    }
  };

  useEffect(() => {
    if (!tilled || !formContainerRef.current) return;
    // const setupPaymentForm = async () => {
    //   try {
    //     if (formRef.current) {
    //       formRef.current.teardown();
    //     }
    //   }
    // }
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success('Payment Submitted Successfully');
  }
  return (
    <div className="flex w-100%">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Complete Payment</CardTitle>
          <CardDescription>Description...</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="self-center space-y-6">
              <div className="flex flex-row gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormDescription className="pt-2">First Name on Card</FormDescription>
                        <FormMessage />
                      </FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormDescription className="pt-2">Last Name on Card</FormDescription>
                        <FormMessage />
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row w-fit">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <FormControl>
                          <Input id="card-number-container" placeholder="000-0000-0000" {...field} />
                        </FormControl>
                        <FormDescription className="pt-2">Card Number</FormDescription>
                        <FormMessage />
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="ccv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <FormControl>
                            <Input placeholder="000" {...field} />
                          </FormControl>
                          <FormDescription className="pt-2">CCV</FormDescription>
                          <FormMessage />
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-2">
                      <FormField
                        control={form.control}
                        name="expirationMonth"
                        render={({ field }) => (
                          <FormItem>
                            <Select>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="MM" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">m@example.com</SelectItem>
                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                <SelectItem value="m@support.com">m@support.com</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="expirationYear"
                        render={({ field }) => (
                          <FormItem className="flex flex-col grow">
                            <Select>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="YYYY" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="01">01</SelectItem>
                                <SelectItem value="02">02</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    <p className="text-xs text-stone-400">Expiration Date</p>
                  </div>
                </div>
              </div>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" className="" {...field} />
                      </FormControl>
                      <FormDescription className="pt-2">Last Name on Card</FormDescription>
                      <FormMessage />
                    </FormLabel>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <CardFooter className="flex justify-between pt-8">
            <Button variant="destructive">Cancel</Button>
            <Button type="submit" onClick={() => onSubmit()} className="hover:bg-green-500">
              Submit Payment
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}
