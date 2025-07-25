import { Sidebar } from './Sidebar';

import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('Рендерит сайдбар', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Cайдбар сворачивается', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
