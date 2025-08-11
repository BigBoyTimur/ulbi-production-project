import { AnyAction, AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => (
    AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
);

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.Mocked<Dispatch<AnyAction>>;
    getState: () => StateSchema;
    asyncThunkActionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<(path: string) => void>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.asyncThunkActionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const thunk = this.asyncThunkActionCreator(arg);
        const result = await thunk(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
} 
