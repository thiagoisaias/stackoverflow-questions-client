import styled from "styled-components";
import { devices } from "../../../utils/devices";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e2e2;

  @media ${devices.mediumDown} {
    padding: 16px 8px;
  }

  @media ${devices.largeUp} {
    padding: 16px;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BottomInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfilePictureThumbnail = styled.img`
  display: block;
  margin-right: 8px;

  @media ${devices.mediumDown} {
    width: 27px;
    height: 27px;
  }

  @media ${devices.largeUp} {
    width: 36px;
    height: 36px;
  }
`;

export const PostedBy = styled.span`
  display: flex;
  align-items: center;
  max-width: 250px;
  padding: 8px;
  background-color: #e1ecf4;
  color: #39739d;

  > span {
    font-size: 14px;
    color: #39739d;
  }

  @media ${devices.mediumDown} {
    margin-top: 8px;
  }
`;

export const QuestionTitle = styled.p`
  color: #484848;
  font-size: 18px;
  margin: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${devices.mediumDown}{
    margin-right: 16px;
  }
  
  @media ${devices.largeUp}{
    margin-right: 48px;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-bottom: 16px;
    > span:first-child {
      font-size: 24px;
      color: #777;
    }

    > span:last-child {
      color: #777;
    }
  }

  &:last-child {
    background-color: #9cc670;
    color: #fff;
    padding: 12px;
    > span:first-child {
      font-size: 24px;
    }
    > span:last-child {
      font-size: 14px;
    }
  }
`;

export const TagList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${devices.largeUp} {
    margin: 16px 0;
  }
`;

export const Tag = styled.div`
  background-color: #e1ecf4;
  color: #39739d;
  padding: 6px;
  font-size: 13px;
  margin-right: 12px;

  @media ${devices.mediumDown} {
    padding: 6px;
    font-size: 13px;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  @media ${devices.largeUp} {
    padding: 8px;
    font-size: 14px;
    margin-top: 6px;
  }
`;
