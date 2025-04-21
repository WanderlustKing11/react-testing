
import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';


describe('ProductImageGallery', () => {
    it('should return null if the image array is empty', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />);
        
        expect(container).toBeEmptyDOMElement();
    });

    it('should render a list of images', () => {
        const imageUrls: string[] = ['url1', 'url2', 'url3', 'url4']

        render(<ProductImageGallery imageUrls={imageUrls} />);

        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(4);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url);
        })
    })
})