import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    describe('initialized with defaultCount = 0, description = "count"', () => {
        beforeEach(() => {
            render(<Counter description="count" defaultCount={0} />);
        });

        it('defaultCount = 0 then counter = 0', () => {
            expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
        });

        it('clicked plus button then counter = 1', () => {
            fireEvent.click(screen.getByRole('button', { name: '+' }));
            expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
        });

        it('clicked minus button then counter = -1', () => {
            const minusButton = screen.getByText('-');
            minusButton.click();

            expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
        });
    });
});
