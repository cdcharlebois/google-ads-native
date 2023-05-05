import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

// import { HelloWorld } from "./components/HelloWorld";
import { GoogleAdsNativeProps } from "../typings/GoogleAdsNativeProps";
import { BannerAd, TestIds, BannerAdSize } from "react-native-google-mobile-ads";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function GoogleAdsNative({ unitId, testMode }: GoogleAdsNativeProps<CustomStyle>): ReactElement {
    const adUnitId = testMode.status !== "available" || testMode.value === true ? TestIds.BANNER : unitId;
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        />
    );
}
