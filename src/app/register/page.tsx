"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Button,
  Flex,
  Card,
  SegmentedControl,
  Affix,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import LoginModal from "@/features/auth/components/LoginModal";
import MemberRegisterForm from "@/features/auth/components/MemberRegisterForm";
import BakerRegisterForm from "@/features/auth/components/BakerRegisterForm";

const RegisterPage = () => {
  const router = useRouter();
  const [value, setValue] = useState("Member");
  const [openedLogin, loginHandlers] = useDisclosure(false);

  return (
    <Container fluid h="100dvh" bg="#FAF3E3">
      <Affix position={{ top: 20, left: 20 }}>
        <Button
          size="xs"
          radius="md"
          leftSection={<IconChevronLeft size={16} />}
          variant="transparent"
          onClick={() => router.replace("/")}
        >
          Home
        </Button>
      </Affix>
      <Flex direction="column" h="100%" align="center" justify="center">
        <Card
          mih={450}
          w="100%"
          maw={700}
          radius={24}
          p={24}
          style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          <Flex direction="column" mb={24} align="center">
            <SegmentedControl
              value={value}
              onChange={setValue}
              w={200}
              radius="md"
              data={["Member", "Baker"]}
            />
          </Flex>
          {value === "Member" ? (
            <MemberRegisterForm onLoginClick={loginHandlers.open} />
          ) : (
            <BakerRegisterForm onLoginClick={loginHandlers.open} />
          )}
        </Card>
      </Flex>
      <LoginModal opened={openedLogin} close={loginHandlers.close} />
    </Container>
  );
};

export default RegisterPage;
