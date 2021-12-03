// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer2Icon(props: Layer2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 158 40"}
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
          "M54.328 35.418a4.547 4.547 0 01-2.986-.914 3.714 3.714 0 01-.918-1.363 3.624 3.624 0 01-.23-1.614v-9.922h-2.079v-.657l.827-.112a4.236 4.236 0 001.585-.546 4.291 4.291 0 001.148-1.115l1.998-2.687h.919l-.092 4.148h3.445v.925h-3.526v10.167a2.398 2.398 0 00.448 1.717 1.5 1.5 0 00.513.391c.199.093.416.142.636.144.402.013.8-.083 1.148-.279a5.21 5.21 0 00.976-.758l.402.446a4.036 4.036 0 01-1.63 1.538 5.509 5.509 0 01-2.584.547m5.144-.468v-.569l.46-.145a1.33 1.33 0 00.838-.502 1.8 1.8 0 00.24-.958v-8.74c0-.345-.082-.685-.24-.993a1.137 1.137 0 00-.361-.322 1.172 1.172 0 00-.466-.146l-.47-.123v-.535l5.017-1.717.368.324.264 2.63v.201a7.203 7.203 0 011.148-1.55 6.88 6.88 0 011.539-1.114 3.62 3.62 0 011.665-.446 2.35 2.35 0 011.746.602 2.068 2.068 0 01.585 1.527c.02.28-.022.562-.123.825a1.968 1.968 0 01-.462.703 2.029 2.029 0 01-1.412.524 2.702 2.702 0 01-1.157-.303 2.619 2.619 0 01-.9-.768v-.055a1.155 1.155 0 00-.688-.402.883.883 0 00-.43.087.854.854 0 00-.328.281 3.945 3.945 0 00-.563.703 4.533 4.533 0 00-.482.936v7.804c-.014.328.07.653.24.936a1.29 1.29 0 00.828.524l.918.268v.568l-7.774-.055zm19.017.446a5.312 5.312 0 01-2.182-.435c-.663-.3-1.207-.8-1.55-1.427a5.11 5.11 0 01-.54-2.642l.115-7.492a1.687 1.687 0 00-.219-.948 1.238 1.238 0 00-.769-.423l-.367-.123v-.535l5.259-.97.333.323-.16 4.203v6.778c-.027.271.01.544.107.799.098.255.253.485.455.673.404.32.914.486 1.435.468a4.895 4.895 0 001.608-.256 6.52 6.52 0 001.493-.758l.103-9.175a1.56 1.56 0 00-.195-.959 1.318 1.318 0 00-.747-.424l-.344-.089v-.535l5.133-1.037.345.335-.104 4.203v7.803c-.011.338.043.675.16.993a1.165 1.165 0 00.758.557l.403.123v.568l-5.19.301-.3-1.906a10.251 10.251 0 01-2.296 1.427 6.3 6.3 0 01-2.756.557M97.54 20.312a6.577 6.577 0 013.307.78 5.375 5.375 0 012.135 2.13 6.32 6.32 0 01.747 3.121v.725a2.86 2.86 0 01-.126.647h-9.187a6.898 6.898 0 001.148 4.459c.419.435.931.775 1.501.995a4.26 4.26 0 001.795.276 5.501 5.501 0 002.492-.49 6.288 6.288 0 001.757-1.383l.482.446a6.522 6.522 0 01-2.538 2.542 7.253 7.253 0 01-3.766.903 7.902 7.902 0 01-3.801-.903 6.322 6.322 0 01-2.596-2.576 8.268 8.268 0 01-.93-4.046 7.63 7.63 0 011.149-4.148 7.415 7.415 0 012.779-2.608 7.56 7.56 0 013.651-.903v.033zm-.161.87a2.53 2.53 0 00-1.55.49 3.325 3.325 0 00-1.046 1.74 13.317 13.317 0 00-.459 3.478h5.5a9.313 9.313 0 00-.23-4.36 2.145 2.145 0 00-.877-1.03 2.246 2.246 0 00-1.338-.318m7.383 13.902v-.524l.46-.145c.169-.026.332-.085.478-.173a1.27 1.27 0 00.371-.34c.171-.287.251-.617.23-.948v-8.74a2.076 2.076 0 00-.253-1.003 1.132 1.132 0 00-.362-.316 1.17 1.17 0 00-.464-.141l-.46-.123v-.535l5.019-1.717.367.323.264 2.631v.201a7.195 7.195 0 011.148-1.55c.457-.44.975-.814 1.539-1.114a3.456 3.456 0 011.665-.446 2.36 2.36 0 01.938.122c.301.104.576.267.808.48.196.204.349.444.45.706.101.263.147.541.135.821a1.964 1.964 0 01-.585 1.527 2.067 2.067 0 01-1.424.524 2.696 2.696 0 01-1.196-.309 2.602 2.602 0 01-.917-.806v-.055a1.025 1.025 0 00-.689-.401.873.873 0 00-.43.085.84.84 0 00-.328.282 3.971 3.971 0 00-.574.703c-.189.296-.347.61-.471.936v7.804a1.59 1.59 0 00.241.936c.196.271.492.459.827.524l.919.268v.568l-7.706-.055zm17.444.446a4.577 4.577 0 01-2.963-.97 3.336 3.336 0 01-.917-1.267 3.24 3.24 0 01-.231-1.532c.01-.506.135-1.004.365-1.459.23-.454.56-.854.967-1.172a9.866 9.866 0 014.593-1.772c.344-.078.746-.145 1.206-.223l1.366-.212v-2.118a5.424 5.424 0 00-.517-2.81 1.842 1.842 0 00-.725-.605 1.908 1.908 0 00-.94-.175h-.092a1.471 1.471 0 00-1.148.435 2.46 2.46 0 00-.54 1.416l-.091.39a2.728 2.728 0 01-.655 1.74c-.178.178-.392.32-.629.414a1.893 1.893 0 01-.749.131 1.836 1.836 0 01-1.275-.457 1.572 1.572 0 01-.389-.554 1.531 1.531 0 01-.116-.66c-.008-.382.064-.76.212-1.113s.369-.672.649-.94a5.375 5.375 0 012.297-1.248 10.979 10.979 0 013.089-.412 6.092 6.092 0 014.18 1.293 5.365 5.365 0 011.175 1.936c.247.719.336 1.48.26 2.233v6.69c0 .847.414 1.281 1.264 1.281h.7l.31.335a4.104 4.104 0 01-1.229 1.048c-.572.28-1.209.41-1.848.379a3.343 3.343 0 01-2.102-.624 2.827 2.827 0 01-1.033-1.628 11.306 11.306 0 01-1.93 1.639 4.439 4.439 0 01-2.491.624l-.023-.033zm1.814-1.907a2.643 2.643 0 001.148-.267 8.858 8.858 0 001.39-.892v-4.772a24.39 24.39 0 00-1.631.301c-.808.163-1.55.55-2.136 1.115a2.97 2.97 0 00-.634 1.007c-.14.373-.202.77-.181 1.167a2.457 2.457 0 00.563 1.784 1.949 1.949 0 001.458.579m14.561 1.918a4.556 4.556 0 01-2.997-.925 3.665 3.665 0 01-.883-1.365 3.575 3.575 0 01-.197-1.6v-9.934h-2.182v-.658l.827-.111a3.908 3.908 0 001.517-.53 3.786 3.786 0 001.159-1.087l2.009-2.675h.919l-.103 4.147h3.445v.914h-3.537v10.167c-.048.577.119 1.15.471 1.617a1.527 1.527 0 001.148.535 2.13 2.13 0 001.148-.279 5.29 5.29 0 00.988-.758l.402.446a4.005 4.005 0 01-1.631 1.527 5.51 5.51 0 01-2.584.558m12.334-15.151a6.642 6.642 0 013.318.78 5.34 5.34 0 012.125 2.13 6.33 6.33 0 01.746 3.122v.735a2.807 2.807 0 01-.115.636h-9.255a6.893 6.893 0 001.148 4.46c.417.456.935.815 1.516 1.049a4.257 4.257 0 001.837.299 5.468 5.468 0 002.492-.49 6.274 6.274 0 001.757-1.383l.494.446a6.629 6.629 0 01-2.515 2.542 7.258 7.258 0 01-3.767.903 8.02 8.02 0 01-3.835-.892 6.487 6.487 0 01-2.595-2.586 8.262 8.262 0 01-.93-4.047 7.622 7.622 0 011.148-4.147 7.365 7.365 0 012.836-2.598 7.747 7.747 0 013.64-.903l-.045-.056zm-.115.915a2.532 2.532 0 00-1.551.49 3.331 3.331 0 00-1.045 1.728 13.32 13.32 0 00-.459 3.478h5.501a9.336 9.336 0 00-.23-4.359 2.144 2.144 0 00-.878-1.03 2.248 2.248 0 00-1.338-.319M0 9.688v5.384l6.856 4.203.057-5.395L0 9.688zm15.215-.401l12.758 7.246v5.674L15.215 14.75V9.287zM0 18.584v5.385l6.856 4.203.057-5.396L0 18.584zm15.215-.401l12.758 7.246v5.675l-12.758-7.459v-5.462zM0 27.492v5.373l6.856 4.203.057-5.396L0 27.492zm15.215-.402l12.758 7.235V40l-12.758-7.458V27.09zm6.879-21.873L31.43 0l.264 5.34-4.892 2.464-4.708-2.587z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.913 13.88l8.302-4.593v5.462l-8.37 4.526.068-5.395zm21.06 2.653v5.674l7.189-4.27v-5.819l-7.189 4.415zm-21.06 6.243l8.302-4.593v5.462l-8.37 4.527.068-5.396zm21.06 2.654v5.674l7.189-4.27v-5.82l-7.189 4.415zm-21.06 6.242l8.302-4.593v5.463l-8.37 4.526.068-5.396zm21.06 2.653V40l7.189-4.27v-5.82l-7.189 4.415z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer2Icon;
/* prettier-ignore-end */
