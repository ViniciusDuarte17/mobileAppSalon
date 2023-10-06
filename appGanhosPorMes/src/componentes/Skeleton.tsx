import { Center, Skeleton, VStack } from "native-base";


export const CustomSkeleton = () => {
  return (
    <Center alignSelf={'center'} w="90%" pt={5}>
      <VStack
        w="100%"
        maxW="400"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <Skeleton h="40" />
        <Skeleton.Text px="4" />
        <Skeleton px="4" my="4" rounded="md" startColor="blue.800" />
      </VStack>
    </Center>
  );
};
