import { getLoginIsLoading } from './getLoginIsLoading';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getLoginIsLoading selector', () => {
    it('should return the isLoading state from the login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        const result = getLoginIsLoading(state as StateSchema);
        expect(result).toBe(true);
    });

    it('should return false if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};

        const result = getLoginIsLoading(state as StateSchema);
        expect(result).toBe(false);
    });
});
