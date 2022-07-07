import React from "react";
import styled from "styled-components";
import { Container, SectionContainer } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "../cards/ArticleCard";

const ArticleSection = () => {
  return (
    <SectionContainer>
      <Container>
        <ArticleRow>
          <TitleComponent title="جدیدترین مقاله ها" align={"center"} />
        </ArticleRow>
        <ArticleRow>
          <ArticleCol md={4} sm={12}>
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
          </ArticleCol>
          <ArticleCol md={4} sm={12}>
            <ArticleCard
              title="شکر گزاری"
              description="همه ی ما نیاز به راز و نیاز با معبود خود داریم و بهترین روش آن شکر گزاری است. در این ویدیو ..."
              image="/images/photo.jpg"
              author="دکتر مهدی ریحانیان"
              commentCount="10"
              date="1400-01-15"
              saved="1"
              link="/articles"
            />
          </ArticleCol>
          <ArticleCol md={4} sm={12}>
            <ArticleCard
              title="شکر گزاری"
              description="همه ی ما نیاز به راز و نیاز با معبود خود داریم و بهترین روش آن شکر گزاری است. در این ویدیو ..."
              image="/images/download.jpg"
              author="دکتر مهدی ریحانیان"
              commentCount="10"
              date="1400-01-15"
              saved="1"
              link="/articles"
            />
          </ArticleCol>
        </ArticleRow>
      </Container>
    </SectionContainer>
  );
};

export default ArticleSection;

const ArticleRow = styled(Row)`
  margin: 3rem 0;
`;

const ArticleCol = styled(Col)``;
