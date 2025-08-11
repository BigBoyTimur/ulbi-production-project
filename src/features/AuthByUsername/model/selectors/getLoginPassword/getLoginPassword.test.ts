import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getLoginPassword selector', () => {
    it('should return the password from the login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password123',
            },
        };

        const result = getLoginPassword(state as StateSchema);
        expect(result).toBe('password123');
    });

    it('should return empty string if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};

        const result = getLoginPassword(state as StateSchema);
        expect(result).toBe('');
    });
});
