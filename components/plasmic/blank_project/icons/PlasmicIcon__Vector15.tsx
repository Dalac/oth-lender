// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.47 18.918C4.232 18.918 0 14.69 0 9.46S4.233 0 9.47 0c5.236 0 9.469 4.229 9.469 9.46 0 5.23-4.233 9.458-9.47 9.458zm0-17.805a8.34 8.34 0 00-8.356 8.346 8.34 8.34 0 008.355 8.346 8.34 8.34 0 008.356-8.346 8.34 8.34 0 00-8.356-8.346z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
