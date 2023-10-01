import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type ListaTelas = {
  Login: undefined;
  Cadastro: undefined;
  Tabs: undefined;
}

export type NavigationProps< T extends keyof ListaTelas > = {
  replace(arg0: string): unknown;
  navigation: NativeStackNavigationProp<ListaTelas, T>;
  route: RouteProp<ListaTelas, T>
}