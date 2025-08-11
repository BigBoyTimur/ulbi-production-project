import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getLoginUsername selector', () => {
    it('should return the username from the login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'johnDoe',
            },
        };
        
        const result = getLoginUsername(state as StateSchema);
        expect(result).toBe('johnDoe');
    });

    it('should return empty string if state is empty', () => {
        const state: DeepPartial<StateSchema> = {};

        const result = getLoginUsername(state as StateSchema);
        expect(result).toBe('');
    });
});
