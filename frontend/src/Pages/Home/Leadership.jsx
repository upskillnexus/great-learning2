import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import GetUpskillnexus from "../../Components/Text/GetUpskillnexus";

const Leadership = () => {
  const initiatives = [
    {
      text: "Mobility - India’s first digital mobility app for Insurance on Palm OS and WinCE (2001)",
    },
    {
      text: "Telecom & Wireless - India’s First Short code SMS service 58888 (2001); India's First WAP site; Pioneering Convergent Billing System; EBPP",
    },
    {
      text: "Global impact- Mobile Money platform",
    },
    {
      text: "Insurance Pioneering initiatives - Instant Issuance (life/ SME policies); Active DWH & Data Lake",
    },
  ];

  const personDetails = [
    {
      text: "A passionate cyber security researcher with 15+ years of experience, he enjoys the opportunities which often lead him to explore the toughest of breakthroughs in the Cybersecurity domain."
    },
    {
      text: "A renowned figure in cyber security, Sunil has presented at conferences like Black Hat USA and OWASP App Sec Europe."
    },
    {
      text: "Sunil also specializes in developing AI-driven cyber security and computer vision products, showcasing a broad range of expertise."
    },
    {
      text: "Over the years, his work around identifying and reporting security vulnerabilities has earned him credits and accolades from major brands, including Microsoft, LinkedIn, Yahoo, Nokia, Apache, PayPal, and Oracle."
    },
    {
      text: "He has hands-on experience building AI-driven Computer Vision and Cyber Security Products (Attack Surface Monitoring, Software Composition Analysis, Vulnerability Management, GRC, v-KYC auditor, Document Management, Payment Systems, and many more!)"
    }
  ];

  return (
    <Flex w="full" justify={"center"} minH={"80vh"}>
      <Box
        w={{ base: "full", md: "90%", lg: "80%" }}
        m="5"
        border="2px solid #b9292f"
        rounded={"md"}
        p={{ base: 5, md: "8" }}
      >
        <Box>
          <Heading color="#b9292f">
            Our Technology Curriculum Partners and Expert Leadership Team
          </Heading>
          <GetUpskillnexus text={"Dipak Nair"} />
          <Text  fontWeight={"medium"}>
            {"Founder & Managing Director – X-Biz TechVentures"}
          </Text>

          <Text>
            A distinguished industry leader and currently a serial entrepreneur
            with 2 ½ Decades of technology leadership experience in various Top
            Enterprises. In a highly successful corporate career he became one
            of the youngest CTOs in Tata Group (as Ex CTO of TataAIG) and was a
            fast-growing Tech leader within ICICI Group while leading technology
            architecture at ICICI Prudential Life Insurance. He is known as an
            Innovator and an expert digital enterprise architect. He has many
            Industry/ Country first initiatives to his credit.
          </Text>

          <Text>
            One of the very few who have lead both Life and General Insurance
            tech, his career span as CTO of TataAIG General Insurance (2016-22);
            SVP IT ICICI Prudential Life Insurance (2004-16); Aviva
            Life(2002-04); Lifetree Convergence Ltd (2000-02) and others
            starting from 1998, was full of pioneering initiatives. He was
            instrumental in transforming TataAIG and ICICI Prudential into
            technologically advanced benchmarks with best in industry metrics
            across automation, digitalization and autonomous business
            capabilities.{" "}
          </Text>
          <Text>
            A Bachelor of Technology - Computer systems with specialization in
            “Strategic use of IT” and an early starter in corporate life, Dipak
            was among the youngest to grow up the career ladder eventually
            becoming one of the youngest CTOs (Large enterprise) within the Tata
            Group after being among the fast-growing young leaders within ICICI
            Group.{" "}
          </Text>
          <Text>
            His zeal to make a larger impact beyond boundaries lead him to
            influence group level initiatives with active contributions within
            both TATA and ICICI Group (Across BFSI, e-commerce, Manufacturing,
            Digital Consumer App and other sectors). He also invested in setting
            up Tech startups and has been instrumental in creating
            industry-leading capabilities in Computer vision, AI, information
            security, Digital SFA and low-code platforms among others
          </Text>

          <Box marginTop={"8"}>
            <UnorderedList textAlign={"start"}>
              <Text>
                He has many country firsts and innovations to his credit:
              </Text>
              {initiatives?.map((ele, i) => (
                <ListItem key={i}>{ele?.text}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>

        <Box>
          <GetUpskillnexus text={"Sunil Yadav"} />
          <Text fontWeight={"bold"}>
            Managing Director – SecureNexus; Co-Founder x-Biz TechVentures
          </Text>
          <Box>
            <Text>
              A distinguished information security expert, Lead trainer and
              speaker (Global Black Hat Conference), he is one of the top cyber
              security talents in the country and part of the global black hat
              community spearheading cyber resilience. He is the founder of
              SecureNexus and Heads Technology Research and Development,
              Information Security & Risk Management at X-Biz TechVentures.
            </Text>
          </Box>

          <Box marginTop={"8"}>
            <UnorderedList textAlign={"start"}>
              <Text>
                He has many country firsts and innovations to his credit:
              </Text>
              {personDetails?.map((ele, i) => (
                <ListItem key={i}>{ele?.text}</ListItem>
              ))}
            </UnorderedList>
          </Box>

        </Box>

          <Text fontWeight={'bold'}>Course Curriculum and Lab Challenges have been designed by our Experts.</Text>


      </Box>
    </Flex>
  );
};

export default Leadership;
