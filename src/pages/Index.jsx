import { Box, Container, VStack, Text, Image, Heading, Flex, Link, HStack, Button, Input, Checkbox, CheckboxGroup, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999, category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: 199, category: "Wearables", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

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

      {/* Filters Section */}
      <Box py={10} textAlign="center">
        <Heading size="lg" mb={4}>Filter Products</Heading>
        <VStack spacing={4}>
          <CheckboxGroup colorScheme="teal" onChange={handleCategoryChange}>
            <Stack direction="row">
              <Checkbox value="Electronics">Electronics</Checkbox>
              <Checkbox value="Wearables">Wearables</Checkbox>
            </Stack>
          </CheckboxGroup>
          <Box width="50%">
            <Text mb={2}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
            <Slider
              min={0}
              max={1000}
              step={50}
              defaultValue={[0, 1000]}
              onChangeEnd={handlePriceChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} index={0} />
              <SliderThumb boxSize={6} index={1} />
            </Slider>
          </Box>
        </VStack>
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
                <Text fontSize="lg" color="gray.600">${product.price}</Text>
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