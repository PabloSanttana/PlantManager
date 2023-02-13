import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@src/screens/Home";
import UserIndentification from "@src/screens/UserIndentification";
import Confirmation from "@src/screens/Confirmation";
import PlantSave from "@src/screens/PlantSave";

import AuthRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="UserIndentification"
        component={UserIndentification}
      />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
