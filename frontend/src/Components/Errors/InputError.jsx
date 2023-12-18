import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Text } from "@chakra-ui/react";

const InputError = ({ name, err }) => {
  return (
    <>
      <ErrorMessage
        errors={err}
        name={name} //
        render={({ message }) => (
          <Text fontSize={"12px"} px="1" color="red.400">
            {message}
          </Text>
        )}
      />
    </>
  );
};

export default InputError;
