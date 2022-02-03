import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/Logo';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import AboutUs from './components/AboutUs';
import FindAFriend from './components/FindAFriend';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}


<Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/inspiration' element={<Inspiration />}/>
          <Route path='/findafriend' element={<FindAFriend />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          {/* <Route path='/' element={< ={}/>}/>
          <Route path='//:id' element={</>}/> */}
</Routes>

<Footer />

    </ChakraProvider>
  );
}

export default App;
