import { Box, Center, Progress, VStack } from "native-base";

interface PropsProgress {
  value: number;
}

export const BarProgress: React.FC<PropsProgress> = ({ value }) => {
  return (
    <Center mt={20} w="100%">
      <Box w="90%" maxW="400">
        <Progress
          size="md" mb={4}
          bg="coolGray.100"
          _filledTrack={{
            bg: "lime.500",
          }}
          value={value}
          mx="4"
        />
      </Box>
    </Center>
  );
};