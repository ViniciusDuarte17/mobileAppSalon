import {
  FormControl,
  Input,
} from "native-base";

interface PropsCustomInput {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const CustomImput: React.FC<PropsCustomInput> = ({
  label, 
  placeholder, 
  secureTextEntry = false,
  value,
  onChangeText
}) => {
  return (
    <FormControl mt={3} isRequired>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
};
