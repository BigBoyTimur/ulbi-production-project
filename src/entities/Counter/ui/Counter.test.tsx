import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';

describe('Counter component', () => {
    it('renders the initial count value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10');
    });

    it('rerenders count value after increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11');
    });

    it('rerenders count value after decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 9');
    });
});
