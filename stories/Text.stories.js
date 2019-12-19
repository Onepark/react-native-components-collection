import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "@onepark.fr/react-native-component-text";

storiesOf("Text", module).add("default", () => <Text>Hello</Text>);

storiesOf("Text/with emphasis", module)
  .add("default", () => <Text autoEmphasize>Hello **world**</Text>)
  .add("with custom emphasis style", () => (
    <Text autoEmphasize emphasisStyle={{ textDecorationLine: "underline" }}>
      Hello **world**
    </Text>
  ))
  .add("with custom emphasis separator", () => (
    <Text autoEmphasize emphasisSeparator="__">
      Hello __world__ !
    </Text>
  ));
