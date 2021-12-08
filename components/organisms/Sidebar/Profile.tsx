import React, { useCallback, useEffect, useState } from "react";
import { getProfile } from "../../../services/player";
import Cookies from "js-cookie";
import { JWTPayloadTypes, PlayerTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";

export default function Profile() {
  const [player, setPlayer] = useState({
    id: "",
    username: "",
    avatar: "",
    email: "",
    name: ""
  });
  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  // const getProfileAPI = useCallback(async () => {
  //   const data = await getProfile();

  //   setPlayer(data.data);  
  // }, [getProfile])
  
  useEffect(() => {
    const token = Cookies.get("token");
    if(token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const player: PlayerTypes = payload.player;
      setPlayer(player);
    }

    // getProfileAPI();

  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src="/img/avatar-1.png"
        width="90"
        height="90"
        className="img-fluid mb-20"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{player.name}</h2>
      <p className="color-palette-2 m-0">{player.email}</p>
    </div>
  );
}
