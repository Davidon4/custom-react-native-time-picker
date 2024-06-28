import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import TimePicker from "./src/components/TimePicker";
import { Entypo } from '@expo/vector-icons';
import Button from "./src/components/Button";

const CustomTimePicker = () => {
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  const handleHourChange = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleMinuteChange = (minute: string) => {
    setSelectedMinute(minute);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <View style={styles.container}>
      <TimePicker
        initialValue={selectedHour}
        onValueChange={handleHourChange}
        isHourPicker={true}
      />
      <Entypo name="dots-two-vertical" size={24} color="black" />
      <TimePicker
        initialValue={selectedMinute}
        onValueChange={handleMinuteChange}
        isHourPicker={false}
      />
      <Button 
        period="AM" 
        textStyle={{ color: selectedPeriod === "AM" ? "#FFFFFF" : "#000000" }} 
        buttonStyle={{ backgroundColor: selectedPeriod === "AM" ? "#2FA500" : "#CCCCCC" }}
        onPress={() => handlePeriodChange("AM")}
      />
      <Button 
        period="PM" 
        textStyle={{ color: selectedPeriod === "PM" ? "#FFFFFF" : "#000000" }} 
        buttonStyle={{ backgroundColor: selectedPeriod === "PM" ? "#2FA500" : "#CCCCCC" }}
        onPress={() => handlePeriodChange("PM")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
});

export default CustomTimePicker;