import React from "react";
import styled from "styled-components";
import { InlineWrapper } from "./InlineWrapper";

const InlineLogo = ({
  width = "100%",
  height = "100%",
}: {
  width?: string;
  height?: string;
}) => (
  <InlineWrapper width={width} height={height}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="783"
      height="151"
      fill="none"
      viewBox="0 0 783 151"
    >
      <mask
        id="a"
        width="381"
        height="151"
        x="0"
        y="0"
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 0h381v151H0z" />
        <path d="M285.35 20.15c-2.1 0-3.9-.75-5.4-2.25-1.5-1.5-2.25-3.3-2.25-5.4v-.6c0-2.1.75-3.9 2.25-5.4 1.5-1.5 3.3-2.25 5.4-2.25h.9c2.1 0 3.9.75 5.4 2.25 1.5 1.5 2.25 3.3 2.25 5.4v.6c0 2.1-.75 3.9-2.25 5.4-1.5 1.5-3.3 2.25-5.4 2.25h-.9Zm.3 92.85c-1.9 0-3.5-.65-4.8-1.95-1.3-1.3-1.95-2.9-1.95-4.8V41.9c0-1.9.65-3.5 1.95-4.8 1.3-1.4 2.9-2.1 4.8-2.1 2 0 3.65.65 4.95 1.95 1.3 1.3 1.95 2.95 1.95 4.95v64.35c0 1.9-.7 3.5-2.1 4.8-1.3 1.3-2.9 1.95-4.8 1.95ZM320.2 113c-1.9 0-3.5-.65-4.8-1.95-1.3-1.3-1.95-2.9-1.95-4.8V8.9c0-1.9.65-3.5 1.95-4.8 1.3-1.4 2.9-2.1 4.8-2.1s3.5.7 4.8 2.1c1.4 1.3 2.1 2.9 2.1 4.8v61.35l35.7-33c1.5-1.3 3-1.95 4.5-1.95 2.3 0 3.95.65 4.95 1.95 1.1 1.3 1.65 2.85 1.65 4.65 0 1.7-.85 3.4-2.55 5.1l-21.6 19.35 27.15 36c1 1.3 1.5 2.65 1.5 4.05 0 2-.65 3.6-1.95 4.8-1.3 1.2-2.95 1.8-4.95 1.8-1 0-2-.25-3-.75s-1.85-1.2-2.55-2.1l-25.8-35.1L327.1 86.9v19.35c0 1.9-.7 3.5-2.1 4.8-1.3 1.3-2.9 1.95-4.8 1.95Z" />
        <path
          fill-rule="evenodd"
          d="M119.05 113.75c-4.4 0-8.5-.9-12.3-2.7-3.7-1.8-6.65-4.4-8.85-7.8-2.2-3.5-3.3-7.5-3.3-12 0-7.4 2.9-13.3 8.7-17.7 5.9-4.4 14.5-6.6 25.8-6.6h18.15v-1.2c0-6.6-1.65-11.35-4.95-14.25-3.2-2.9-8.25-4.35-15.15-4.35-3.8 0-7.2.3-10.2.9-2.9.6-6.15 1.5-9.75 2.7-.8.2-1.45.3-1.95.3-1.5 0-2.8-.55-3.9-1.65-1.1-1.1-1.65-2.45-1.65-4.05 0-2.7 1.3-4.6 3.9-5.7 8.5-3.6 17.15-5.4 25.95-5.4 6.9 0 12.7 1.4 17.4 4.2 4.8 2.8 8.3 6.45 10.5 10.95 2.3 4.4 3.45 9.2 3.45 14.4 0 0 2.841 35.45-1.329 42.45-4.171 7-29.121 7.5-40.521 7.5Zm18.021-13c-4.5 1-8.521 1-12.921 1-5.7 0-9.8-1.1-12.3-3.3-2.4-2.2-3.6-5.1-3.6-8.7 0-7.9 7.55-11.85 22.65-11.85h16.35l-.179 18.35c-2.8 3.2-7.198 3.877-10 4.5ZM219.65 148.25c-5.8 0-11.65-.75-17.55-2.25s-10.75-3.35-14.55-5.55c-1.8-1.1-2.7-2.85-2.7-5.25 0-1.6.55-3.05 1.65-4.35 1.2-1.2 2.65-1.8 4.35-1.8.8 0 1.7.2 2.7.6 7.6 3.8 15.85 5.7 24.75 5.7 15.3 0 22.95-8.15 22.95-24.45v-10.05c-7.1 7.6-15.65 11.4-25.65 11.4-5.9 0-11.65-1.45-17.25-4.35-5.5-3-10.05-7.4-13.65-13.2-3.6-5.9-5.4-13.05-5.4-21.45 0-8.4 1.8-15.5 5.4-21.3 3.6-5.9 8.15-10.3 13.65-13.2 5.6-3 11.35-4.5 17.25-4.5 10 0 25.8 3 32.8 9.5 7 6.5 5.545 8.724 6.5 13.5.699 3.5 0 51.7 0 51.7 0 12.6-3.6 23.3-9.15 29.1-6.1 6.8-14.8 10.2-26.1 10.2ZM230.9 96.8c-4.5 1.95-7.75 3-12.45 3-7.5 0-13.65-2.25-18.45-6.75-4.7-4.6-7.05-11.2-7.05-19.8 0-8.6 2.35-15.15 7.05-19.65 4.8-4.6 10.95-6.9 18.45-6.9 4.7 0 8.45 0 12.95 2.05s8.2 4.6 9.85 9.05c1.65 4.45 3.15 25.95 0 30.9-3.15 4.95-5.85 6.15-10.35 8.1ZM42.35 148.25c-5.8 0-11.65-.75-17.55-2.25s-10.75-3.35-14.55-5.55c-1.8-1.1-2.7-2.85-2.7-5.25 0-1.6.55-3.05 1.65-4.35 1.2-1.2 2.65-1.8 4.35-1.8.8 0 1.7.2 2.7.6 7.6 3.8 15.85 5.7 24.75 5.7 15.3 0 22.95-8.15 22.95-24.45v-10.05c-7.1 7.6-15.65 11.4-25.65 11.4-5.9 0-11.65-1.45-17.25-4.35-5.5-3-10.05-7.4-13.65-13.2C3.8 88.8 2 81.65 2 73.25c0-8.4 1.8-15.5 5.4-21.3 3.6-5.9 8.15-10.3 13.65-13.2 5.6-3 11.35-4.5 17.25-4.5 10 0 25.8 3 32.8 9.5 7 6.5 5.545 8.724 6.5 13.5.7 3.5 0 51.7 0 51.7 0 12.6-3.6 23.3-9.15 29.1-6.1 6.8-14.8 10.2-26.1 10.2ZM53.6 96.8c-4.5 1.95-7.75 3-12.45 3-7.5 0-13.65-2.25-18.45-6.75-4.7-4.6-7.05-11.2-7.05-19.8 0-8.6 2.35-15.15 7.05-19.65 4.8-4.6 10.95-6.9 18.45-6.9 4.7 0 8.45 0 12.95 2.05s8.2 4.6 9.85 9.05c1.65 4.45 3.15 25.95 0 30.9-3.15 4.95-5.85 6.15-10.35 8.1Z"
          clip-rule="evenodd"
        />
      </mask>
      <path
        fill="#C6AFE0"
        d="M285.35 20.15c-2.1 0-3.9-.75-5.4-2.25-1.5-1.5-2.25-3.3-2.25-5.4v-.6c0-2.1.75-3.9 2.25-5.4 1.5-1.5 3.3-2.25 5.4-2.25h.9c2.1 0 3.9.75 5.4 2.25 1.5 1.5 2.25 3.3 2.25 5.4v.6c0 2.1-.75 3.9-2.25 5.4-1.5 1.5-3.3 2.25-5.4 2.25h-.9Zm.3 92.85c-1.9 0-3.5-.65-4.8-1.95-1.3-1.3-1.95-2.9-1.95-4.8V41.9c0-1.9.65-3.5 1.95-4.8 1.3-1.4 2.9-2.1 4.8-2.1 2 0 3.65.65 4.95 1.95 1.3 1.3 1.95 2.95 1.95 4.95v64.35c0 1.9-.7 3.5-2.1 4.8-1.3 1.3-2.9 1.95-4.8 1.95ZM320.2 113c-1.9 0-3.5-.65-4.8-1.95-1.3-1.3-1.95-2.9-1.95-4.8V8.9c0-1.9.65-3.5 1.95-4.8 1.3-1.4 2.9-2.1 4.8-2.1s3.5.7 4.8 2.1c1.4 1.3 2.1 2.9 2.1 4.8v61.35l35.7-33c1.5-1.3 3-1.95 4.5-1.95 2.3 0 3.95.65 4.95 1.95 1.1 1.3 1.65 2.85 1.65 4.65 0 1.7-.85 3.4-2.55 5.1l-21.6 19.35 27.15 36c1 1.3 1.5 2.65 1.5 4.05 0 2-.65 3.6-1.95 4.8-1.3 1.2-2.95 1.8-4.95 1.8-1 0-2-.25-3-.75s-1.85-1.2-2.55-2.1l-25.8-35.1L327.1 86.9v19.35c0 1.9-.7 3.5-2.1 4.8-1.3 1.3-2.9 1.95-4.8 1.95Z"
      />
      <path
        fill="#C6AFE0"
        fill-rule="evenodd"
        d="M119.05 113.75c-4.4 0-8.5-.9-12.3-2.7-3.7-1.8-6.65-4.4-8.85-7.8-2.2-3.5-3.3-7.5-3.3-12 0-7.4 2.9-13.3 8.7-17.7 5.9-4.4 14.5-6.6 25.8-6.6h18.15v-1.2c0-6.6-1.65-11.35-4.95-14.25-3.2-2.9-8.25-4.35-15.15-4.35-3.8 0-7.2.3-10.2.9-2.9.6-6.15 1.5-9.75 2.7-.8.2-1.45.3-1.95.3-1.5 0-2.8-.55-3.9-1.65-1.1-1.1-1.65-2.45-1.65-4.05 0-2.7 1.3-4.6 3.9-5.7 8.5-3.6 17.15-5.4 25.95-5.4 6.9 0 12.7 1.4 17.4 4.2 4.8 2.8 8.3 6.45 10.5 10.95 2.3 4.4 3.45 9.2 3.45 14.4 0 0 2.841 35.45-1.329 42.45-4.171 7-29.121 7.5-40.521 7.5Zm18.021-13c-4.5 1-8.521 1-12.921 1-5.7 0-9.8-1.1-12.3-3.3-2.4-2.2-3.6-5.1-3.6-8.7 0-7.9 7.55-11.85 22.65-11.85h16.35l-.179 18.35c-2.8 3.2-7.198 3.877-10 4.5ZM219.65 148.25c-5.8 0-11.65-.75-17.55-2.25s-10.75-3.35-14.55-5.55c-1.8-1.1-2.7-2.85-2.7-5.25 0-1.6.55-3.05 1.65-4.35 1.2-1.2 2.65-1.8 4.35-1.8.8 0 1.7.2 2.7.6 7.6 3.8 15.85 5.7 24.75 5.7 15.3 0 22.95-8.15 22.95-24.45v-10.05c-7.1 7.6-15.65 11.4-25.65 11.4-5.9 0-11.65-1.45-17.25-4.35-5.5-3-10.05-7.4-13.65-13.2-3.6-5.9-5.4-13.05-5.4-21.45 0-8.4 1.8-15.5 5.4-21.3 3.6-5.9 8.15-10.3 13.65-13.2 5.6-3 11.35-4.5 17.25-4.5 10 0 25.8 3 32.8 9.5 7 6.5 5.545 8.724 6.5 13.5.699 3.5 0 51.7 0 51.7 0 12.6-3.6 23.3-9.15 29.1-6.1 6.8-14.8 10.2-26.1 10.2ZM230.9 96.8c-4.5 1.95-7.75 3-12.45 3-7.5 0-13.65-2.25-18.45-6.75-4.7-4.6-7.05-11.2-7.05-19.8 0-8.6 2.35-15.15 7.05-19.65 4.8-4.6 10.95-6.9 18.45-6.9 4.7 0 8.45 0 12.95 2.05s8.2 4.6 9.85 9.05c1.65 4.45 3.15 25.95 0 30.9-3.15 4.95-5.85 6.15-10.35 8.1ZM42.35 148.25c-5.8 0-11.65-.75-17.55-2.25s-10.75-3.35-14.55-5.55c-1.8-1.1-2.7-2.85-2.7-5.25 0-1.6.55-3.05 1.65-4.35 1.2-1.2 2.65-1.8 4.35-1.8.8 0 1.7.2 2.7.6 7.6 3.8 15.85 5.7 24.75 5.7 15.3 0 22.95-8.15 22.95-24.45v-10.05c-7.1 7.6-15.65 11.4-25.65 11.4-5.9 0-11.65-1.45-17.25-4.35-5.5-3-10.05-7.4-13.65-13.2C3.8 88.8 2 81.65 2 73.25c0-8.4 1.8-15.5 5.4-21.3 3.6-5.9 8.15-10.3 13.65-13.2 5.6-3 11.35-4.5 17.25-4.5 10 0 25.8 3 32.8 9.5 7 6.5 5.545 8.724 6.5 13.5.7 3.5 0 51.7 0 51.7 0 12.6-3.6 23.3-9.15 29.1-6.1 6.8-14.8 10.2-26.1 10.2ZM53.6 96.8c-4.5 1.95-7.75 3-12.45 3-7.5 0-13.65-2.25-18.45-6.75-4.7-4.6-7.05-11.2-7.05-19.8 0-8.6 2.35-15.15 7.05-19.65 4.8-4.6 10.95-6.9 18.45-6.9 4.7 0 8.45 0 12.95 2.05s8.2 4.6 9.85 9.05c1.65 4.45 3.15 25.95 0 30.9-3.15 4.95-5.85 6.15-10.35 8.1Z"
        clip-rule="evenodd"
      />
      <path
        stroke="#C6AFE0"
        stroke-width="4"
        d="M285.35 20.15c-2.1 0-3.9-.75-5.4-2.25-1.5-1.5-2.25-3.3-2.25-5.4v-.6c0-2.1.75-3.9 2.25-5.4 1.5-1.5 3.3-2.25 5.4-2.25h.9c2.1 0 3.9.75 5.4 2.25 1.5 1.5 2.25 3.3 2.25 5.4v.6c0 2.1-.75 3.9-2.25 5.4-1.5 1.5-3.3 2.25-5.4 2.25h-.9Zm.3 92.85c-1.9 0-3.5-.65-4.8-1.95-1.3-1.3-1.95-2.9-1.95-4.8V41.9c0-1.9.65-3.5 1.95-4.8 1.3-1.4 2.9-2.1 4.8-2.1 2 0 3.65.65 4.95 1.95 1.3 1.3 1.95 2.95 1.95 4.95v64.35c0 1.9-.7 3.5-2.1 4.8-1.3 1.3-2.9 1.95-4.8 1.95ZM320.2 113c-1.9 0-3.5-.65-4.8-1.95-1.3-1.3-1.95-2.9-1.95-4.8V8.9c0-1.9.65-3.5 1.95-4.8 1.3-1.4 2.9-2.1 4.8-2.1s3.5.7 4.8 2.1c1.4 1.3 2.1 2.9 2.1 4.8v61.35l35.7-33c1.5-1.3 3-1.95 4.5-1.95 2.3 0 3.95.65 4.95 1.95 1.1 1.3 1.65 2.85 1.65 4.65 0 1.7-.85 3.4-2.55 5.1l-21.6 19.35 27.15 36c1 1.3 1.5 2.65 1.5 4.05 0 2-.65 3.6-1.95 4.8-1.3 1.2-2.95 1.8-4.95 1.8-1 0-2-.25-3-.75s-1.85-1.2-2.55-2.1l-25.8-35.1L327.1 86.9v19.35c0 1.9-.7 3.5-2.1 4.8-1.3 1.3-2.9 1.95-4.8 1.95Z"
        mask="url(#a)"
      />
      <path
        stroke="#C6AFE0"
        stroke-width="4"
        d="M119.05 113.75c-4.4 0-8.5-.9-12.3-2.7-3.7-1.8-6.65-4.4-8.85-7.8-2.2-3.5-3.3-7.5-3.3-12 0-7.4 2.9-13.3 8.7-17.7 5.9-4.4 14.5-6.6 25.8-6.6h18.15v-1.2c0-6.6-1.65-11.35-4.95-14.25-3.2-2.9-8.25-4.35-15.15-4.35-3.8 0-7.2.3-10.2.9-2.9.6-6.15 1.5-9.75 2.7-.8.2-1.45.3-1.95.3-1.5 0-2.8-.55-3.9-1.65-1.1-1.1-1.65-2.45-1.65-4.05 0-2.7 1.3-4.6 3.9-5.7 8.5-3.6 17.15-5.4 25.95-5.4 6.9 0 12.7 1.4 17.4 4.2 4.8 2.8 8.3 6.45 10.5 10.95 2.3 4.4 3.45 9.2 3.45 14.4 0 0 2.841 35.45-1.329 42.45-4.171 7-29.121 7.5-40.521 7.5Zm18.021-13c-4.5 1-8.521 1-12.921 1-5.7 0-9.8-1.1-12.3-3.3-2.4-2.2-3.6-5.1-3.6-8.7 0-7.9 7.55-11.85 22.65-11.85h16.35l-.179 18.35c-2.8 3.2-7.198 3.877-10 4.5ZM219.65 148.25c-5.8 0-11.65-.75-17.55-2.25s-10.75-3.35-14.55-5.55c-1.8-1.1-2.7-2.85-2.7-5.25 0-1.6.55-3.05 1.65-4.35 1.2-1.2 2.65-1.8 4.35-1.8.8 0 1.7.2 2.7.6 7.6 3.8 15.85 5.7 24.75 5.7 15.3 0 22.95-8.15 22.95-24.45v-10.05c-7.1 7.6-15.65 11.4-25.65 11.4-5.9 0-11.65-1.45-17.25-4.35-5.5-3-10.05-7.4-13.65-13.2-3.6-5.9-5.4-13.05-5.4-21.45 0-8.4 1.8-15.5 5.4-21.3 3.6-5.9 8.15-10.3 13.65-13.2 5.6-3 11.35-4.5 17.25-4.5 10 0 25.8 3 32.8 9.5 7 6.5 5.545 8.724 6.5 13.5.699 3.5 0 51.7 0 51.7 0 12.6-3.6 23.3-9.15 29.1-6.1 6.8-14.8 10.2-26.1 10.2ZM230.9 96.8c-4.5 1.95-7.75 3-12.45 3-7.5 0-13.65-2.25-18.45-6.75-4.7-4.6-7.05-11.2-7.05-19.8 0-8.6 2.35-15.15 7.05-19.65 4.8-4.6 10.95-6.9 18.45-6.9 4.7 0 8.45 0 12.95 2.05s8.2 4.6 9.85 9.05c1.65 4.45 3.15 25.95 0 30.9-3.15 4.95-5.85 6.15-10.35 8.1ZM42.35 148.25c-5.8 0-11.65-.75-17.55-2.25s-10.75-3.35-14.55-5.55c-1.8-1.1-2.7-2.85-2.7-5.25 0-1.6.55-3.05 1.65-4.35 1.2-1.2 2.65-1.8 4.35-1.8.8 0 1.7.2 2.7.6 7.6 3.8 15.85 5.7 24.75 5.7 15.3 0 22.95-8.15 22.95-24.45v-10.05c-7.1 7.6-15.65 11.4-25.65 11.4-5.9 0-11.65-1.45-17.25-4.35-5.5-3-10.05-7.4-13.65-13.2C3.8 88.8 2 81.65 2 73.25c0-8.4 1.8-15.5 5.4-21.3 3.6-5.9 8.15-10.3 13.65-13.2 5.6-3 11.35-4.5 17.25-4.5 10 0 25.8 3 32.8 9.5 7 6.5 5.545 8.724 6.5 13.5.7 3.5 0 51.7 0 51.7 0 12.6-3.6 23.3-9.15 29.1-6.1 6.8-14.8 10.2-26.1 10.2ZM53.6 96.8c-4.5 1.95-7.75 3-12.45 3-7.5 0-13.65-2.25-18.45-6.75-4.7-4.6-7.05-11.2-7.05-19.8 0-8.6 2.35-15.15 7.05-19.65 4.8-4.6 10.95-6.9 18.45-6.9 4.7 0 8.45 0 12.95 2.05s8.2 4.6 9.85 9.05c1.65 4.45 3.15 25.95 0 30.9-3.15 4.95-5.85 6.15-10.35 8.1Z"
        clip-rule="evenodd"
        mask="url(#a)"
      />
      <rect
        width="388"
        height="103.597"
        x="395"
        y="21"
        fill="#C6AFE0"
        rx="39.093"
      />
      <mask
        id="b"
        width="47"
        height="46"
        x="418"
        y="52"
        maskUnits="userSpaceOnUse"
        // @ts-expect-error
        style={{ "mask-type": "alpha" }}
      >
        <path
          fill="#D9D9D9"
          stroke="#FAFAFA"
          stroke-width="2.398"
          d="M419.212 69.381c0 8.088 6.245 14.717 14.175 15.328v9.161a2.606 2.606 0 0 0 2.606 2.605h11.362a2.605 2.605 0 0 0 2.605-2.605v-9.115h10.304c2.338 0 3.492-2.84 1.817-4.472l-3.765-3.665a.209.209 0 0 1 0-.298l3.765-3.666c1.675-1.63.521-4.472-1.817-4.472h-10.35c-.611-7.93-7.24-14.175-15.328-14.175-8.491 0-15.374 6.883-15.374 15.374Z"
        />
      </mask>
      <g mask="url(#b)">
        <path
          fill="#493C58"
          fill-rule="evenodd"
          d="M418.014 69.381c0 7.494 4.973 13.826 11.799 15.876 1.339.402 2.376 1.562 2.376 2.96v7.06a2.397 2.397 0 0 0 2.398 2.397h14.175a2.398 2.398 0 0 0 2.398-2.397v-6.51a2.813 2.813 0 0 1 2.813-2.813h9.752c2.151 0 3.214-2.614 1.672-4.115l-3.445-3.355a2.813 2.813 0 0 1 0-4.03l3.445-3.355c1.542-1.5.479-4.115-1.672-4.115h-10.303c-1.397 0-2.558-1.037-2.96-2.376-2.05-6.826-8.382-11.8-15.875-11.8-9.153 0-16.573 7.42-16.573 16.573Z"
          clip-rule="evenodd"
        />
        <mask
          id="c"
          width="95"
          height="95"
          x="346"
          y="25"
          maskUnits="userSpaceOnUse"
          // @ts-expect-error
          style={{ "mask-type": "alpha" }}
        >
          <path
            fill="#D9D9D9"
            d="M428.118 40.556c-17.633-19.167-47.464-20.41-66.631-2.778a47.166 47.166 0 0 0-8.498 10.4 46.903 46.903 0 0 0-4.804 10.933s16.637-3.488 37.709 20.289c21.072 23.776 17.079 39.266 17.079 39.266a46.924 46.924 0 0 0 11.296-3.876 47.222 47.222 0 0 0 11.071-7.603c19.167-17.633 20.41-47.465 2.778-66.631Z"
          />
        </mask>
        <g stroke="#C6AFE0" stroke-width="2.391" mask="url(#c)">
          <circle
            cx="393.413"
            cy="72.482"
            r="45.961"
            transform="rotate(47.387 393.413 72.482)"
          />
          <circle
            cx="393.991"
            cy="71.95"
            r="41.376"
            transform="rotate(47.387 393.991 71.95)"
          />
          <circle
            cx="394.377"
            cy="71.595"
            r="36.791"
            transform="rotate(47.387 394.377 71.595)"
          />
        </g>
      </g>
      <mask
        id="d"
        width="262"
        height="60"
        x="488.233"
        y="41.485"
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M488.233 41.485h262v60h-262z" />
        <path d="M508.144 95.567c-2.823 0-5.282-.524-7.379-1.573-2.056-1.088-3.669-2.6-4.838-4.536-1.129-1.975-1.694-4.294-1.694-6.955v-8.225c0-2.661.565-4.96 1.694-6.895a11.665 11.665 0 0 1 4.838-4.536c2.097-1.089 4.556-1.633 7.379-1.633 2.863 0 5.322.544 7.378 1.633 2.057 1.048 3.649 2.56 4.778 4.536 1.17 1.935 1.754 4.214 1.754 6.834v8.286c0 2.661-.584 4.98-1.754 6.955-1.129 1.936-2.721 3.448-4.778 4.536-2.056 1.049-4.515 1.573-7.378 1.573Zm0-6.593c2.016 0 3.568-.544 4.657-1.633 1.129-1.128 1.693-2.741 1.693-4.838v-8.225c0-2.137-.564-3.75-1.693-4.839-1.089-1.088-2.641-1.633-4.657-1.633-1.976 0-3.528.545-4.657 1.633-1.129 1.089-1.694 2.702-1.694 4.839v8.225c0 2.097.565 3.71 1.694 4.838 1.129 1.09 2.681 1.633 4.657 1.633ZM538.784 95.022V61.758h7.378v6.35h2.056l-2.056 1.755c0-2.742.786-4.879 2.359-6.411 1.613-1.532 3.81-2.298 6.592-2.298 3.266 0 5.867 1.088 7.802 3.265 1.976 2.178 2.964 5.101 2.964 8.77v21.833h-7.56V73.975c0-2.016-.525-3.568-1.573-4.657-1.048-1.088-2.52-1.633-4.415-1.633-1.855 0-3.326.565-4.415 1.694-1.048 1.129-1.572 2.742-1.572 4.838v20.805h-7.56ZM601.478 95.022c-2.178 0-4.093-.443-5.746-1.33a9.727 9.727 0 0 1-3.81-3.75c-.928-1.653-1.391-3.548-1.391-5.685v-26.55h-10.645v-6.835h18.205v33.385c0 1.21.343 2.177 1.028 2.903.726.685 1.693 1.028 2.903 1.028h10.04v6.834h-10.584ZM626.977 95.022v-6.894h11.612V68.593h-10.1v-6.835h17.357v26.37h10.282v6.894h-29.151Zm14.636-38.828c-1.532 0-2.742-.383-3.629-1.149-.887-.806-1.331-1.875-1.331-3.205s.444-2.38 1.331-3.145c.887-.807 2.097-1.21 3.629-1.21s2.742.403 3.629 1.21c.887.766 1.33 1.814 1.33 3.145 0 1.33-.443 2.399-1.33 3.205-.887.766-2.097 1.15-3.629 1.15ZM671.164 95.022V61.758h7.378v6.35h2.057l-2.057 1.755c0-2.742.787-4.879 2.359-6.411 1.613-1.532 3.81-2.298 6.592-2.298 3.266 0 5.867 1.088 7.802 3.265 1.976 2.178 2.964 5.101 2.964 8.77v21.833h-7.56V73.975c0-2.016-.524-3.568-1.573-4.657-1.048-1.088-2.52-1.633-4.415-1.633-1.854 0-3.326.565-4.415 1.694-1.048 1.129-1.572 2.742-1.572 4.838v20.805h-7.56ZM728.838 95.627c-2.822 0-5.282-.544-7.378-1.633-2.097-1.088-3.73-2.6-4.899-4.536-1.129-1.975-1.694-4.274-1.694-6.894v-8.347c0-2.62.565-4.899 1.694-6.834 1.169-1.976 2.802-3.508 4.899-4.596 2.096-1.09 4.556-1.633 7.378-1.633 2.782 0 5.201.544 7.258 1.632 2.096 1.09 3.709 2.621 4.838 4.597 1.169 1.935 1.754 4.214 1.754 6.834v5.988h-20.503v2.359c0 2.338.565 4.112 1.694 5.322 1.129 1.169 2.802 1.754 5.02 1.754 1.693 0 3.064-.283 4.112-.847 1.049-.605 1.714-1.472 1.996-2.6h7.439c-.564 2.862-2.096 5.16-4.596 6.894-2.46 1.694-5.464 2.54-9.012 2.54Zm6.532-19.656v-1.814c0-2.298-.544-4.052-1.633-5.262-1.089-1.25-2.722-1.875-4.899-1.875s-3.83.625-4.959 1.875c-1.129 1.25-1.694 3.024-1.694 5.322v1.27l13.729-.12-.544.604Z" />
      </mask>
      <path
        fill="#493C58"
        d="M508.144 95.567c-2.823 0-5.282-.524-7.379-1.573-2.056-1.088-3.669-2.6-4.838-4.536-1.129-1.975-1.694-4.294-1.694-6.955v-8.225c0-2.661.565-4.96 1.694-6.895a11.665 11.665 0 0 1 4.838-4.536c2.097-1.089 4.556-1.633 7.379-1.633 2.863 0 5.322.544 7.378 1.633 2.057 1.048 3.649 2.56 4.778 4.536 1.17 1.935 1.754 4.214 1.754 6.834v8.286c0 2.661-.584 4.98-1.754 6.955-1.129 1.936-2.721 3.448-4.778 4.536-2.056 1.049-4.515 1.573-7.378 1.573Zm0-6.593c2.016 0 3.568-.544 4.657-1.633 1.129-1.128 1.693-2.741 1.693-4.838v-8.225c0-2.137-.564-3.75-1.693-4.839-1.089-1.088-2.641-1.633-4.657-1.633-1.976 0-3.528.545-4.657 1.633-1.129 1.089-1.694 2.702-1.694 4.839v8.225c0 2.097.565 3.71 1.694 4.838 1.129 1.09 2.681 1.633 4.657 1.633ZM538.784 95.022V61.758h7.378v6.35h2.056l-2.056 1.755c0-2.742.786-4.879 2.359-6.411 1.613-1.532 3.81-2.298 6.592-2.298 3.266 0 5.867 1.088 7.802 3.265 1.976 2.178 2.964 5.101 2.964 8.77v21.833h-7.56V73.975c0-2.016-.525-3.568-1.573-4.657-1.048-1.088-2.52-1.633-4.415-1.633-1.855 0-3.326.565-4.415 1.694-1.048 1.129-1.572 2.742-1.572 4.838v20.805h-7.56ZM601.478 95.022c-2.178 0-4.093-.443-5.746-1.33a9.727 9.727 0 0 1-3.81-3.75c-.928-1.653-1.391-3.548-1.391-5.685v-26.55h-10.645v-6.835h18.205v33.385c0 1.21.343 2.177 1.028 2.903.726.685 1.693 1.028 2.903 1.028h10.04v6.834h-10.584ZM626.977 95.022v-6.894h11.612V68.593h-10.1v-6.835h17.357v26.37h10.282v6.894h-29.151Zm14.636-38.828c-1.532 0-2.742-.383-3.629-1.149-.887-.806-1.331-1.875-1.331-3.205s.444-2.38 1.331-3.145c.887-.807 2.097-1.21 3.629-1.21s2.742.403 3.629 1.21c.887.766 1.33 1.814 1.33 3.145 0 1.33-.443 2.399-1.33 3.205-.887.766-2.097 1.15-3.629 1.15ZM671.164 95.022V61.758h7.378v6.35h2.057l-2.057 1.755c0-2.742.787-4.879 2.359-6.411 1.613-1.532 3.81-2.298 6.592-2.298 3.266 0 5.867 1.088 7.802 3.265 1.976 2.178 2.964 5.101 2.964 8.77v21.833h-7.56V73.975c0-2.016-.524-3.568-1.573-4.657-1.048-1.088-2.52-1.633-4.415-1.633-1.854 0-3.326.565-4.415 1.694-1.048 1.129-1.572 2.742-1.572 4.838v20.805h-7.56ZM728.838 95.627c-2.822 0-5.282-.544-7.378-1.633-2.097-1.088-3.73-2.6-4.899-4.536-1.129-1.975-1.694-4.274-1.694-6.894v-8.347c0-2.62.565-4.899 1.694-6.834 1.169-1.976 2.802-3.508 4.899-4.596 2.096-1.09 4.556-1.633 7.378-1.633 2.782 0 5.201.544 7.258 1.632 2.096 1.09 3.709 2.621 4.838 4.597 1.169 1.935 1.754 4.214 1.754 6.834v5.988h-20.503v2.359c0 2.338.565 4.112 1.694 5.322 1.129 1.169 2.802 1.754 5.02 1.754 1.693 0 3.064-.283 4.112-.847 1.049-.605 1.714-1.472 1.996-2.6h7.439c-.564 2.862-2.096 5.16-4.596 6.894-2.46 1.694-5.464 2.54-9.012 2.54Zm6.532-19.656v-1.814c0-2.298-.544-4.052-1.633-5.262-1.089-1.25-2.722-1.875-4.899-1.875s-3.83.625-4.959 1.875c-1.129 1.25-1.694 3.024-1.694 5.322v1.27l13.729-.12-.544.604Z"
      />
      <path
        stroke="#C6AFE0"
        stroke-width="11.313"
        d="M508.144 95.567c-2.823 0-5.282-.524-7.379-1.573-2.056-1.088-3.669-2.6-4.838-4.536-1.129-1.975-1.694-4.294-1.694-6.955v-8.225c0-2.661.565-4.96 1.694-6.895a11.665 11.665 0 0 1 4.838-4.536c2.097-1.089 4.556-1.633 7.379-1.633 2.863 0 5.322.544 7.378 1.633 2.057 1.048 3.649 2.56 4.778 4.536 1.17 1.935 1.754 4.214 1.754 6.834v8.286c0 2.661-.584 4.98-1.754 6.955-1.129 1.936-2.721 3.448-4.778 4.536-2.056 1.049-4.515 1.573-7.378 1.573Zm0-6.593c2.016 0 3.568-.544 4.657-1.633 1.129-1.128 1.693-2.741 1.693-4.838v-8.225c0-2.137-.564-3.75-1.693-4.839-1.089-1.088-2.641-1.633-4.657-1.633-1.976 0-3.528.545-4.657 1.633-1.129 1.089-1.694 2.702-1.694 4.839v8.225c0 2.097.565 3.71 1.694 4.838 1.129 1.09 2.681 1.633 4.657 1.633ZM538.784 95.022V61.758h7.378v6.35h2.056l-2.056 1.755c0-2.742.786-4.879 2.359-6.411 1.613-1.532 3.81-2.298 6.592-2.298 3.266 0 5.867 1.088 7.802 3.265 1.976 2.178 2.964 5.101 2.964 8.77v21.833h-7.56V73.975c0-2.016-.525-3.568-1.573-4.657-1.048-1.088-2.52-1.633-4.415-1.633-1.855 0-3.326.565-4.415 1.694-1.048 1.129-1.572 2.742-1.572 4.838v20.805h-7.56ZM601.478 95.022c-2.178 0-4.093-.443-5.746-1.33a9.727 9.727 0 0 1-3.81-3.75c-.928-1.653-1.391-3.548-1.391-5.685v-26.55h-10.645v-6.835h18.205v33.385c0 1.21.343 2.177 1.028 2.903.726.685 1.693 1.028 2.903 1.028h10.04v6.834h-10.584ZM626.977 95.022v-6.894h11.612V68.593h-10.1v-6.835h17.357v26.37h10.282v6.894h-29.151Zm14.636-38.828c-1.532 0-2.742-.383-3.629-1.149-.887-.806-1.331-1.875-1.331-3.205s.444-2.38 1.331-3.145c.887-.807 2.097-1.21 3.629-1.21s2.742.403 3.629 1.21c.887.766 1.33 1.814 1.33 3.145 0 1.33-.443 2.399-1.33 3.205-.887.766-2.097 1.15-3.629 1.15ZM671.164 95.022V61.758h7.378v6.35h2.057l-2.057 1.755c0-2.742.787-4.879 2.359-6.411 1.613-1.532 3.81-2.298 6.592-2.298 3.266 0 5.867 1.088 7.802 3.265 1.976 2.178 2.964 5.101 2.964 8.77v21.833h-7.56V73.975c0-2.016-.524-3.568-1.573-4.657-1.048-1.088-2.52-1.633-4.415-1.633-1.854 0-3.326.565-4.415 1.694-1.048 1.129-1.572 2.742-1.572 4.838v20.805h-7.56ZM728.838 95.627c-2.822 0-5.282-.544-7.378-1.633-2.097-1.088-3.73-2.6-4.899-4.536-1.129-1.975-1.694-4.274-1.694-6.894v-8.347c0-2.62.565-4.899 1.694-6.834 1.169-1.976 2.802-3.508 4.899-4.596 2.096-1.09 4.556-1.633 7.378-1.633 2.782 0 5.201.544 7.258 1.632 2.096 1.09 3.709 2.621 4.838 4.597 1.169 1.935 1.754 4.214 1.754 6.834v5.988h-20.503v2.359c0 2.338.565 4.112 1.694 5.322 1.129 1.169 2.802 1.754 5.02 1.754 1.693 0 3.064-.283 4.112-.847 1.049-.605 1.714-1.472 1.996-2.6h7.439c-.564 2.862-2.096 5.16-4.596 6.894-2.46 1.694-5.464 2.54-9.012 2.54Zm6.532-19.656v-1.814c0-2.298-.544-4.052-1.633-5.262-1.089-1.25-2.722-1.875-4.899-1.875s-3.83.625-4.959 1.875c-1.129 1.25-1.694 3.024-1.694 5.322v1.27l13.729-.12-.544.604Z"
        mask="url(#d)"
      />
    </svg>
  </InlineWrapper>
);

export default InlineLogo;
