"use client";

import { Flex, TextInput, Textarea, Title } from "@mantine/core";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterFormData } from '../schemas/authSchemas';

interface Step2Props {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
}

export default function Step2BakeryInfo({ register, errors }: Step2Props) {
  return (
    <Flex direction="column" gap={16} mt={16}>
      <Title order={4}>Step 2: Bakery information</Title>
      <TextInput
        id="bakery_name"
        label="Bakery Name"
        placeholder="Your bakery name"
        {...register("bakery_name")}
        error={errors.bakery_name?.message}
      />
      <TextInput
        id="phone_number"
        label="Phone Number"
        placeholder="Your phone number"
        {...register("phone_number")}
        error={errors.phone_number?.message}
      />
      <Textarea
        id="bakery_address"
        label="Bakery Address"
        placeholder="Bakery address"
        {...register("bakery_address")}
        error={errors.bakery_address?.message}
      />
    </Flex>
  );
}
