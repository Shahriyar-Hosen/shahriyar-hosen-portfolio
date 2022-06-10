import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavRoute = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{ textDecoration: match ? " " : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavRoute;
