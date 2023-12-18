import React from "react";
import { Box, Flex, Heading, Text, Input, Button, UnorderedList, ListItem, Image, Grid, Select, FormLabel, FormControl } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";

import { Controller, useForm } from "react-hook-form";
import useAddEnquiry from "../../Libs/Mutation/useCreateEnquiry";
import InputError from "../Errors/InputError";
import { coursename } from "../../../data/course";

const InqueryFrms = () => {
  const { mutate: createEnquiry, isPending: loading } = useAddEnquiry();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createEnquiry(data);
    reset({
      fullname: "",
      email: "",
      phone: "",
      course: "",
    });
  };

  return (
    <Box width="100%" minH="550px" bg="#fff" display={{ base: "block", md: "flex" }} rounded={"md"}>
      {/* Left Part */}
      <Box width={{ base: "100%", md: "60%" }} py="0" bg="#e95454" color="#fff" roundedLeft={{ base: "none", md: "md" }}>
        <Image h="full" w="full" objectFit={"cover"} src="/inquery/form-image2.png" />
      </Box>

      {/* Right Part */}
      <Flex flexDir={"column"} justify={"center"} width={{ base: "100%", md: "60%" }} p={4}>
        <Heading size={{ base: "20px", md: "lg" }} fontWeight={"medium"} mb={4}>
          Confused? Why not let us help!
        </Heading>
        <Text>Get in touch with our Friendly Team. Speak to us for Batches, fee and curriculum.</Text>

        {/* Input and Button */}
        <Box gap="5">
          {/* <Box w="50%"> */}
          <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} gap="3">
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              {/* <Input placeholder="Name" /> */}
              <Controller
                name="fullname"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input onChange={onChange} value={value} placeholder="Name" />
                    <InputError name="fullname" err={errors} />
                  </>
                )}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Controller
                name="email"
                control={control}
                rules={{ required: "email is required" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input onChange={onChange} value={value} placeholder="abc@gmail.com" />
                    <InputError name="email" err={errors} />
                  </>
                )}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Mobile No:</FormLabel>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Mobile no. is required" }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input onChange={onChange} value={value} placeholder="Mobile No." />
                    <InputError name="phone" err={errors} />
                  </>
                )}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Course</FormLabel>
              <Controller
                control={control}
                name="course"
                rules={{ required: "Please select any course." }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Select onChange={onChange} value={value} placeholder="--Select Course--">
                      {coursename.map((ele, i) => (
                        <option key={i}>{ele.name}</option>
                      ))}
                    </Select>
                    <InputError err={errors} name="course" />
                  </>
                )}
              />
            </FormControl>
          </Grid>
          {/* </Box> */}
          <Button onClick={handleSubmit(onSubmit)} bg="#e95454" _hover={{ bg: "#ed7f7f" }} color="white" my="8">
            Talk To Advisor
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default InqueryFrms;
