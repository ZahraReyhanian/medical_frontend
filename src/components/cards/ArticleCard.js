import React from "react";
import styled from "styled-components";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Caption2, H4 } from "../styles/TextStyles";
import { Link } from "react-router-dom";

const ArticleCard = ({
  title,
  description,
  image,
  author,
  commentCount,
  link,
  date,
  saved,
}) => {
  return (
    <CardContainer>
      <Row>
        <Link to={link}>
          <ImageWrapper md={12} sm={12}>
            <img src={image} />
          </ImageWrapper>
        </Link>
        <DescriptionWrapper md={12} sm={12}>
          <Link to={link}>
            <H4>{title}</H4>
          </Link>
          <Caption2>{description}</Caption2>
        </DescriptionWrapper>
        <FooterWrapper md={12} sm={12}>
          <SaveItemWrapper>
            {saved == 1 ? (
              <img src="/images/icons/filled-saved.png" />
            ) : (
              <img src="/images/icons/saved.png" />
            )}
          </SaveItemWrapper>
          <DetailWrapper>
            <AuthorWrapper>{author}</AuthorWrapper>
            <DateWrapper>{date}</DateWrapper>
            <DotWrapper>.</DotWrapper>
            <CommentCountWrapper>
              {commentCount} <img src="/images/icons/comment.png" />
            </CommentCountWrapper>
          </DetailWrapper>
        </FooterWrapper>
      </Row>
    </CardContainer>
  );
};

export default ArticleCard;

const CardContainer = styled.div`
  margin: 0 1rem;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
`;

const ImageWrapper = styled(Col)`
  overflow: hidden;
  img {
    width: 100%;
    height: 215px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const DescriptionWrapper = styled(Col)`
  padding: 1rem 2rem;

  h4 {
    text-align: center;
    font-weight: 600;
    color: #2f8f9d;
    &:hover {
      color: #037fff;
    }
  }

  p {
    font-weight: 400;
    margin-top: 0.8rem;
  }
`;

const FooterWrapper = styled(Col)`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SaveItemWrapper = styled.div`
  img {
    width: 30px;
    height: 33px;
  }
`;

const DetailWrapper = styled.div`
  text-align: left;
  direction: ltr;
  font-size: 14px;
`;

const AuthorWrapper = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
`;

const DateWrapper = styled.span`
  font-weight: 100;
`;

const DotWrapper = styled.span`
  margin: 0 5px;
`;

const CommentCountWrapper = styled.span`
  font-weight: 100;
  img {
    width: 15px;
  }
`;
