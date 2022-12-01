import React from "react";
import { View, Text, image, Scrollview } from "react-native";

export default function Start() {
  return (
    <View>
      <Scrollview showVerticalScrollIndicator={false}>
        <View>
          <image source={require("../../assests/icons/logo3.png")} />
          <Text>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "}
            o melhor nível.
          </Text>
        </View>
      </Scrollview>
    </View>
  );
}
