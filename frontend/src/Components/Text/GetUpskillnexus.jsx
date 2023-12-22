import { Box } from "@chakra-ui/react";
import React from "react";

const GetUpskillnexus = ({ text, bold }) => {
  return (
    <>
      <Box m="1" as="span" color="#b9292f" fontWeight={bold || "900"}>
        {text}
      </Box>
    </>
  );
};

export default GetUpskillnexus;
