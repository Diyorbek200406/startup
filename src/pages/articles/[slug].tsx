import { ArticlesType } from "@/interfaces/article.interface";
import { WithLayout } from "@/layouts/layout";
import { ArticleDetailedComponent } from "@/page-component";
import { Articles } from "@/services/article.service";
import { GetServerSideProps } from "next";

const ArticleDetailPage = ({ article }: ArticleDetailPageProps) => {
  return <ArticleDetailedComponent article={article} />;
};

export default WithLayout(ArticleDetailPage);

export const getServerSideProps: GetServerSideProps<ArticleDetailPageProps> = async ({ query }) => {
  const article = await Articles.getDetailedArticle(query.slug as string);

  return { props: { article } };
};

interface ArticleDetailPageProps extends Record<string, unknown> {
  article: ArticlesType;
}
