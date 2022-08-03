import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InnerHTML from "dangerously-set-html-content";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BodyMain } from "../../components/styles/TextStyles";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../components/context/AuthContext";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import useAxiosSimple from "../../hooks/useAxiosSimple";

const Article = () => {
  const location = useLocation();
  const [article, setArticle] = useState({});
  const [saved, setSaved] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let auth_api = useAxiosAuth();
  let api = useAxiosSimple();

  const saveArticle = async (url) => {
    try {
      let response = await auth_api.post(url);
      const data = response.data;
      console.log(data);
    } catch (err) {
      console.log(err.message);
    } finally {
    }
  };

  let { user } = useContext(AuthContext);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const get_article = async (url, auth) => {
    let data = {};
    let axios_api;

    if (auth) axios_api = auth_api;
    else axios_api = api;

    try {
      let response = await axios_api.get(url);
      data = response.data;
      console.log(data);

      setArticle(data);
      setSaved(data.saved);
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getData = (url) => {
    if (user) get_article(url, true);
    else get_article(url, false);
  };

  useEffect(() => {
    const url = location.pathname;

    getData(url);
  }, []);

  const history = useHistory();

  const changeSaved = (e) => {
    if (!user) {
      history.replace("/login", { from: location });
    } else {
      setSaved(e.target.checked);
      saveArticle("/articles/" + article.id + "/savearticle/");
    }
  };

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
                  onChange={changeSaved}
                  checked={saved}
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

  @media (max-width: 1060px) {
    padding: 0 8rem;
  }

  @media (max-width: 912px) {
    padding: 0 2rem;
  }

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

  @media (max-width: 912px) {
    max-width: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  margin: 3rem 0;
`;

const ArticleDescription = styled(BodyMain)`
  line-height: 32px;
  font-family: Vazir, serif !important;
  p,
  span {
    font-family: Vazir, serif !important;
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
