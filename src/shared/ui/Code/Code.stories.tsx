import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: [ 'autodocs' ],
};

export default meta;

type Story = StoryObj<typeof Code>;

const codeExample = `
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
`;

export const Normal: Story = {
    args: {
        codeString: codeExample,
    },
    decorators: [ ThemeDecorator(Theme.LIGHT) ],
};
