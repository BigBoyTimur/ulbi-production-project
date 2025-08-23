import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (userData, thunkAPI) => {
        const { username, password } = userData;
        const { rejectWithValue, dispatch, extra: { api, navigate }  } = thunkAPI;
        
        try {
            const response = await api.post<User>('/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }
            
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            navigate?.(RoutePath[AppRoutes.PROFILE] + response.data.id);

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
