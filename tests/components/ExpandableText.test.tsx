
import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';

describe('ExpandableText', () => {
    const limit = 255;
    const longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio architecto dolorem mollitia corrupti modi, amet, pariatur reprehenderit perspiciatis deleniti cumque ipsum aperiam nulla, distinctio accusantium facere quidem nihil culpa debitis eaque omnis? Cum inventore obcaecati doloremque. Facere natus itaque deleniti vel enim corporis iste, iusto odit laborum quod magni et totam, accusantium odio, consequatur ipsum. Obcaecati porro doloremque hic, eligendi, odit eius quis quam ipsum ipsa earum aliquam exercitationem unde, ab repellat veritatis a fugit. Eligendi culpa dolore nemo explicabo nulla iure est non quidem quod, quos saepe odio officiis id illo quis numquam delectus illum nihil ad. Id, distinctio?"
    const truncatedText = longText.substring(0, limit) + '...';


    it('should render the full text if less than 255 characters', () => {
        const text = "Short text";
        render(<ExpandableText text={text} />);

        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('should truncate text if longer than 255 characters', () => {
        render(<ExpandableText text={longText} />);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(/more/i);
    });

    it('should expand text when Show More button is clicked', async () => {
        render(<ExpandableText text={longText} />);

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    });

    it('should collapse text when Show Less button is clicked', async () => {
        render(<ExpandableText text={longText} />);
        const showMoreButton = screen.getByRole('button', { name: /more/i });
        const user = userEvent.setup();
        await user.click(showMoreButton);

        const showLessButton = screen.getByRole('button', { name: /less/i });
        await user.click(showLessButton);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showMoreButton).toHaveTextContent(/more/i);
    });
})