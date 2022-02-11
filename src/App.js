import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Navbar from './shared/layout/Navbar';
import Home from './home/Home';
import Inspiration from './home/Inspiration';
import AboutUs from './home/AboutUs';
import FindAFriend from './pets/FindAFriend';
// import Pets from './pets/Pets';
import Footer from './shared/layout/Footer';
import PetDetails from './pets/PetDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/findafriend" element={<FindAFriend />} />
          {/* <Route path="/findafriend" element={<Pets />} /> */}
          <Route path="/findafriend/:id" element={<PetDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
