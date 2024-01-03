import React, { useEffect, useState } from "react";
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
    getValues,
    watch,
    reset,
  } = useForm();
  const formData = watch();

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

  const handlePreview = () => {
    // console.log(formData);
  };

  useEffect(() => {
    // console.log(formData);
    if (formData?.occupation == "") {
      reset({
        designation: "",
        educationalQualifications: "",
        companyName: "",
        institution_name: "",
      });
    }
    if (formData?.occupation == "student") {
      reset({
        designation: "",
        educationalQualifications: "",
        companyName: "",
      });
    } else {
      reset({
        institution_name: "",
      });
    }
  }, [watch, reset]);

  return (
    <>
      <Flex justify={"center"} align={"center"} p={{ base: 2, md: "5" }}>
        {/* <form > */}
        <Box w={{ base: "full", md: "90%", lg: "80%" }} p={{ base: 2, md: "5" }}>
          <AdmissionStapper step={step} />

          {step == 0 && (
            <Step1
              errors={errors}
              control={control}
              Controller={Controller}
              step={step}
              handleSubmit={handleSubmit}
              onNext={nextStep}
              getValues={watch()}
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
              handlePreview={handlePreview}
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
              getValues={watch()}
            />
          )}
        </Box>
        {/* </form> */}
      </Flex>
    </>
  );
};

export default AdmissionForm;
