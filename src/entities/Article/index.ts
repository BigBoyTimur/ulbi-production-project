export { ArticleView } from './model/types/article';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';

export { Article, ArticleBlockType, ArticleType } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { getArticleDetailsData } from './model/selectors/getArticleDetailsData';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';

export { articleMock } from './lib/mocks/articleMock';
