import { Avatar, VStack } from "native-base";
import { TouchableOpacity } from "react-native"
import React, {useEffect, useState} from "react";
import { Title } from "./Title";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface PropsHeader {
  name?: string;
}

export const Header: React.FC<PropsHeader> = ({name}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function pegarImageLocal() {
      if (image == null) {
        const img = await AsyncStorage.getItem("img");
        if (img) {
          setImage(img);
        }
      }
    }
    pegarImageLocal();
  }, []);

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      AsyncStorage.setItem('img', result.assets[0].uri )
    }
  };
 

  return (
    <VStack p={2} flexDir={"row"}>
      <TouchableOpacity onPress={pickImage}>
        <Avatar
          size="xl"
          source={{
            uri: image,
          }}
        />
      </TouchableOpacity>
      <Title alignSelf={"center"} marginLeft={3}>
        {name}
      </Title>
    </VStack>
  );
};
