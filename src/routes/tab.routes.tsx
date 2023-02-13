import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import PlantSelect from "@src/screens/PlantSelect";
import MyPlants from "@src/screens/MyPlants";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.green,
        tabBarInactiveTintColor: theme.COLORS.heading,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <Tab.Screen
        name="PlantSelect"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Novas Planta",
        }}
      />
      <Tab.Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          tabBarLabel: "Minhas Plantas",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
