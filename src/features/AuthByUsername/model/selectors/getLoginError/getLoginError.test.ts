import { getLoginError } from './getLoginError';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getLoginError selector', () => {
    it('should return the error from the login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error message',
            },
        };

        const result = getLoginError(state as StateSchema);
        expect(result).toBe('error message');
    });

    it('should return undefined if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};

        const result = getLoginError(state as StateSchema);
        expect(result).toBeUndefined();
    });
});
