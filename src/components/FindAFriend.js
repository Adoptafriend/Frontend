import React, { useState, useEffect } from 'react';
import Animal from './Animal';
import {
  Flex,
  Spacer,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

function FindAFriend() {
  // const jsonData = require('../pet.json');
  // const animals = jsonData.result.animals;
  // console.log(animals.length);
  const [animals, setAnimals]=useState([])

  //function to fetch animals and store in state
  async function fetchAnimals(){
    try{
        const response = await fetch('/pet.json');
        // console.log(response);
        const responseJSON = await response.json()
        // console.log(responseJSON);
        //updates state with Animals
        setAnimals(responseJSON.result.animals)
    } catch(err) {
      console.log(err)
    }
  }

  //upon initial render, run the fetchAnimals() function
  useEffect(() => {
    fetchAnimals()
  }, [])
  return (
    <Container maxW="container.xl">
    <SimpleGrid minChildWidth='350px' spacing='40px'>
        {animals.map((pet)=>{
          console.log(pet.animal.id);
            return <Animal key={pet.animal.id} pet={pet}/>
        })}
    </SimpleGrid>
    </Container>
);
}

export default FindAFriend;
