import { HStack, Heading, Spinner } from "native-base";

export const MySpinner = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner color="blue.500" size="sm"/>
      <Heading color="blue.500" fontSize="md">
        Carregando
      </Heading>
    </HStack>
  );
};