import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import AboutUs from './components/AboutUs';
import FindAFriend from './components/FindAFriend';
import Footer from './components/Footer';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/findafriend" element={<FindAFriend />} />
          <Route path="/findafriend/:id" element={<PetDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
