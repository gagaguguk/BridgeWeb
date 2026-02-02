// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BridgeWeb3 title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BridgeWeb3/i);
    expect(titleElement).toBeInTheDocument();
});
