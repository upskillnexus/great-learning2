import React, { useState } from "react";
import { Box, Button, Flex, FormControl, Grid } from "@chakra-ui/react";

import FormError from "../../core/FormError";
import DyInput from "../DynamicInputs/DyInput";
import { coursename, genders, occupation } from "../../../data/course";
import DySelectBx from "../DynamicInputs/DySelectBx";

const Step3 = ({ Controller, control, errors, prevStep, handleSubmit, handlOnSubmit }) => {
  const modeOfPayment = [
    { name: "Cheque", value: "cheque" },
    { name: "NEFT/IMPS", value: "neft-imps" },
    { name: "Online/Website", value: "online-website" },
    { name: "Debit/Credit Card", value: "debit-cradit-card" },
    { name: "Cash", value: "cash" },
    { name: "Paytm", value: "paytm" },
    { name: "Finance", value: "finance" },
  ];
  return (
    <>
      <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(4,1fr)" }} w="full" gap="5">
        {/* Fullname */}
        <Controller
          control={control}
          name="city"
          rules={{ required: "City is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"City/Town"}
                placeholder="Your city/town"
              />
              <FormError err={errors} name="city" />
            </div>
          )}
        />

        {/*  */}
        <Controller
          control={control}
          name="modeofpayment"
          rules={{ required: "Payment Mode is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DySelectBx
                value={value}
                values={modeOfPayment}
                onChange={onChange}
                title={"Mode Of Payment"}
                placeholder="--Select payment Mode--"
              />
              <FormError err={errors} name="modeofpayment" />
            </div>
          )}
        />
      </Grid>
      <Flex justify={"end"} p="2" mt="4" gap="2">
        <Button onClick={() => prevStep()}>Back</Button>
        <Button onClick={handleSubmit(handlOnSubmit)}>Submit</Button>
      </Flex>
    </>
  );
};

export default Step3;
