import React, { useEffect, useState } from "react";
import DyInput from "../DynamicInputs/DyInput";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import Step1 from "../Admission/Step1";
import Step2 from "../Admission/Step2";
import AdmissionStapper from "../Admission/Stepper";
import Step3 from "../Admission/Step3";
import useCreateAdmission from "../../Libs/Mutation/Admisson/useCreateAdmission";

// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Success from "../Admission/Success";

const AdmissionForm = () => {
  const [conQty, setConQty] = useState(0)
  const [step, setStep] = useState(0);
  const {mutate: handleCreateAd, isPending: creating, isSuccess: created} = useCreateAdmission()


  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    watch,
    reset,
  } = useForm();
  const formData = watch();

  const handlOnSubmit = (data) => {
    let sendData = new FormData();

    for (let i in data) {
      sendData.append(i, data[i]);
    }

    handleCreateAd(sendData)
  };




  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
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


  useEffect(() => {
    if(created){
      reset()
      setStep(step + 1);
      setConQty(200)
    }


  },[created])


  useEffect(() => {
    if(created){
      setConQty(200)
    }
    const setTime = setTimeout(() => {
      setConQty(0)
    },6000)

    return () => clearTimeout(setTime)
  },[created, reset, setStep, setConQty, step])
  

  return (
    <>
    <Confetti numberOfPieces={conQty} />
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
              creating={creating}
            />
          )}
          {step == 3 && (
            <Success />
          )}
        </Box>
        {/* </form> */}
      </Flex>
    </>
  );
};

export default AdmissionForm;
