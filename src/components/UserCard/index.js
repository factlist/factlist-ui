import React from "react";
import { Flex, Box } from "@rebass/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import cm from "./userCard.module.css";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Flex className={cm.container}>
      <Box className={cm.avatar}>
        <img src={"/images/avatar.png"} />
      </Box>
      <Flex
        className={cm.info}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box className={cm.name}>{user.name}</Box>
        <Box className={cm.description}>
          {user.description ||
            "Ex-Entrepreneur, UI Designer based in Singapore. Working to bring programmatic marketing to small businesses"}
        </Box>
        <Box className={cm.socials}>
          <FontAwesomeIcon className={cm.social} icon={faGlobeAmericas} />
          <FontAwesomeIcon className={cm.social} icon={faTwitter} />
          <FontAwesomeIcon className={cm.social} icon={faFacebook} />
          <FontAwesomeIcon className={cm.social} icon={faInstagram} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default UserCard;
