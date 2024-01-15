import React, { useState } from "react";
import {
  ChakraProvider,
  Button,
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Divider,
  useMediaQuery,
  Grid,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";

import FormError from "../../core/FormError";
import DyInput from "../DynamicInputs/DyInput";
import { coursename, genders, occupation } from "../../../data/course";
import DySelectBx from "../DynamicInputs/DySelectBx";

const Step3 = ({
  Controller,
  control,
  errors,
  prevStep,
  handleSubmit,
  handlOnSubmit,
  getValues,
  creating
}) => {
  const modeOfPayment = [
    { name: "Cheque", value: "cheque" },
    { name: "NEFT/IMPS", value: "neft-imps" },
    { name: "Online/Website", value: "online-website" },
    { name: "Debit/Credit Card", value: "debit-cradit-card" },
    { name: "Cash", value: "cash" },
    { name: "Paytm", value: "paytm" },
    { name: "Finance", value: "finance" },
  ];

  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  // console.log(getValues);
  return (
    <>
      <Box mx="auto" p={4}>
        {/* <Heading mb={4}>Form Preview</Heading> */}
        <Grid
          gap={"3"}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          align="start"
        >
          {/*  */}
          <Box p="4" border={"2px solid #b9292f"} borderRadius="md">
            <Heading size="md" color="#b9292f">
              Personal Information
            </Heading>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Full Name:
              </Text>
              <Text>{getValues.fullname}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Date of Birth:
              </Text>
              <Text>{getValues.dateofbirth}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Gender:
              </Text>
              <Text>{getValues.gender}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Email:
              </Text>
              <Text>{getValues.email}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Mobile Number:
              </Text>
              <Text>{getValues.mobileNumber}</Text>
            </Flex>
          </Box>

          {/* <Divider /> */}
          <Box p="4" border={"2px solid #b9292f"} borderRadius="md">
            <Heading size="md" color="#b9292f">
              Address
            </Heading>

            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Address:
              </Text>
              <Text>{getValues.city}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                State:
              </Text>
              <Text>{getValues.state}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Country:
              </Text>
              <Text>{getValues.country}</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Pincode:
              </Text>
              <Text>{getValues.pincode}</Text>
            </Flex>
          </Box>

          {/* <Divider /> */}
          {/*  */}
          <Box p="4" border={"2px solid #b9292f"} borderRadius="md">
            <Heading size="md" color="#b9292f">
              Educational Details
            </Heading>

            {getValues.occupation == "student" && (
              <Flex justify={"space-between"}>
                <Text fontWeight="bold" pr={2}>
                  Institution Name:
                </Text>
                <Text>{getValues.institution_name}</Text>
              </Flex>
            )}

            {getValues.occupation != "student" && (
              <>
                <Flex justify={"space-between"}>
                  <Text fontWeight="bold" pr={2}>
                    Qualifications:
                  </Text>
                  <Text>{getValues.educationalQualifications}</Text>
                </Flex>
                {/*  */}
                <Flex justify={"space-between"}>
                  <Text fontWeight="bold" pr={2}>
                    Designation:
                  </Text>
                  <Text>{getValues.designation}</Text>
                </Flex>
              </>
            )}
            {/*  */}
            <Divider />
            <Heading size="md" my={2} color="#b9292f">
              Occupation Details
            </Heading>
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Occupation:
              </Text>
              <Text>{getValues.occupation}</Text>
            </Flex>
            {getValues.occupation != "student" && (
              <>
                <Flex justify={"space-between"}>
                  <Text fontWeight="bold" pr={2}>
                    Company Name:
                  </Text>
                  <Text>{getValues.companyName}</Text>
                </Flex>
              </>
            )}

            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                Course
              </Text>
              <Text>{getValues.course}</Text>
            </Flex>
          </Box>
          {/*  */}

          <Box p="4" border={"2px solid #b9292f"} borderRadius="md">
            <Flex justify={"space-between"}>
              <Text fontWeight="bold" pr={2}>
                How did you know about UpskillNexus:
              </Text>
              <Text>{getValues.leadFrom}</Text>
            </Flex>

            <Heading size="md" my={2} color="#b9292f">
              Declaration
            </Heading>
            <Flex justify={"space-between"}>
              <Checkbox isDisabled defaultChecked={getValues?.declaration}>
                <Text p={2} fontWeight={"bold"}>
                  I certify that the information I have written on the application form and the
                  documents I have submitted are true and accurate.
                </Text>
              </Checkbox>
              {/* <Text>{getValues.declaration ? "Yes" : "No"}</Text> */}
            </Flex>
          </Box>
        </Grid>

        {/*  */}
      </Box>
      <Flex justify={"end"} p="2" mt="4" gap="2">
        <Button onClick={() => prevStep()}>Back</Button>
        <Button isDisabled={creating} onClick={handleSubmit(handlOnSubmit)}>{creating ? <Spinner /> : "Submit"}</Button>
      </Flex>
    </>
  );
};

export default Step3;
