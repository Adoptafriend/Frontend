import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Link,
} from '@chakra-ui/react';


function Animal({ pet }) {
  // console.log(pet);
  return (
    <Link href={`/findafriend/${pet.id}`}>
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">

        <Image
          src={pet.primary_photo_cropped?.medium ? pet.primary_photo_cropped.medium :'https://via.placeholder.com/300'}
          boxSize='350px'
          // width="450px"
          objectFit='contain'
          alt={`Picture of ${pet.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          {/* <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box> */}
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {pet.name}
            </Box>

            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip> */}
          </Flex>
          <Box
              fontSize="sm"
              fontWeight="normal"
              as="h4"

              lineHeight="tight"
              isTruncated>
              {pet.breeds_label}
            </Box>
          {/* <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex> */}
        </Box>
      </Box>
    </Flex>
    </Link>
  );
}


export default Animal;
