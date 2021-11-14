import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecoundryButton = (props) => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #30997e;
`;
