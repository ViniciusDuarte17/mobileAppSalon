import { Avatar, VStack } from "native-base";
import React from "react";
import { Title } from "./Title";

export const Header: React.FC = () => {
  return (
    <VStack p={2} flexDir={"row"}>
      <Avatar
        size="xl"
        source={{
          uri: "https://instagram.fpnz7-1.fna.fbcdn.net/v/t51.2885-19/379790396_1540939723312725_6393431937156555465_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpnz7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=78z8D8AVyt0AX-r3G6X&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfAJco-6tM5MV2XUPN2ErfhaxAEf5_xZWeoGu-KOLwF-SA&oe=65173E3D&_nc_sid=f5838a",
        }}
      />
      <Title alignSelf={"center"} marginLeft={3}>
        Caila Rocha
      </Title>
    </VStack>
  );
};
