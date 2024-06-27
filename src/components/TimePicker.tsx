import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";
import {ArrowDown} from "../assets/icons";

interface Props {
  initialValue: string;
  onValueChange: (value: string) => void;
  isHourPicker: boolean;
}

const TimePicker: React.FC<Props> = ({ initialValue, onValueChange, isHourPicker }) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const hidePicker = () => {
    setIsPickerShow(false);
  };

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  const renderPicker = () => (
    <Modal isVisible={isPickerShow} onBackdropPress={hidePicker}>
      <View style={styles.pickerContainer}>
        <View style={styles.pickerRow}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(value) => handleValueChange(value)}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {isHourPicker
              ? [...Array(12).keys()].map((hour) => {
                  const hourValue = hour === 0 ? "12" : hour.toString().padStart(2, "0");
                  return <Picker.Item key={hour} label={hourValue} value={hourValue} />;
                })
              : [...Array(60).keys()].map((minute) => (
                  <Picker.Item
                    key={minute}
                    label={minute === 0 ? "00" : minute.toString().padStart(2, "0")}
                    value={minute.toString().padStart(2, "0")}
                  />
                ))}
          </Picker>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showPicker} style={styles.pickedDateContainer}>
        <Text style={styles.pickedDate}>{selectedValue}</Text>
        <ArrowDown/>
      </TouchableOpacity>
      {renderPicker()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },
  pickedDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#eee",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
    marginRight: 10,
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  pickerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    width: 100,
    height: 200,
  },
  pickerItem: {
    fontSize: 20,
  },
});

export default React.memo(TimePicker);