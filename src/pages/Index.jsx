import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20} direction={{ base: "column", md: "row" }}>
        {/* Sidebar */}
        <Box w={{ base: "100%", md: "25%" }} bg="gray.100" p={5}>
          <VStack spacing={4} align="start">
            <Heading size="md">My Blog</Heading>
            <HStack spacing={2}>
              <FaHome />
              <Link href="#">Home</Link>
            </HStack>
            <HStack spacing={2}>
              <FaUser />
              <Link href="#">About</Link>
            </HStack>
            <HStack spacing={2}>
              <FaEnvelope />
              <Link href="#">Contact</Link>
            </HStack>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box w={{ base: "100%", md: "75%" }} p={5}>
          <VStack spacing={8} align="start">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Blog Post Image" />
              <Heading size="lg" mt={4}>Blog Post Title</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Blog Post Image" />
              <Heading size="lg" mt={4}>Another Blog Post</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;