import React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import useLogin from "../Libs/Mutation/Login/useLogin";

import { Controller, useForm } from "react-hook-form";
import InputError from "../Components/Errors/InputError";

function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate: handleLogin, isSuccess: success, isPending: loading } = useLogin();

  const onSUbmit = (data) => {
    handleLogin(data);
  };

  return (
    <ChakraProvider>
      <Box display="flex" alignItems="center" justifyContent="center" h="100vh" bg="#bd2c22">
        <Box p={8} maxW="600px" w="550px" borderWidth={1} rounded={8} boxShadow="lg" bg="white">
          <form onSubmit={handleSubmit(onSUbmit)}>
            <Stack spacing={4}>
              <Heading fontSize="2xl" textAlign="center" color="#bd2c22">
                Login
              </Heading>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Controller
                  control={control}
                  rules={{ required: "Email is required." }}
                  name="email"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input onChange={onChange} value={value} type="text" />
                      <InputError err={errors} name="email" />
                    </>
                  )}
                />
              </FormControl>
              {/*  */}
              <FormControl id="password">
                <FormLabel>Password</FormLabel>

                <Controller
                  control={control}
                  rules={{ required: "Password is required." }}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input onChange={onChange} value={value} type="text" />
                      <InputError err={errors} name="password" />
                    </>
                  )}
                />
              </FormControl>
              <Button
                onClick={!loading && !success && handleSubmit(onSUbmit)}
                type="submit"
                colorScheme="red"
                bg="#bd2c22"
                _hover={{ bg: "#ab241b" }}
              >
                {loading && !success ? <Spinner /> : "Login"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
