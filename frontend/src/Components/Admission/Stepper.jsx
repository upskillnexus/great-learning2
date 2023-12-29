import React from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";

const AdmissionStapper = ({ step }) => {
  const steps = [
    { title: "Step One", description: "Your Details" },
    { title: "Step Two", description: "Address & Mobile" },
    { title: "Step Three", description: "Review & Submit" },
    // { title: "Step Three", description: "Payment " },
  ];
  return (
    <>
      <Stepper index={step} colorScheme="red" mb="8">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step?.title}</StepTitle>
              <StepDescription>{step?.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default AdmissionStapper;
