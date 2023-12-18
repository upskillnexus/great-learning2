import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const CreativityProjects = ({ title, subTitle, list }) => {
  return (
    <Box textAlign="left" w="full">
      {title && (
        <Heading fontWeight="medium" fontSize={{ base: "20px", md: "3xl" }} mb="4">
          {title}
        </Heading>
      )}
      {subTitle && <Text>{subTitle}</Text>}
      {list && (
        <UnorderedList spacing="2" pl="4">
          {list.map((ele, i) => (
            <ListItem key={i}>
              <Text>{ele}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};

export default CreativityProjects;
