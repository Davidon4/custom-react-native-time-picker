import React from "react";
import {Text, Pressable, StyleSheet, ViewStyle, TextStyle} from "react-native";

interface ButtonProps  {
    period?: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    onPress?:() => void;
}

const Button: React.FC<ButtonProps> = ({period, buttonStyle, textStyle, onPress}) => {
    return(
        <Pressable onPress={onPress} style={[styles.container, buttonStyle]}>
          <Text style={[styles.time, textStyle]}>{period}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 18,
      backgroundColor: "#DFDFDF",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "lightgray",
      marginHorizontal: 4
    },
    time: {
      fontSize: 18,
      color: "black",
      marginRight: 10,
    },
  });
  
export default React.memo(Button);