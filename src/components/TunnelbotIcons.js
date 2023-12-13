import * as React from "react";
import TunnelbotCurtainSVG from "./icons/noun-wrapping-paper-28046-2B1C1C.svg"
import TunnelbotWeatherSVG from "./icons/noun-weather-1518210-2B1C1C.svg"
import TunnelbotCameraSVG from "./icons/noun-camera-817253-2B1C1C.svg"
import TunnelbotIrrigationSVG from "./icons/noun-water-1201714-2B1C1C.svg"
import TunnelbotHeatingSVG from "./icons/noun-heat-689784-2B1C1C.svg"
import TunnelbotLightsSVG from "./icons/noun-light-bulb-1508212-2B1C1C.svg"
import TunnelbotFarmSVG from "./icons/noun-farm-3686373-2B1C1C.svg"
import TunnelbotProfileSVG from "./icons/noun-profile-1385662-2B1C1C.svg"

function TunnelbotFarmIcon() {
  return (<img
    src={TunnelbotFarmSVG}
    style={{ height: 32, width: 32 }}
    alt="farm"/>)
}

function TunnelbotCurtainIcon() {
  return (<img
    src={TunnelbotCurtainSVG}
    style={{ height: 22, width: 22, transform: "rotate(-90deg)" }}
    alt="curtain"/>)
}

function TunnelbotWeatherIcon() {
  return (<img
    src={TunnelbotWeatherSVG}
    style={{ height: 24, width: 24 }}
    alt="weather"/>)
}

function TunnelbotCameraIcon() {
  return (<img
    src={TunnelbotCameraSVG}
    style={{ height: 24, width: 24 }}
    alt="camera"/>)
}

function TunnelbotIrrigationIcon() {
  return (<img
    src={TunnelbotIrrigationSVG}
    style={{height: 30, width: 30}}
    alt="irrigation"/>)
}

function TunnelbotHeatingIcon() {
  return (<img
    src={TunnelbotHeatingSVG}
    style={{height: 24, width: 24}}
    alt="heating"/>)
}

function TunnelbotLightsIcon() {
  return (<img
    src={TunnelbotLightsSVG}
    style={{height: 24, width: 24}}
    alt="lights"/>)
}

function TunnelbotProfileIcon() {
  return (<img
    src={TunnelbotProfileSVG}
    style={{ height: 28, width: 28 }}
    alt="profile"/>)
}

export {
  TunnelbotFarmIcon,
  TunnelbotCurtainIcon,
  TunnelbotWeatherIcon,
  TunnelbotCameraIcon,
  TunnelbotLightsIcon,
  TunnelbotHeatingIcon,
  TunnelbotIrrigationIcon,
  TunnelbotProfileIcon
}