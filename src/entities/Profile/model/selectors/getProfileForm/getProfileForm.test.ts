import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Country } from 'entities/Country';

describe('getProfileForm selector', () => {
    it('should return profile form from the state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
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

        const result = getProfileForm(state as StateSchema);
        expect(result).toEqual(state.profile?.form);
    });
});
