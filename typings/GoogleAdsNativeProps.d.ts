/**
 * This file was generated from GoogleAdsNative.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type SizeEnum = "ANCHORED_ADAPTIVE_BANNER" | "BANNER" | "FULL_BANNER" | "INLINE_ADAPTIVE_BANNER" | "LARGE_BANNER" | "LEADERBOARD" | "MEDIUM_RECTANGLE";

export interface GoogleAdsNativeProps<Style> {
    name: string;
    style: Style[];
    unitId: string;
    testMode: DynamicValue<boolean>;
    size: SizeEnum;
}

export interface GoogleAdsNativePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    unitId: string;
    testMode: string;
    size: SizeEnum;
}
