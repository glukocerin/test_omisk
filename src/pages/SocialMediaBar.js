import React from "react";

import "../assets/css/social.media.bar.css";
import { ReactComponent as Facebook } from "../assets/img/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/insta.svg";
import { ReactComponent as Youtube } from "../assets/img/youtube.svg";

export default function SocialMediaBar() {
  return (
    <div className="social-media-bar">
        <Facebook className="icon" />
        <Instagram className="icon" />
        <Youtube className="icon" />
    </div>
  );
}
