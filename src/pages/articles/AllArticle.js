import React from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "../../components/cards/ArticleCard";

const AllArticle = () => {
  return (
    <Container>
      <Row>
        <TitleWrapper>
          <TitleComponent title="مقاله های پزشکی" align="right" />
        </TitleWrapper>
      </Row>
      <AllArticleRow>
        <AllArticleCol md={4} sm={12}>
          <ArticleCard
            title="شکر گزاری"
            description="همه ی ما نیاز به راز و نیاز با معبود خود داریم و بهترین روش آن شکر گزاری است. در این ویدیو ..."
            image="/images/test/test.png"
            author="دکتر مهدی ریحانیان"
            commentCount="5"
            date="1400-01-15"
            saved="0"
            link="/articles"
          />
        </AllArticleCol>
        <AllArticleCol md={4} sm={12}>
          <ArticleCard
            title="شکر گزاری"
            description="همه ی ما نیاز به راز و نیاز با معبود خود داریم و بهترین روش آن شکر گزاری است. در این ویدیو ..."
            image="/images/test/test.png"
            author="دکتر مهدی ریحانیان"
            commentCount="5"
            date="1400-01-15"
            saved="0"
            link="/articles"
          />
        </AllArticleCol>
        <AllArticleCol md={4} sm={12}>
          <ArticleCard
            title="شکر گزاری"
            description="همه ی ما نیاز به راز و نیاز با معبود خود داریم و بهترین روش آن شکر گزاری است. در این ویدیو ..."
            image="/images/test/test.png"
            author="دکتر مهدی ریحانیان"
            commentCount="5"
            date="1400-01-15"
            saved="0"
            link="/articles"
          />
        </AllArticleCol>
        <AllArticleCol md={4} sm={12}>
          <ArticleCard
            title="شکر گزاری"
            description="همه ی ما نیاز به راز و نیاز با معبود خود داریم و بهترین روش آن شکر گزاری است. در این ویدیو ..."
            image="/images/test/test.png"
            author="دکتر مهدی ریحانیان"
            commentCount="5"
            date="1400-01-15"
            saved="0"
            link="/articles"
          />
        </AllArticleCol>
      </AllArticleRow>
    </Container>
  );
};

export default AllArticle;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const AllArticleRow = styled(Row)``;

const AllArticleCol = styled(Col)`
  margin: 1rem 0;
`;
