import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleCard from "../../../components/cards/ArticleCard";
import { Col, Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import useAxiosAuth from "../../../hooks/useAxiosAuth";
import Title from "./Title";

const SavedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let api = useAxiosAuth();

  const getData = async (url) => {
    try {
      let response = await api.get(url);
      const data = response.data;
      console.log(data);

      setArticles(data);
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = "/articles/saves";

    getData(url);
  }, []);

  return (
    <SavedArticleWrapper>
      <TitleWrapper>
        <Title title={"مقاله های ذخیره شده"} span={""} />
      </TitleWrapper>
      <AllArticleRow>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && articles?.length == 0 && (
          <p>مقاله ای ذخیره نکردید.</p>
        )}

        {!loading && !error && articles?.length > 0 && (
          <>
            {articles.map((article, i) => {
              return (
                <AllArticleCol md={4} sm={12}>
                  <ArticleCard
                    title={article.title}
                    description={article.short_body}
                    image={
                      article.image ? article.image : "/images/card_img.jpg"
                    }
                    author={article.user}
                    date={article.updated_at}
                    link={"/articles/" + article.id}
                  />
                </AllArticleCol>
              );
            })}
          </>
        )}
      </AllArticleRow>
    </SavedArticleWrapper>
  );
};

export default SavedArticles;

const SavedArticleWrapper = styled.div``;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const AllArticleRow = styled(Row)``;

const AllArticleCol = styled(Col)`
  margin: 1rem 0;
`;
