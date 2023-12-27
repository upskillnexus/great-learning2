import { Box, Text } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const FormError = ({ err, name = "nameOfTag" }) => {
  return (
    <Box w="full" mt="2px">
      <ErrorMessage
        errors={err}
        name={name}
        render={({ message }) => (
          <Text fontSize={"12px"} color="red.400">
            {message}
          </Text>
        )}
      />
    </Box>
  );
};

export default FormError;
