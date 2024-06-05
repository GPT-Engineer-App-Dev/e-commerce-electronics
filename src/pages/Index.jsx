import { Box, Container, VStack, Text, Image, Heading, Flex, Link, HStack, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Search Bar */}
      <Box py={10} textAlign="center">
        <Input
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          size="lg"
          width="50%"
        />
      </Box>

      {/* Products Section */}
      <Box py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <Flex wrap="wrap" justifyContent="center" gap={6}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text fontSize="lg" color="gray.600">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10} mt={10}>
        <Flex justifyContent="space-between" alignItems="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;