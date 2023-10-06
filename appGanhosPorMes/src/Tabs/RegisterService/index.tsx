import React, { useState, useContext, useEffect } from "react";
import { VStack, Image, useToast } from "native-base"
import { Title } from "../../componentes/Title";
import { section } from "../../utils/section";
import { CustomImput } from "../../componentes/CustomInput";
import { CustomButton } from "../../componentes/CustomButton";
import { Imessage, inputService } from "../../interface/iTypeService";
import { insertService } from "../../services/listService";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { BarProgress } from "../../componentes/Progress";


export const RegisterService = () => {
  const {counter, setCaunter } = useContext(GlobalStateContext);
  const [data, setData] = useState({} as inputService);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  function updateData (id: string, valor: string) {
    setData({...data, [id]: valor})
  };

  useEffect(() => {
    setCaunter(counter)
    
  }, [])

  async function submitService() {
    setProgress(87)
    setLoading(true)
    const result: Imessage = await insertService(data);

    if (result) {
      
      toast.show({
        title: "Sucesso",
        description: `${result.message}`,
        backgroundColor: "green.500",
      });
      
      setData({
        typeService: "",
        valueService: "",
        amount: "",
      });

      if (setCaunter) {
        setCaunter(counter + 1);
      } 
    
    } else {
      toast.show({
        title: "Campo vazio",
        description: `Precisa preencher todos os campos`,
        backgroundColor: "red.500",
      });
    }
    
    setLoading(false)
  }

    return (
      <VStack flexDir={"column"} flex={1} bgColor={"white"}>
        <Title p={3} color={"blue.800"} position="center">
          Área de registro de serviços
        </Title>
        <Image
          marginTop={7}
          alignSelf={"center"}
          w={100}
          h={75}
          source={require("../../assets/financeiro.jpg")}
          alt="Logo do financeiro"
        />

        <VStack flex={1} p={4} justifyContent={"center"}>
          {section.registerService.map((list) => (
            <CustomImput
              key={list.id}
              placeholder={list.placeholder}
              label={list.label}
              value={data[list.name]}
              onChangeText={(text) => updateData(list.name, text)}
            />
          ))}
          {!loading ? (
            <CustomButton onPress={submitService}>Registrar</CustomButton>
          ) : (
            <BarProgress value={ progress} />
          )}
        </VStack>
      </VStack>
    );
}