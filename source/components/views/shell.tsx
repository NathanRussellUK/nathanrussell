import * as React from "react";
import { withRouter } from "react-router";

import "./shell.scss";

import Helmet from "react-helmet";
import { HooksContext } from "../../redux/hooks";

import { Logo } from "../logo";

export const Shell = withRouter((props) => {
  const context = React.useContext(HooksContext);

  const [scrolled, setScrolled] = React.useState(false);

  const isBrowser = React.useMemo(() => typeof document !== "undefined", []);

  const onScroll = React.useCallback(() => {
    if (isBrowser && document.body.scrollTop > 50) {
      setScrolled(true);
      return;
    }

    setScrolled(false);
  }, [setScrolled]);

  React.useEffect(() => {
    if (isBrowser) {
      document.addEventListener("scroll", onScroll);
    }
  }, []);

  React.useEffect(() => {
    if (isBrowser) {
      document.body.scrollTo({ top: 0, left: 0 });
    }
  }, [props.location.pathname]);

  return (
    <div className="shell">
      <Helmet>
        <title>Sea Green Cube | Nathan Russell</title>
      </Helmet>
      <div className="header" data-scrolled={scrolled}>
        <h1>
          <Logo />
          Sea Green Cube
        </h1>
      </div>
      {props.children}
    </div>
  );
});
