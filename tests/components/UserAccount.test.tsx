
import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities';


describe('UserAccount', () => {
    it('should render the user name', () => {
        // render(<UserAccount user={{
        //     id: 123,
        //     name: 'Doug',
        //     isAdmin: true
        // }} />);
        const user: User = { id: 1, name: "Doug" };
        render(<UserAccount user={user} />)

        expect(screen.getByText(user.name)).toBeInTheDocument();
    });

    it('should render the edit button if user is admin', () => {
        const user: User = { id: 2, name: "Douglas", isAdmin: true };
        render(<UserAccount user={user} />)

        const editButton = screen.getByRole('button');
        expect(editButton).toBeInTheDocument();
        expect(editButton).toHaveTextContent(/edit/i)
    });

    it('should not render the edit button if user is not admin', () => {
        const user: User = { id: 1, name: "Heather", isAdmin: false };
        render(<UserAccount user={user} />)

        const editButton = screen.queryByRole('button');
        expect(editButton).not.toBeInTheDocument();
    });
})