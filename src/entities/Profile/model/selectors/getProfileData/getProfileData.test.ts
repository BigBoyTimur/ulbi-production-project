import { getProfileData } from './getProfileData';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData selector', () => {
    it('should return profile data from the state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'John',
                    lastname: 'Doe',
                    age: 30,
                    city: 'New York',
                    username: 'johndoe',
                    avatar: 'https://example.com/avatar.jpg',
                    currency: Currency.RUB,
                    country: Country.Russia,
                },
            },
        };

        const result = getProfileData(state as StateSchema);
        expect(result).toEqual(state.profile?.data);
    });
});
