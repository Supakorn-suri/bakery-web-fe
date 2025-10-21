"use client";

import { Flex, TextInput, Title, Checkbox } from "@mantine/core";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FileWithPath } from "@mantine/dropzone";
import { UploadFile } from "@/components/Inputs/UploadFile";
import { RegisterFormData } from '../schemas/authSchemas';

interface Step3Props {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
  files: FileWithPath[];
  onDropFile: (files: FileWithPath[]) => void;
}

export default function Step3Verification({
  register,
  errors,
  files,
  onDropFile,
}: Step3Props) {
  return (
    <Flex direction="column" gap={16} mt={16}>
      <Title order={4}>Step 3: Verification & Agreement</Title>
      <TextInput
        id="bank_name"
        label="Bank Name"
        placeholder="Your bank name"
        {...register("bank_name")}
        error={errors.bank_name?.message}
      />
      <TextInput
        id="account_number"
        label="Account Number"
        placeholder="Your bank account number"
        {...register("account_number")}
        error={errors.account_number?.message}
      />
      <UploadFile
        label="Please Upload your bank photo"
        multiple={false}
        onDrop={onDropFile}
        accept={["image/png", "image/jpeg"]}
        maxSize={5 * 1024 ** 2}
        files={files}
        onClear={() => onDropFile([])}
      />
      <Checkbox defaultChecked label="Agree to Terms & Privacy Policy" />
    </Flex>
  );
}
