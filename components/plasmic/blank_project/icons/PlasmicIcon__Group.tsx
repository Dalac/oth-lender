// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 42"}
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
          "M17.836 16.76c0 .445.168.834.502 1.112.334.279.835.501 1.448.724v-3.784c-.669.167-1.17.39-1.504.78-.279.333-.446.722-.446 1.168zm4.624 6.454v3.673c.668-.167 1.114-.39 1.448-.724.334-.334.501-.723.501-1.168 0-.446-.167-.835-.501-1.113-.334-.223-.78-.445-1.448-.668z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.969.623C14.773-2.159 3.409 4.63.624 15.813c-2.785 11.185 4.01 22.48 15.207 25.262 11.196 2.782 22.504-4.006 25.29-15.19C43.96 14.756 37.164 3.405 25.968.623zm1.17 27.877c-1.059 1.057-2.618 1.67-4.624 1.948v3.004h-2.673V30.56c-1.337-.056-2.563-.278-3.788-.724-1.226-.389-2.172-.89-2.897-1.446l1.449-3.283c.668.5 1.448.946 2.395 1.28.891.334 1.838.556 2.84.667v-4.45c-1.28-.28-2.339-.669-3.23-1.003-.891-.389-1.616-.945-2.173-1.669-.612-.723-.89-1.669-.89-2.893 0-1.502.556-2.782 1.615-3.84 1.058-1.057 2.618-1.724 4.679-1.947v-2.95h2.673v2.893c2.173.167 4.011.724 5.46 1.614l-1.338 3.283a10.66 10.66 0 00-4.122-1.391v4.563c1.226.278 2.284.612 3.175 1.001.892.39 1.616.89 2.173 1.614.613.723.891 1.669.891 2.837 0 1.503-.557 2.727-1.615 3.784z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
