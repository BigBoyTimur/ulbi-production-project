import { getProfileIsLoading } from './getProfileIsLoading';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getProfileIsLoading selector', () => {
    it('should return true if profile is loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        const result = getProfileIsLoading(state as StateSchema);
        expect(result).toBe(true);
    });
});
