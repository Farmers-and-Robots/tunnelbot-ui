import * as React from 'react'
import TunnelbotCurtainSVG from "./icons/noun-wrapping-paper-28046-2B1C1C.svg"
import TunnelbotWeatherSVG from "./icons/noun-weather-1518210-2B1C1C.svg"
import TunnelbotCameraSVG from "./icons/noun-camera-817253-2B1C1C.svg"
import TunnelbotIrrigationSVG from "./icons/noun-water-1201714-2B1C1C.svg"
import TunnelbotHeatingSVG from "./icons/noun-heat-689784-2B1C1C.svg"
import TunnelbotLightsSVG from "./icons/noun-light-bulb-1508212-554949.svg"

function TunnelbotCurtainIcon() {
    return (<img
            src={TunnelbotCurtainSVG}
            style={{ height: 24, width: 24, transform: "rotate(-90deg)" }}/>)
};

function TunnelbotWeatherIcon() {
    return (<img
        src={TunnelbotWeatherSVG}
        style={{ height: 24, width: 24 }}/>)
};

function TunnelbotCameraIcon() {
    return (<img
        src={TunnelbotCameraSVG}
        style={{ height: 24, width: 24 }}/>)
};

function TunnelbotIrrigationIcon() {
    return (<img
        src={TunnelbotIrrigationSVG}
        style={{height: 24, width: 24}}/>)
};

function TunnelbotHeatingIcon() {
    return (<img
        src={TunnelbotHeatingSVG}
        style={{height: 24, width: 24}}/>)
};

function TunnelbotLightsIcon() {
    return (<img
        src={TunnelbotLightsSVG}
        style={{height: 24, width: 24}}/>)
};

export {
    TunnelbotCurtainIcon,
    TunnelbotWeatherIcon,
    TunnelbotCameraIcon,
    TunnelbotLightsIcon,
    TunnelbotHeatingIcon,
    TunnelbotIrrigationIcon
}