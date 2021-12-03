// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M8.912 17.805c4.923 0 8.913-3.985 8.913-8.902S13.835 0 8.912 0C3.99 0 0 3.986 0 8.903s3.99 8.902 8.912 8.902z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
