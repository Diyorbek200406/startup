import { ArticlesType } from "@/interfaces/article.interface";
import { Language } from "@/interfaces/constants.interface";
import { WithLayout } from "@/layouts/layout";
import { ArticlePageComponent } from "@/page-component";
import { Articles } from "@/services/article.service";
import { GetServerSideProps } from "next";

const ArticlePage = ({ articles }: ArticlePageProps) => {
  return <ArticlePageComponent articles={articles} />;
};

export default WithLayout(ArticlePage);

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async ({ req }) => {
  const lng: Language = req.cookies.i18next as Language;

  const articles = await Articles.getArticles(lng);

  return { props: { articles } };
};

interface ArticlePageProps extends Record<string, unknown> {
  articles: ArticlesType[];
}
