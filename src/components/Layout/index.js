import React from "react";
import { compose, withUser, withModal } from "adapters";
import { Header } from "components";
import cm from "./layout.module.css";

const Layout = ({ user, modal, children, topic, onBack }) => (
  <div className={cm.container}>
    <Header
      onBack={onBack}
      topic={topic}
      user={user.state.user}
      token={user.state.token}
      onClickSignInButton={() => modal.show("SignIn")}
      onClickSignUpButton={() => modal.show("SignUp")}
    />

    <div>{children}</div>
  </div>
);

export default compose(
  withUser,
  withModal
)(Layout);
