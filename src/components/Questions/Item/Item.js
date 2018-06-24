import React from "react";
import PropTypes from "prop-types";

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
  const { createdAt, numberOfAnswers, owner, score, tags, title, url } = props;
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
            <ProfilePictureThumbnail src={owner && owner.profileImage} />
            <span>{`Asked ${createdAt} by ${owner && owner.name}`}</span>
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
  owner: PropTypes.shape({
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
