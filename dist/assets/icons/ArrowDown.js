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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowDown = ArrowDown;
const React = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
function ArrowDown(props) {
    return (React.createElement(react_native_svg_1.default, Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: 25, height: 25, fill: "none" }, props),
        React.createElement(react_native_svg_1.Path, { stroke: "#4B4B4B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m6.07 9.297 6 6 6-6", style: {
                stroke: "#4b4b4b",
                stroke: "color(display-p3 .2941 .2941 .2941)",
                strokeOpacity: 1,
            } })));
}
