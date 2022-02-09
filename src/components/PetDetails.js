import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,

  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
  import React, { useState, useEffect } from 'react';
  import { Link, useParams } from "react-router-dom";



  export default function Simple() {
    let { id } = useParams();
    const [pet, setPet]=useState({})


    async function fetchPetDetails(){
        try{
          const response = await fetch('/api/getPets');
            // console.log(response);
            const responseJSON = await response.json()
            console.log(responseJSON);
            //updates state with Animals
            const responsePet = responseJSON.result.animals.find(animal => parseInt(animal.animal.id) === parseInt(id))
            console.log(responsePet);
            setPet(responsePet);
        } catch(err) {
          console.log(err)
        }
      }

      //upon initial render, run the fetchAnimals() function
      useEffect(() => {
        fetchPetDetails()
      }, [id])

    return (

      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'pet image'}
              src={pet.animal?.primary_photo_cropped_url}
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {pet.animal?.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {pet.animal?.breeds_label}
              </Text>
              <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    {pet.animal?.age} • {pet.animal?.sex} • {pet.animal?.size}
              </Text>

            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>

              </VStack>

              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Facts about me
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    HOUSE-TRAINED:
                    </Text>{' '}
                   {pet.animal?.attributes.includes('House trained') ? 'Yes' : 'No'}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    VACCINATION UP TO DATE:
                    </Text>{' '}
                   {pet.animal?.attributes.includes('Shots Current') ? 'Yes' : 'No'}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    SPAYED/NEUTERD:
                    </Text>{' '}
                   {pet.animal?.attributes.includes('Spay/Neuter') ? 'Yes' : 'No'}
                  </ListItem>
                  {/* <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem> */}
                </List>
              </Box>
            </Stack>


                <Text fontSize={'lg'}>
                {pet.animal?.description}
                </Text>

            {/* <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button> */}

            {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>


    );
  }
