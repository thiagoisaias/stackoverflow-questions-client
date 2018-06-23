import styled from "styled-components";
import { devices } from "../utils/devices";

export const LayoutWrapper = styled.div`
  min-width: 320px;
  max-width: 768px;
  margin: 0 auto;

  @media ${devices.largeUp} {
    padding: 16px;
  }
`;
