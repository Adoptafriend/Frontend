import React from 'react';
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    Image,
  } from '@chakra-ui/react';
  
function AboutUs() {
    return (
      <Container maxW={'5xl'} >
          
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pb={{ base: 20, md: 28 }}
          pt={{ base: 10, md: 20 }}
          >
         <Image
          boxSize='xl'
          objectFit='cover'
          src='https://www.obol.info/wp-content/uploads/2019/08/OBOL_Puppy_FencedIn-768x788.jpg'
          alt=""
        />
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Adopt a Friend {' '}
            <Text as={'span'} color={'orange.400'}>
              made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}>
          The Adopt A Friend is the result of a collaborative effort among four aspiring developers. The success and the magnitude of this project is largely due to their team of volunteers’ tireless efforts to make a difference. Our goal is to help potential adopters, when looking to get a new pet and ensure that all healthy and treatable pets find loving homes. We do this by breaking down misconceptions surrounding shelter pets and celebrating the unique bond between every pet and parent.
          </Text>
          <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}> Our initiative “Open the cages” is an outcome of numerous cases where pets were confined in cages either in shelters and other places. 
          We’re working to help the good people at shelters and rescue groups find homes for their pets. But we don’t stop there. We also provide useful and informative information on the human/companion animal relationship to help keep pets healthy and permanently in their loving homes. From the comfort of their personal computers, pet lovers can search for a pet that best matches their needs. They can then reference a shelter’s web page and discover what services it offers.

          </Text>
          
         
        </Stack>
      </Container>
    );
  };
  
export default AboutUs;
