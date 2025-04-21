
// Can replace 'vitest' import by settign globals as 'true' in vitest.config.ts'
// Must also update the tsconfig.json file and add 'vitest/globals' types to compilerOptions
// import { it, expect, describe } from 'vitest';

// Use Extension 'Testing Library Snippets': type 'itr'
import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

// move this import into our /tests/setup.ts file
// import '@testing-library/jest-dom/vitest';


// Using the 'Vitest Snippets' extension, can type: d -> describe; i -> it; ex -> expect
describe('Greet', () => {
    it('should render "Hello" with the name when name is provided', () => {
        render(<Greet name="Doug" />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/doug/i);
    });

    it('should render login button when name is not provided', () => {
        render(<Greet />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });
})