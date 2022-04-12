import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../src/screens/Home";
import { AddEvent } from "../src/screens/AddEvent";
import { EventDetails } from "../src/screens/EventDetails";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="AddEvent" component={AddEvent} />
      <Screen name="EventDetails" component={EventDetails} />
    </Navigator>
  );
}
