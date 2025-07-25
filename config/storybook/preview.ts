import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator/i18nDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'padded',
    },
    decorators: [
        StyleDecorator,
        RouterDecorator,
        I18nDecorator,
    ],
};

export default preview;
