import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const DyInput = ({
  onChange,
  value,
  type = "text",
  name,
  placeholder = "",
  title,
  inpSize = "md",
  readOnly = false,
  defaultValue = "",
  lable = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Flex w="full" flexDir={"column"}>
        <Text fontWeight={"medium"} lineHeight={1}>
          {title}
        </Text>
        <Box w="full" mt="1px">
          <Input
            size={inpSize}
            lable={lable}
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
            readOnly={readOnly}
            placeholder={placeholder}
            name={name}
            endContent={
              type == "password" && (
                <Button bg="red" type="button" onClick={toggleVisibility}>
                  {isVisible ? <IoEyeOutline /> : <IoIosEyeOff />}
                </Button>
              )
            }
            type={type == "password" ? (isVisible ? "text" : "password") : type}
          />
        </Box>
      </Flex>
    </>
  );
};

export default DyInput;
