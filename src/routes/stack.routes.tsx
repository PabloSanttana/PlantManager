import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@src/screens/Home";
import UserIndentification from "@src/screens/UserIndentification";
import Confirmation from "@src/screens/Confirmation";
import PlantSelect from "../screens/PlantSelect";

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
      <Stack.Screen name="PlantSelect" component={PlantSelect} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
