import React from "react";
import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";

const TrendingBlogs = () => {
  // Data: Trending blog posts
  const trendingBlogs = [
    {
      title: "Blog Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      link: "https://blog.didm.in/blogpost1",
    },
    {
      title: "Blog Post 2",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "https://blog.didm.in/blogpost2",
    },
    // Add more blog entries as needed
  ];

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg">
        Trending Blogs
      </Heading>

      {trendingBlogs.map((blog, index) => (
        <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="md" mb={2}>
            {blog.title}
          </Heading>
          <Text>{blog.content}</Text>
          <Link color="teal.500" href={blog.link} target="_blank" mt={2} display="block">
            Read More
          </Link>
        </Box>
      ))}
    </VStack>
  );
};

export default TrendingBlogs;
