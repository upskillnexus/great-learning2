import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

const DySelectBx = ({
  onChange,
  values,
  name,
  placeholder = "",
  title,
  inpSize = "md",
  readOnly = false,
  value,
  defaultValue = "",
  lable = false,
}) => {
  return (
    <>
      <Flex w="full" flexDir={"column"}>
        <Text fontWeight={"medium"} lineHeight={1}>
          {title}
        </Text>
        <Box w="full" mt="1px">
          <Select
            onChange={onChange}
            name={name}
            value={value}
            placeholder={placeholder}
            size={inpSize}
            readOnly={readOnly}
          >
            {values.map((ele, i) => (
              <option value={ele.value || ele.name} key={i}>
                {ele.name}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
    </>
  );
};

export default DySelectBx;
