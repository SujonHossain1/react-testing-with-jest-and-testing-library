import { fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
    describe('initialized with defaultCount = 10, description = "WWW"', () => {
        beforeEach(() => {
            render(<Counter description="count" defaultCount={10} />);
        });

        it('the counter = 10', () => {
            expect(screen.getByText('Current Count: 10')).toBeInTheDocument();
        });

        describe('when the incrementor changes to 5 and plus button clicked', () => {
            beforeEach(() => {
                user.type(screen.getByLabelText(/Incrementor/), '{selectall}5')
                user.click(screen.getByRole('button', { name: 'increment' }));
            });
            it('then counter = 15', () => {
                expect(screen.getByText('Current Count: 15')).toBeInTheDocument();
            });
        })

        describe('when the decrement changes to 5 and minus button clicked', () => {
            beforeEach(() => {
                user.type(screen.getByLabelText(/Incrementor/), '{selectall}5')
                user.click(screen.getByRole('button', { name: 'decrement' }));
            });
            it('then counter = 5', () => {
                expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
            });
        })

    });

    describe('initialized with defaultCount = 0, description = "count"', () => {
        beforeEach(() => {
            render(<Counter description="count" defaultCount={0} />);
        });

        it('defaultCount = 0 then counter = 0', () => {
            expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
        });

        describe('when plus button is clicked', () => {
            beforeEach(() => {
                fireEvent.click(screen.getByRole('button', { name: 'increment' }));
            });
            it('render counter = 1', () => {
                expect(
                    screen.getByText('Current Count: 1')
                ).toBeInTheDocument();
            });
        });

        describe('when minus button is clicked', () => {
            beforeEach(() => {
                fireEvent.click(screen.getByRole('button', { name: 'decrement' }));
            });
            it('render counter = -1', () => {
                expect(
                    screen.getByText('Current Count: -1')
                ).toBeInTheDocument();
            });
        });
    });
});
