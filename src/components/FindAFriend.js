import { useState, useEffect } from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import Animal from './Animal';

function FindAFriend() {
  const [animals, setAnimals] = useState([]);

  // function to fetch animals and store in state
  async function fetchAnimals() {
    try {
      const response = await fetch('/api/pets');
      const responseJSON = await response.json();
      setAnimals(responseJSON.animals);
    } catch (err) {
      console.log(err);
    }
  }

  // upon initial render, run the fetchAnimals() function
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <Container maxW="container.xl">
      <SimpleGrid minChildWidth="350px" spacing="40px">
        {animals.map(pet => {
          return <Animal key={pet.id} pet={pet} />;
        })}
      </SimpleGrid>
    </Container>
  );
}

export default FindAFriend;
