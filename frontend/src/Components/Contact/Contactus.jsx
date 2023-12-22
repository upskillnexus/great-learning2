import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import AboutBanner from "../About/Banner";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdApi, MdEmail } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import InputError from "../Errors/InputError";
import useAddEnquiry from "../../Libs/Mutation/useCreateEnquiry";
import { coursename } from "../../../data/course";

const ContactusComp = () => {
  const { mutate: createEnquiry, isPending: loading } = useAddEnquiry();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const data = [
    {
      heading: "Corporate Office :",
      address: "A-11, 2nd floor, Opposite Balaji Mandir,",
      address2: "Near Metro Pillar No. 389, Rajouri Garden",
      address3: " New Delhi-110027",
      phone: "+919990952299",
      email: "info@upskillnexus.com",
    },
    {
      heading: "Our Branch Offices",
      address: "150, 1st floor, Kapil Vihar,",
      address2: "Near Metro Pillar No.352, Pitampura,",
      address3: "New Delhi-110034",
      phone: "+919990952299",
      email: "info@upskillnexus.com",
    },
  ];

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
      <Flex
        flexDir={"column"}
        align={"center"}
        minH={"100vh"}
        bg="#fff"
        mt={{ base: "8", lg: "0" }}
        p={{ base: 0, lg: "8" }}
      >
        <Heading color="#b9292f" textAlign={"center"} fontSize={{ base: "28px", lg: "30px" }}>
          Make Your Career With UpskillNexus
        </Heading>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          border="2px solid none"
          mt={{ base: 0, lg: "8" }}
          gap="3"
          justify={"space-between"}
          bg="white"
          w={{ base: "95%", lg: "80%" }}
          rounded={"lg"}
        >
          <Flex flexDir={"column"} w={{ base: "full", lg: "45%" }} gap={{ base: 0, lg: "3" }} p="2">
            <Heading
              position="relative"
              fontSize="28px"
              as="h4"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "0",
                background: "#b9292f",
                height: "3px",
                rounded: "full",
                width: "90px",
              }}
            >
              GET IN TOUCH
            </Heading>
            {data.map((ele, i) => (
              <Box h="auto" border="1px solid none" rounded={"md"} p={{ base: 1, lg: "4" }}>
                <Heading color="#b9292f" fontSize={"25px"}>
                  {ele?.heading}
                </Heading>
                <Flex gap="3" align="start">
                  <Text>
                    <FaLocationDot color="#b9292f" />
                  </Text>
                  <Box>
                    <Text lineHeight={1.2}>{ele?.address}</Text>
                    <Text lineHeight={1}>{ele?.address2}</Text>
                    <Text lineHeight={1}>{ele?.address3}</Text>
                  </Box>
                </Flex>

                {/*  */}
                <Flex gap="3" align="center">
                  <Text>
                    <FaPhone color="#b9292f" />
                  </Text>
                  <Text>{ele?.phone}</Text>
                </Flex>
                <Flex gap="3" align="center">
                  <Text>
                    <MdEmail color="#b9292f" />
                  </Text>
                  <Text>{ele?.email}</Text>
                </Flex>
              </Box>
            ))}
          </Flex>

          <Box mb={{ base: "5", lg: "0" }} w={{ base: "full", lg: "40%" }}>
            {/*  */}
            <Flex
              gap="2"
              py={6}
              h="full"
              flexDir={"column"}
              justify={"space-around"}
              border="1px solid #cccc"
              p="5"
              rounded={"lg"}
            >
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
                          {coursename?.map((ele, i) => (
                            <option key={i}>{ele?.name}</option>
                          ))}
                        </Select>
                        <InputError err={errors} name="course" />
                      </>
                    )}
                  />
                </FormControl>
              </Box>
              <Flex justify={"center"} mt="3">
                <Button
                  w="full"
                  colorScheme="red"
                  bg="#b9292f"
                  mr={3}
                  onClick={handleSubmit(onSubmit)}
                >
                  {loading ? <Spinner /> : "Submit Your Request"}
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ContactusComp;
