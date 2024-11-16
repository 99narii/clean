import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

test('renders learn react link', () => {
    render(
        <ChakraProvider>
            <App />
        </ChakraProvider>
    );
    const linkElement = screen.getByText(/learn react/i);
});
