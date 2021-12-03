// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BorderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BorderIcon(props: BorderIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 640 409"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2 0a2 2 0 00-2 2v405a2 2 0 002 2h636a2 2 0 002-2V2a2 2 0 00-2-2H2zm0 4a2 2 0 012-2h632a2 2 0 012 2v400a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BorderIcon;
/* prettier-ignore-end */
