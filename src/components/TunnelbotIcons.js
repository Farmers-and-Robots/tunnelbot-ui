import * as React from "react";
import FaRLogo from "../assets/far-logo-2-color.png";
import TunnelbotCameraSVG from "../assets/noun-camera-817253-2B1C1C.svg";
import TunnelbotFarmSVG from "../assets/noun-farm-3686373-2B1C1C.svg";
import TunnelbotHeatingSVG from "../assets/noun-heat-689784-2B1C1C.svg";
import TunnelbotLightsSVG from "../assets/noun-light-bulb-1508212-2B1C1C.svg";
import TunnelbotProfileSVG from "../assets/noun-profile-1385662-2B1C1C.svg";
import TunnelbotIrrigationSVG from "../assets/noun-water-1201714-2B1C1C.svg";
import TunnelbotWeatherSVG from "../assets/noun-weather-1518210-2B1C1C.svg";
import TunnelbotCurtainSVG from "../assets/noun-wrapping-paper-28046-2B1C1C.svg";

function TunnelbotFarmIcon() {
  return (
    <img src={TunnelbotFarmSVG} style={{ height: 32, width: 32 }} alt="farm" />
  );
}

function TunnelbotCurtainIcon() {
  return (
    <img
      src={TunnelbotCurtainSVG}
      style={{ height: 22, width: 22, transform: "rotate(-90deg)" }}
      alt="curtain"
    />
  );
}

function TunnelbotWeatherIcon() {
  return (
    <img
      src={TunnelbotWeatherSVG}
      style={{ height: 24, width: 24 }}
      alt="weather"
    />
  );
}

function TunnelbotCameraIcon() {
  return (
    <img
      src={TunnelbotCameraSVG}
      style={{ height: 24, width: 24 }}
      alt="camera"
    />
  );
}

function TunnelbotIrrigationIcon() {
  return (
    <img
      src={TunnelbotIrrigationSVG}
      style={{ height: 30, width: 30 }}
      alt="irrigation"
    />
  );
}

function TunnelbotHeatingIcon() {
  return (
    <img
      src={TunnelbotHeatingSVG}
      style={{ height: 24, width: 24 }}
      alt="heating"
    />
  );
}

function TunnelbotDevicesIcon() {
  return (
    <img
      src={TunnelbotLightsSVG}
      style={{ height: 24, width: 24 }}
      alt="lights"
    />
  );
}

function TunnelbotProfileIcon() {
  return (
    <img
      src={TunnelbotProfileSVG}
      style={{ height: 28, width: 28 }}
      alt="profile"
    />
  );
}

function FaRLogoPNG() {
  return (
    <img
      src={FaRLogo}
      style={{ height: 60, width: 60 }}
      alt="farmers and robots"
    />
  );
}

export {
  TunnelbotFarmIcon,
  TunnelbotCurtainIcon,
  TunnelbotWeatherIcon,
  TunnelbotCameraIcon,
  TunnelbotDevicesIcon,
  TunnelbotHeatingIcon,
  TunnelbotIrrigationIcon,
  TunnelbotProfileIcon,
  FaRLogoPNG,
};
