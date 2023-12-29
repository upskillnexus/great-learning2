import React, { useState } from "react";
import { Box, Button, Flex, FormControl, Grid, Text } from "@chakra-ui/react";

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

  console.log(getValues);
  return (
    <>
      <Grid
        placeItems={"center"}
        border="2px solid #b9292f"
        gridTemplateColumns={"repeat(4,1fr)"}
        p="5"
        w="full"
        gap="5"
        rounded={"md"}
      >
        {/* */}
        <Text>Full Name</Text>
        <Text>{getValues?.fullname}</Text>
        <Text>Full Name</Text>
        <Text>Full Name</Text>
        <Text>Full Name</Text>
        <Text>Full Name</Text>
        <Text>Full Name</Text>
      </Grid>
      <Flex justify={"end"} p="2" mt="4" gap="2">
        <Button onClick={() => prevStep()}>Back</Button>
        <Button onClick={handleSubmit(handlOnSubmit)}>Submit</Button>
      </Flex>
    </>
  );
};

export default Step3;
