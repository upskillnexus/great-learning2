import React, { useState } from "react";
import DyInput from "../DynamicInputs/DyInput";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import Step1 from "../Admission/Step1";
import Step2 from "../Admission/Step2";
import AdmissionStapper from "../Admission/Stepper";
import Step3 from "../Admission/Step3";

const AdmissionForm = () => {
  const [step, setStep] = useState(0);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const nextStep = () => {
    setStep(step + 1);
    // console.log(errors.email.message);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const handlOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Flex justify={"center"} align={"center"} p="4">
        {/* <form > */}
        <Box w="80%" p="5">
          <AdmissionStapper step={step} />

          {step == 0 && (
            <Step1
              errors={errors}
              control={control}
              Controller={Controller}
              step={step}
              handleSubmit={handleSubmit}
              onNext={nextStep}
            />
          )}
          {step == 1 && (
            <Step2
              errors={errors}
              control={control}
              Controller={Controller}
              step={step}
              handleSubmit={handleSubmit}
              prevStep={prevStep}
              onNext={nextStep}
            />
          )}
          {step == 2 && (
            <Step3
              errors={errors}
              control={control}
              Controller={Controller}
              step={step}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              handlOnSubmit={handlOnSubmit}
            />
          )}
        </Box>
        {/* </form> */}
      </Flex>
    </>
  );
};

export default AdmissionForm;
