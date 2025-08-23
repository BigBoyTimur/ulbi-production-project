import { StateSchema } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';

export const getArticlesPageOrder = (state: StateSchema): SortOrder => state.articlesPage?.order ?? 'asc';
