import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  Wrapper,
  InfoWrapper,
  BottomInfoWrapper,
  PostedBy,
  QuestionTitle,
  StatsWrapper,
  Stats,
  TagList,
  Tag,
  ProfilePictureThumbnail
} from "./styled";

const Item = props => {
  const { createdAt, numberOfAnswers, user, score, tags, title, url } = props;
  return (
    <Wrapper>
      <StatsWrapper>
        <Stats>
          <span>{score}</span>
          <span>score</span>
        </Stats>
        <Stats>
          <span>{numberOfAnswers}</span>
          <span>answers</span>
        </Stats>
      </StatsWrapper>
      <InfoWrapper>
        <a href={url} target="_blank" rel="noopener">
          <QuestionTitle>{title}</QuestionTitle>
        </a>
        <BottomInfoWrapper>
          <TagList>
            {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </TagList>
          <PostedBy>
            <ProfilePictureThumbnail src={user && user.profileImage} />
            <span>{`Asked ${moment
              .unix(createdAt)
              .format("MMM D YYYY")} by ${user && user.name}`}</span>
          </PostedBy>
        </BottomInfoWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  createdAt: PropTypes.string,
  numberOfAnswers: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    profileImage: PropTypes.string
  }),
  score: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  url: PropTypes.string
};

export default Item;
