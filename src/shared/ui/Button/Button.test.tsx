import { Button, ButtonTheme } from './Button';

import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Рендерит кнопку с текстом', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Рендерит кнопку с классом clear', () => {
        render(<Button theme={ ButtonTheme.CLEAR }>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
