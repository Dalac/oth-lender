// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M11.14 0C5.014 0 0 5.008 0 11.128c0 6.121 5.013 11.129 11.14 11.129 6.128 0 11.141-5.008 11.141-11.129C22.281 5.008 17.268 0 11.141 0zm0 3.339a3.35 3.35 0 013.343 3.338 3.35 3.35 0 01-3.342 3.339 3.35 3.35 0 01-3.343-3.339 3.35 3.35 0 013.343-3.338zm0 16.08a8.076 8.076 0 01-6.684-3.561c.056-2.226 4.456-3.45 6.685-3.45 2.228 0 6.628 1.224 6.684 3.45a8.076 8.076 0 01-6.684 3.561z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
