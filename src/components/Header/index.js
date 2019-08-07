import React from "react";
import ContentLoader from "react-content-loader";
import { Flex, Box } from "@rebass/grid";
import { Link } from "react-router-dom";
import { SearchBox } from "react-instantsearch-dom";
import { Button, Logo, Back } from "components";
import cm from "./header.module.css";

const Header = ({
  authenticating,
  user,
  token,
  onClickSignInButton,
  onClickSignUpButton,
  topic = false,
  hideSignInButton = false,
  onSave,
  saving = false
}) => (
  <Flex
    className={cm.header}
    justifyContent="space-between"
    alignItems="center"
  >
    {!topic && (
      <Box flex="1 4 250px" className={cm.logo}>
        <Logo />
      </Box>
    )}

    {topic && (
      <Box>
        <Back to="/" />
        {!saving && (
          <Button
            style={{ marginLeft: "15px" }}
            primary={false}
            children="Save"
            onClick={onSave}
          />
        )}
        {saving && <div className={cm.saving}>Saving...</div>}
      </Box>
    )}

    {!topic && (
      <Box flex={"4 0 " + (token ? "670px" : "630px")} className={cm.searchBox}>
        <SearchBox type="text" placeholder="Search" />
      </Box>
    )}

    <Flex flex="1 4 250px" className={cm.buttons} justifyContent="flex-end">


      {!authenticating && token && !topic && (
        <Box mr={10}>
          <Button hidden create to="/topic/new" children="Create New List" />
        </Box>
      )}

      {!authenticating && !token && !hideSignInButton && (
        <Box mr={10}>
          <Button
            primary={false}
            onClick={onClickSignInButton}
            children="Login"
          />
        </Box>
      )}
      <Box>
        {authenticating && <AvatarLoader />}
        {!authenticating && !token && !hideSignInButton && (
          <Button
            onClick={onClickSignUpButton}
            primary={false}
            hidden
            children="Register"
          />
        )}
        {!authenticating && token && (
          <Link to={"/@" + user.username}>
            <img alt="" className={cm.avatar} src={user.avatar} />
          </Link>
        )}
      </Box>
    </Flex>
  </Flex>
);

export default Header;

const AvatarLoader = () => (
  <ContentLoader
    animate={false}
    primaryColor="#F3F3F3"
    secondaryColor="#F3F3F3"
    width={80}
    height={80}
    style={{ width: "40px", height: "40px" }}
  >
    <circle cx="40" cy="40" r="40" />
  </ContentLoader>
);
