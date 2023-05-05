import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

// import { HelloWorld } from "./components/HelloWorld";
import { GoogleAdsNativeProps } from "../typings/GoogleAdsNativeProps";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function GoogleAdsNative({ unitId, testMode, size }: GoogleAdsNativeProps<CustomStyle>): ReactElement {
    const adUnitId = testMode.status !== "available" || testMode.value === true ? TestIds.BANNER : unitId;
    return <BannerAd unitId={adUnitId} size={size} requestOptions={{ requestNonPersonalizedAdsOnly: true }} />;
}
