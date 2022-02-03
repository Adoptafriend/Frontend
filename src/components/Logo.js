
import {
  // Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useBreakpointValue,
  } from '@chakra-ui/react';

import React from 'react';

function Logo() {
  return (
  <Flex minWidth={'175px'}>
  <Image
    boxSize='45px'
    objectFit='cover'
    src='/images/logo.png'
    alt=""
  />
  <Text
    textAlign={useBreakpointValue({ base: 'center', md: 'left'})}
    mt={'15px'}
    fontFamily={'heading'}
    fontWeight={'800'}
    color={useColorModeValue('#2F190D', 'white')}
  >Adopt a Friend
  </Text>
  </Flex>
  )}

export default Logo;
