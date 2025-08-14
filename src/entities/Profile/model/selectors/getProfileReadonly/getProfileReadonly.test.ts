import { getProfileReadonly } from './getProfileReadonly';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getProfileReadonly selector', () => {
    it('should return true if profile is readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        const result = getProfileReadonly(state as StateSchema);
        expect(result).toBe(true);
    });
});
