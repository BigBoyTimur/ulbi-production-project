import { getProfileError } from './getProfileError';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getProfileError selector', () => {
    it('should return profile error from the state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Error loading profile data',
            },
        };

        const result = getProfileError(state as StateSchema);
        expect(result).toBe(state.profile?.error);
    });
});
