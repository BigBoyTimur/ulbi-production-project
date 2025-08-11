import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    it('setUsername action sets username in state', () => {
        const state: LoginSchema = {
            isLoading: false,
            username: '',
            password: '',
        };
        expect(
            loginReducer(state, loginActions.setUsername('johnDoe')),
        ).toEqual({ isLoading: false, username: 'johnDoe', password: '' });
    });

    it('setPassword action sets password in state', () => {
        const state: LoginSchema = {
            isLoading: false,
            username: '',
            password: '',
        };
        expect(
            loginReducer(state, loginActions.setPassword('password123')),
        ).toEqual({ isLoading: false, username: '', password: 'password123' });
    });

    it('should work with empty state', () => {
        expect(
            loginReducer(undefined, loginActions.setUsername('johnDoe')),
        ).toEqual({ isLoading: false, username: 'johnDoe', password: '' });
    });
});
