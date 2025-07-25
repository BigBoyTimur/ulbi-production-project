import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme, ButtonSize } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,

    tags: [ 'autodocs' ],

    argTypes: {
        theme: {
            control: 'select',
            options: Object.values(ButtonTheme),
        },
        size: {
            control: 'select',
            options: Object.values(ButtonSize),
        },
        children: {
            control: 'text',
        },
        square: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultLight: Story = {
    args: {
        children: 'text',
        theme: undefined,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const DefaultDark: Story = {
    args: {
        children: 'text',
        theme: undefined,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const ClearLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const ClearInvertedLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const ClearInvertedDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const OutlineLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const OutlineDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const OutlineLightL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const OutlineDarkL: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const OutlineLightXl: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const OutlineDarkXl: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const BackgroundLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const BackgroundDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const BackgroundInvertedLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const SquareSizeMLight: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const SquareSizeMDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const SquareSizeLLight: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const SquareSizeLDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};

export const SquareSizeXLLight: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const SquareSizeXLDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};


export const DisabledLight: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};

export const DisabledDark: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        disabled: true,
    },
    decorators: [ ThemeDecorator(Theme.DARK) ],
};
