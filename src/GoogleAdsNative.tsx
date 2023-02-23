import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { GoogleAdsNativeProps } from "../typings/GoogleAdsNativeProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function GoogleAdsNative({ style, yourName }: GoogleAdsNativeProps<CustomStyle>): ReactElement {
    return <HelloWorld name={yourName} style={style} />;
}
