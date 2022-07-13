import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "../../components/cards/ArticleCard";
import useAxios from "../../hooks/useAxios";
import { allArticleAxios } from "../../api/api_article";

const AllArticle = () => {
  const [articles, error, loading, axiosFetch] = useAxios();

  const getData = () => {
    axiosFetch({
      axiosInstance: allArticleAxios,
      method: "get",
      url: "/articles/",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row>
        <TitleWrapper>
          <TitleComponent title="مقاله های پزشکی" align="right" />
        </TitleWrapper>
      </Row>
      <AllArticleRow>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading &&
          !error &&
          articles?.length &&
          articles.map((article, i) => {
            return (
              <AllArticleCol md={4} sm={12}>
                <ArticleCard
                  title={article.title}
                  description={article.short_body}
                  image={article.image}
                  author={article.user}
                  date={article.updated_at}
                  saved="0"
                  link={"/articles/" + article.id}
                />
              </AllArticleCol>
            );
          })}
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
