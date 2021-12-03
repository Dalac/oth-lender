// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 53"}
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
          "M35.683 27.05a1 1 0 000-1.6L22.6 15.637a1 1 0 00-1.6.8v19.625a1 1 0 001.6.8l13.083-9.812zM0 26.25C0 40.74 11.76 52.5 26.25 52.5S52.5 40.74 52.5 26.25 40.74 0 26.25 0 0 11.76 0 26.25zm5.25 0c0-11.576 9.424-21 21-21s21 9.424 21 21-9.424 21-21 21-21-9.424-21-21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskIcon;
/* prettier-ignore-end */
