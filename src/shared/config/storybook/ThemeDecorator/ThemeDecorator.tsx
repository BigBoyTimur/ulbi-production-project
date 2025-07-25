import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={ `app ${ theme }` }>
        <ThemeProvider predefinedTheme={ theme }>
            <Story />            
        </ThemeProvider>
    </div>
);
