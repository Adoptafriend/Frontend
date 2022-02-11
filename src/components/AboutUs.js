import { Container, Heading, Stack, Text, Image } from '@chakra-ui/react';

function AboutUs() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pb={{ base: 20, md: 28 }}
        pt={{ base: 10, md: 20 }}
      >
        <Image
          boxSize="xl"
          objectFit="cover"
          src="https://www.obol.info/wp-content/uploads/2019/08/OBOL_Puppy_FencedIn-768x788.jpg"
          alt=""
        />
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Adopt a Friend{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}>
          Adopt A Friend is the result of a collaborative effort among four
          aspiring developers. The tireless efforts of countless volunteers
          providing temporary homes to your next friend makes this project
          possible. We build on their efforts to ensure that all healthy and
          treatable pets find loving homes, by connecting them with you and
          other caring humans.
        </Text>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}>
          {' '}
          Our initiative “Open the cages” seeks to free pets from shelter cages.
          To achieve this, we provide a platform that removes barriers to new
          pet friend discovery. A platform in which pet lovers can locate their
          next best friend, all while in the comfort of their next best friend's
          future home. We don’t stop there. Through inpirational highlights, we
          break down misconceptions of shelter pets and celebrate the loving
          bond among humans and their animal companions. Through informative
          guidance to caring humans, we keep animal companions healthy and
          housed in loving homes.
        </Text>
      </Stack>
    </Container>
  );
}

export default AboutUs;
