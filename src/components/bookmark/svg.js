import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import PropTypes from "prop-types";
import { svg_url } from "../../assets/articleAssets/svgIcons";

const SVG = (
  { ...props },
  {
    style = {},
    fill = "#000000c2",
    width = "40px",
    className = "svgIcon",
    height = "40px",
    viewBox = "0 0 32 32"
  }
) => (
  <div>
    <span onClick={props.handlebookmark} id="bookmark">
      <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
      >
        <path
          d={svg_url}
          fill={fill}
          fillRule="evenodd"
        />
      </svg>
    </span>
    <UncontrolledTooltip placement="bottom" target="bookmark">
      Bookmark this article to read later
    </UncontrolledTooltip>
  </div>
);

SVG.propTypes = {
  handlebookmark: PropTypes.func
};

export default SVG;
