import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider predefinedTheme={ theme }>
        <Story />            
    </ThemeProvider>
);

