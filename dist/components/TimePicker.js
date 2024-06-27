"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_modal_1 = __importDefault(require("react-native-modal"));
const picker_1 = require("@react-native-picker/picker");
const icons_1 = require("../assets/icons");
const TimePicker = ({ initialValue, onValueChange, isHourPicker }) => {
    const [isPickerShow, setIsPickerShow] = (0, react_1.useState)(false);
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(initialValue);
    const showPicker = () => {
        setIsPickerShow(true);
    };
    const hidePicker = () => {
        setIsPickerShow(false);
    };
    const handleValueChange = (value) => {
        setSelectedValue(value);
        onValueChange(value);
    };
    const renderPicker = () => (react_1.default.createElement(react_native_modal_1.default, { isVisible: isPickerShow, onBackdropPress: hidePicker },
        react_1.default.createElement(react_native_1.View, { style: styles.pickerContainer },
            react_1.default.createElement(react_native_1.View, { style: styles.pickerRow },
                react_1.default.createElement(picker_1.Picker, { selectedValue: selectedValue, onValueChange: (value) => handleValueChange(value), style: styles.picker, itemStyle: styles.pickerItem }, isHourPicker
                    ? [...Array(12).keys()].map((hour) => {
                        const hourValue = hour === 0 ? "12" : hour.toString().padStart(2, "0");
                        return react_1.default.createElement(picker_1.Picker.Item, { key: hour, label: hourValue, value: hourValue });
                    })
                    : [...Array(60).keys()].map((minute) => (react_1.default.createElement(picker_1.Picker.Item, { key: minute, label: minute === 0 ? "00" : minute.toString().padStart(2, "0"), value: minute.toString().padStart(2, "0") }))))))));
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: showPicker, style: styles.pickedDateContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles.pickedDate }, selectedValue),
            react_1.default.createElement(icons_1.ArrowDown, null)),
        renderPicker()));
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = react_1.default.memo(TimePicker);
