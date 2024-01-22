import React from "react";
import { Box, Heading, Text, Link, VStack, Grid, UnorderedList, ListItem } from "@chakra-ui/react";

const TrendingBlogs = ({arr,title}) => {
  
  return (
    <>
      <Heading textAlign={'center'} color={'#b52828'} size="lg">{title}</Heading>

      <Grid mt='9' templateColumns={"repeat(2,1fr)"} spacing={4} align="stretch" gap='3'>
        {arr.map((blog, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
            <UnorderedList as="h3" size="md" mb={2}>
              <ListItem>
                <Text m='0' color={'#b52828'} fontWeight={'bold'}>{blog.title}</Text>
                <UnorderedList>
                  <ListItem>
                    {blog.content?.map((el,ind) => (
                      <Text m='0' index={ind}>{el}</Text>
                    ))}
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default TrendingBlogs;
