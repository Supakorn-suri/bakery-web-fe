"use client";

import { Flex, SimpleGrid, TextInput, PasswordInput, Title } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterFormData } from '../schemas/authSchemas';

interface Step1Props {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
}

export default function Step1PersonalInfo({ register, errors }: Step1Props) {
  return (
    <Flex direction="column" gap={16} mt={16}>
      <Title order={4}>Step 1: Personal information</Title>
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <TextInput
          id="first_name"
          label="First Name"
          placeholder="Your first name"
          {...register("first_name")}
          error={errors.first_name?.message}
        />
        <TextInput
          id="last_name"
          label="Last Name"
          placeholder="Your last name"
          {...register("last_name")}
          error={errors.last_name?.message}
        />
      </SimpleGrid>
      <TextInput
        id="email"
        leftSectionPointerEvents="none"
        leftSection={<IconAt size={16} />}
        label="Your email"
        placeholder="Your email"
        {...register("email")}
        error={errors.email?.message}
      />
      <PasswordInput
        id="password"
        label="Password"
        placeholder="Your password"
        {...register("password")}
        error={errors.password?.message}
      />
      <PasswordInput
        id="confirm_password"
        label="Confirm password"
        placeholder="Confirm password"
        {...register("confirm_password")}
        error={errors.confirm_password?.message}
      />
    </Flex>
  );
}
