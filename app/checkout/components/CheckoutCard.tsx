"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import classNames from "classnames";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  address: z.string().min(5),
  zipCode: z.string().min(5),
  city: z.string().min(3),
  country: z.string().min(3),
  paymentMethod: z.enum(["e-money", "cash-on-delivery"]),
  eMoneyNumber: z.string().min(9).max(9),
  eMoneyPin: z.string().min(4).max(4),
});

const CheckoutCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      paymentMethod: "e-money",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Card className="border-0 shadow-none bg-white py-8 px-4 min-w-[730px]">
      <CardHeader>
        <CardTitle>checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <p className="subtitle text-[var(--orange)]">billing details</p>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <p className="subtitle text-[var(--orange)]">shipping info</p>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="ZIP Code" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Country" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <p className="subtitle text-[var(--orange)]">payment details</p>
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="grid grid-cols-2 gap-4">
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl className="flex flex-col gap-4">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem
                        className={classNames({
                          "flex items-center space-x-3 space-y-0 border h-[56px] border-input px-3 py-2 rounded-md":
                            true,
                          "border-[var(--orange)]": field.value === "e-money",
                        })}
                      >
                        <FormControl>
                          <RadioGroupItem value="e-money" />
                        </FormControl>
                        <FormLabel>e-Money</FormLabel>
                      </FormItem>
                      <FormItem
                        className={classNames({
                          "flex items-center space-x-3 space-y-0 border h-[56px] border-input px-3 py-2 rounded-md":
                            true,
                          "border-[var(--orange)]":
                            field.value === "cash-on-delivery",
                        })}
                      >
                        <FormControl>
                          <RadioGroupItem value="cash-on-delivery" />
                        </FormControl>
                        <FormLabel>Cash on Delivery</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            {form.getValues("paymentMethod") === "e-money" && (
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eMoneyNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>e-Money Number</FormLabel>
                      <FormControl>
                        <Input placeholder="123456789" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eMoneyPin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>e-Money PIN</FormLabel>
                      <FormControl>
                        <Input placeholder="1234" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CheckoutCard;
