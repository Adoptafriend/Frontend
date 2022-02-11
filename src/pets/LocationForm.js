import {
  Container,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

function LocationForm(props) {
  //handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit: ' + e.target.zip.value);
    props.onZipChange(e.target.zip.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="zip">Location</FormLabel>
        <Input
          // htmlSize={7}
          width="auto"
          type="text"
          id="zip"
          name="zip"
          placeholder="Zip Code"
          pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
          required
        />
        <Button type="submit">Search</Button>
      </FormControl>
    </form>
  );
}

export default LocationForm;
