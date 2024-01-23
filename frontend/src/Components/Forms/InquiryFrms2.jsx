import React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Spinner, Text, Textarea } from "@chakra-ui/react";
import InputError from "../Errors/InputError";
import { Controller, useForm } from "react-hook-form";
import useAddEnquiry from "../../Libs/Mutation/useCreateEnquiry";
import { coursename } from "../../../data/course";

const InquiryFrms2 = () => {
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
    <>
      <Box mb={{ base: "5", lg: "0" }} w={{ base: "full", lg: "full" }}>
        <Flex gap="2" py={6} h="full" flexDir={"column"} justify={"space-around"} border="1px solid #cccc" p="5" rounded={"lg"}>
          <Box textAlign={"center"} textTransform={"uppercase"}>
            <Heading color="#b9292f" fontSize={"28px"} as="h4">
              Talk To An Expert
            </Heading>
            <Text fontSize={"12px"} fontWeight={"medium"}>
              Book Your Free Counselling Now!
            </Text>
          </Box>
          <Box>
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

            <FormControl mt={4}>
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

            <FormControl mt={4}>
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

            <FormControl mt={4}>
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
          </Box>
          <Flex justify={"center"}>
            <Button
              w="full"
              colorScheme="red"
              bg="#b9292f"
              mr={3} //
              onClick={handleSubmit(onSubmit)}>
              {loading ? <Spinner /> : "Submit Your Request"}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default InquiryFrms2;
