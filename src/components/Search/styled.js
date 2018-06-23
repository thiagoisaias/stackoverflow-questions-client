import styled from "styled-components";
import { devices } from "../../utils/devices";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.mediumDown} {
    margin: 6px 0;
  }

  @media ${devices.largeUp} {
    margin: 0 6px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const InputListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mediumDown} {
    flex-direction: column;
  }
`;

export const StyledForm = styled.form`
  background-color: #ddd;
  padding: 16px;
`;

export const StyledInput = styled.input`
  display: block;
  height: 35px;
  width: calc(100% - 6px);
  margin-top: 4px;
  padding-left: 6px;
  font-size: 16px;
  border: none;
  color: #484848;
`;

export const StyledLabel = styled.label`
  color: #484848;
`;

export const SubmitButton = styled.button`
  height: 35px;
  width: 120px;
  outline: none;
  border: none;
  background-color: #8cc155;
  font-size: 16px;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #8cc155cc;
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const Subtitle = styled.p`
  color: #777;
  font-size: 18px;
  font-style: italic;
`;

export const Title = styled.h1`
  color: #484848;

  @media ${devices.mediumDown} {
    margin-left: 16px;
  }
`;

export const Wrapper = styled.div``;
