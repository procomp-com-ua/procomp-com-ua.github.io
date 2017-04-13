import React from "react";
import classNames from "classnames";

export const Container = (props) => {
  const _className = classNames({
    "container": !props.fluid,
    "container-fluid": props.fluid,
  }, props.className);
  return <div {... props} className={_className}> {props.children} </div>;
};

Container.propTypes = {
  className: React.PropTypes.string.isRequired,
  fluid: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
}

export const Row = (props) => {
  const _className = classNames("row", props.className);
  return <div {... props} className={_className}>{props.children}</div>;
};

Row.propTypes = {
  className: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
}

export const Col = (props) => {
  const sizeClasses = (props.size || []).map((x) => { return `col-${x}`; }).join(" ");
  const _className = classNames(sizeClasses, props.className);
  return <div {... props} className={_className}>{props.children}</div>;
};

Col.propTypes = {
  size: React.PropTypes.number.isRequired,
  className: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
}
