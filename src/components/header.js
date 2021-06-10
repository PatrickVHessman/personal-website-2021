import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import avatar from "../images/avatar_v2.gif";

const Header = ({ siteTitle, desc }) => (
  <header style={{
      background: `#000`,
      display: `flex`,
      padding: `.5rem 1rem`,
      color: `#fff`,
      justifyContent: `center`
    }}
    >
    <div style={{ marginRight: "1rem"}}>
      <img src={avatar} style={{maxWidth: "55px"}} alt="Patrick V. Hessman" />
    </div>
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`
      }}
    >
      <h1 style={{ margin: "auto", fontSize: "1rem" }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        {" | "}
        {desc}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
