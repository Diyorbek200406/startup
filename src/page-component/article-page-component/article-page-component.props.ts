import { ArticlesType } from "@/interfaces/article.interface";

export interface ArticlePageComponentProps {
  articles: ArticlesType[];
}

export interface ArticleDetailedPageComponentProps {
  article: ArticlesType;
}
