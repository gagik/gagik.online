import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./index.sass";
import { AnimatedLogo } from "../components/AnimatedLogo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div>
        <AnimatedLogo />
      </div>
      <div className="intro">
        <p>
          <a href="https://gagik.online">gagik.online</a> is a studio for
          digital projects.
        </p>
        <p>It is a space on the internet for creating and sharing new ideas.</p>
        <p>
          First such project is <a href="https://gri.chat/">gri</a>, the
          journalling and productivity app all done through texting.
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>gagik.online | Online Studio</title>;
