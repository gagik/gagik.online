import styled from "styled-components";

export const InlineWrapper = styled.div<{
  width: string;
  height?: string;
  offset?: string;
}>`
  ${(props) => (props.offset ? `width: ${props.offset};` : "")}
  overflow: hidden;

  svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height ?? "auto"};
  }
`;
