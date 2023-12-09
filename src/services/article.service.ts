import { gql, request } from "graphql-request";
import { Language } from "@/interfaces/constants.interface";
import { ArticlesType } from "@/interfaces/article.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
  async getArticles(lng: Language) {
    const query = gql`
      query Articles($lng: Language) {
        articles(where: { language: $lng }) {
          createdAt
          id
          title
          excerpt
          slug
          language
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          description {
            text
          }
        }
      }
    `;
    const result = await request<{ articles: ArticlesType[] }>(graphqlAPI, query, { lng });
    return result.articles;
  },

  async getDetailedArticle(slug: string) {
    const query = gql`
      query DetailedArticle($slug: String!) {
        article(where: { slug: $slug }) {
          createdAt
          id
          title
          excerpt
          slug
          language
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          description {
            text
            raw
          }
        }
      }
    `;
    const result = await request<{ article: ArticlesType }>(graphqlAPI, query, { slug });
    return result.article;
  },
};
