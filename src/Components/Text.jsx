import React from "react";
import { Slide } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/react";

const SliderTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      company: "Google",
      testimonial: "This product has been a game-changer for my team. It has helped us to improve our productivity and efficiency significantly.",
    },
    {
      id: 2,
      name: "Jane Doe",
      company: "Microsoft",
      testimonial: "I am so glad I found this product. It is easy to use and has helped me to save a lot of time.",
    },
    {
      id: 3,
      name: "Peter Jones",
      company: "Amazon",
      testimonial: "This product is a must-have for any business. It is a great value for the price.",
    },
  ];

  return (
    <Slide>
      <Box p={4} bg="gray.100" borderRadius="md">
        <Heading as="h3" size="md">
          Testimonials
        </Heading>
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} p={4} border="1px solid" borderColor="gray.200" borderRadius="md" mb={4}>
            <Text>{testimonial.testimonial}</Text>
            <Heading as="h4" size="sm" mt={4}>
              {testimonial.name}
            </Heading>
            <Text color="gray.500">{testimonial.company}</Text>
          </Box>
        ))}
      </Box>
    </Slide>
  );
};

export default SliderTestimonial;
