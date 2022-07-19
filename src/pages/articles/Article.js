import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InnerHTML from "dangerously-set-html-content";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BodyMain } from "../../components/styles/TextStyles";
import { useLocation } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { articleAxios } from "../../api/api_article";

const Article = () => {
  const location = useLocation();

  const [article, pageCount, error, loading, axiosFetch] = useAxios();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const getData = (url) => {
    axiosFetch({
      axiosInstance: articleAxios,
      method: "get",
      url: url,
    });
  };

  useEffect(() => {
    const url = location.pathname;

    getData(url);
  }, []);

  return (
    <ArticleContainer>
      <Container>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && article && (
          <Row>
            <TitleComponent align="right" title={article.title} />
            <ArticleDetail>
              <DetailWrapper>
                <ArticleDate>ارسال شده در {article.updated_at}</ArticleDate>
                <DotWrapper>.</DotWrapper>
                <ArticleAuthor>{article.user}</ArticleAuthor>
              </DetailWrapper>
              <CheckBoxWrapper>
                <Checkbox
                  {...label}
                  style={{ direction: "ltr" }}
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                />
              </CheckBoxWrapper>
            </ArticleDetail>
            <ImageWrapper>
              <ArticleImage
                src={article.image ? article.image : "/images/card_img.jpg"}
              />
            </ImageWrapper>
            <DescriptionWrapper>
              <ArticleDescription>
                <InnerHTML html={article.body} />
              </ArticleDescription>
            </DescriptionWrapper>
          </Row>
        )}
      </Container>
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.div`
  padding: 0 12rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ArticleDetail = styled.div`
  font-weight: 100;
  padding-right: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArticleDate = styled.span``;

const DotWrapper = styled.span`
  padding: 0 1rem;
`;

const ArticleAuthor = styled.span``;

const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ArticleImage = styled.img`
  max-width: 40rem;
  min-width: 25rem;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 18rem;
  }
`;

const DescriptionWrapper = styled.div`
  margin: 3rem 0;
`;

const ArticleDescription = styled(BodyMain)`
  line-height: 32px;
  font-family: Shabnam, serif !important;
  p,
  span {
    font-family: Shabnam, serif !important;
    @media (max-width: 768px) {
      font-size: 14px !important;
    }
  }
  img {
    max-width: 100%;
  }
`;

const DetailWrapper = styled.div``;

const CheckBoxWrapper = styled.div`
  text-align: left;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
