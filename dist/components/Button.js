"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ period, buttonStyle, textStyle, onPress }) => {
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: onPress, style: [styles.container, buttonStyle] },
        react_1.default.createElement(react_native_1.Text, { style: [styles.time, textStyle] }, period)));
};
const styles = react_native_1.StyleSheet.create({
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
exports.default = react_1.default.memo(Button);
