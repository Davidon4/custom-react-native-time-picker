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
const DatePicker_1 = __importDefault(require("@/components/DatePicker"));
const vector_icons_1 = require("@expo/vector-icons");
const Button_1 = __importDefault(require("@/components/Button"));
const App = () => {
    const [selectedHour, setSelectedHour] = (0, react_1.useState)("12");
    const [selectedMinute, setSelectedMinute] = (0, react_1.useState)("00");
    const [selectedPeriod, setSelectedPeriod] = (0, react_1.useState)("AM");
    const handleHourChange = (hour) => {
        setSelectedHour(hour);
    };
    const handleMinuteChange = (minute) => {
        setSelectedMinute(minute);
    };
    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(DatePicker_1.default, { initialValue: selectedHour, onValueChange: handleHourChange, isHourPicker: true }),
        react_1.default.createElement(vector_icons_1.Entypo, { name: "dots-two-vertical", size: 24, color: "black" }),
        react_1.default.createElement(DatePicker_1.default, { initialValue: selectedMinute, onValueChange: handleMinuteChange, isHourPicker: false }),
        react_1.default.createElement(Button_1.default, { period: "AM", textStyle: { color: selectedPeriod === "AM" ? "#FFFFFF" : "#000000" }, buttonStyle: { backgroundColor: selectedPeriod === "AM" ? "#2FA500" : "#CCCCCC" }, onPress: () => handlePeriodChange("AM") }),
        react_1.default.createElement(Button_1.default, { period: "PM", textStyle: { color: selectedPeriod === "PM" ? "#FFFFFF" : "#000000" }, buttonStyle: { backgroundColor: selectedPeriod === "PM" ? "#2FA500" : "#CCCCCC" }, onPress: () => handlePeriodChange("PM") })));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
});
exports.default = App;
