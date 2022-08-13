import React, { useEffect } from "react";
import styled from "styled-components";
import { Button, Container, SectionContainer } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "../cards/ArticleCard";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { earliestArticleAxios } from "../../api/api_article";

const ArticleSection = () => {
  const [data, pageCount, error, loading, axiosFetch] = useAxios();

  const getData = () => {
    axiosFetch({
      axiosInstance: earliestArticleAxios,
      method: "get",
      url: "/articles/earliest/",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SectionContainer>
      <Container>
        <ArticleRow>
          <TitleComponent title="جدیدترین مقاله ها" align={"center"} />
        </ArticleRow>
        <ArticleRow>
          {loading && <p>در حال بارگزاری ...</p>}

          {!loading && error && <p className="errMsg">{error}</p>}

          {!loading && !error && data?.length && (
            <>
              {data.map((article, i) => {
                return (
                  <ArticleCol md={4} sm={12}>
                    <ArticleCard
                      title={article.title}
                      description={article.short_body}
                      image={
                        article.image
                          ? "http://86.106.142.102/api" + article.image
                          : "/images/card_img.jpg"
                      }
                      author={article.user}
                      date={article.updated_at}
                      link={"/articles/" + article.id}
                    />
                  </ArticleCol>
                );
              })}
            </>
          )}
          {/* <ArticleCol md={4} sm={12}>
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
          </ArticleCol> */}
        </ArticleRow>
        <ButtonWrapper>
          <Link to="/articles">
            <AllArticleButton>همه مقاله ها</AllArticleButton>
          </Link>
        </ButtonWrapper>
      </Container>
    </SectionContainer>
  );
};

export default ArticleSection;

const ArticleRow = styled(Row)`
  margin: 3rem 0;
`;

const ArticleCol = styled(Col)`
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const AllArticleButton = styled(Button)`
  background: #4c8d9bcf;

  &:hover {
    background: #66edd5c4;
  }
`;
