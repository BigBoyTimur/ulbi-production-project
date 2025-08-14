import { Dispatch, EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { createReducerManager } from './reducerManager';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = ReturnType<typeof createReducerManager>

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch: Dispatch;
    state: StateSchema;
}
