"use client";
import { Tab, Tabs } from "@mui/material";
import "./facebookNav.css";
import FacebookIcon from "@/utils/icons/FacebookIcon";
import { useState } from "react";
import HomeIcon from "@/utils/icons/HomeIcon";
import VideoIcon from "@/utils/icons/VideoIcon";
import MarketPlaceIcon from "@/utils/icons/MarketPlaceIcon";
import GroupIcon from "@/utils/icons/GroupIcon";
import GamingIcon from "@/utils/icons/GamingIcon";
import SearchIcon from "@/utils/icons/SearchIcon";
import NineDotsIcon from "@/utils/icons/NineDotsIcon";
import BellIcon from "@/utils/icons/BellIcon";
import Image from "next/image";

export default function FacebookNav() {
  const [tab, setTab] = useState(0);
  function handleChange(e, v) {
    setTab(parseInt(v));
  }
  return (
    <nav className="row space-between">
      <div className="row center left-nav">
        <FacebookIcon />
        <div className="row search center">
          <SearchIcon />
          <input placeholder="Search..." />
        </div>
      </div>
      <Tabs value={tab} onChange={handleChange}>
        <Tab icon={<HomeIcon selected={tab === 0} />} />
        <Tab value={1} icon={<VideoIcon selected={tab === 1} />} />
        <Tab value={2} icon={<MarketPlaceIcon selected={tab === 2} />} />
        <Tab value={3} icon={<GroupIcon selected={tab === 3} />} />
        <Tab value={4} icon={<GamingIcon selected={tab === 4} />} />
      </Tabs>
      <div className="row center right-nav">
        <div className="icon">
          <NineDotsIcon />
        </div>
        <div className="icon">
          <BellIcon />
        </div>
        <div className="profile icon">
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "25px" }}
            src="https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-9/140314206_10223504712393202_3728944394701273277_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6MURCQBTWc8Ab5v6Vdb&_nc_ht=scontent.fsdv2-1.fna&oh=00_AfAA90010TxWgFtENZ0hC3wKG6YT5hqW7B0WP63RAMtd2Q&oe=6645AE27"
          />
          <div className="arrow row center">∨</div>
        </div>
      </div>
    </nav>
  );
}
