import React from "react";
import { InlineWrapper } from "./InlineWrapper";
import { InlineGagik } from "./InlineGagik";
import { InlineOnline } from "./InlineOnline";

export const AnimatedLogo = () => {
  return (
    <div className="animatedLogo">
      <div className="animatedLogo__gagik">
        <InlineWrapper width="20rem">
          <InlineGagik />
        </InlineWrapper>
      </div>
      <div className="animatedLogo__online">
        <InlineWrapper width="40rem" offset="20rem">
          <InlineOnline />
        </InlineWrapper>
      </div>
    </div>
  );
};
