import { render, screen, fireEvent} from '@testing-library/react';
import {Router} from "react-router-dom";
import HomePage from "./HomePage";
import {createMemoryHistory} from "history";

test('renders header', () => {
    render(<HomePage />);
    const headerElement = screen.getByText(/sQReen Reader/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders Logo', () => {
    render(<HomePage />);
    const imageElement = screen.getByAltText('logo');
    expect(imageElement).toBeInTheDocument();
});

test('renders download button', async () => {
    render(<HomePage />);
    const button = screen.getByText('Download');
    expect(button).toBeInTheDocument();
    await fireEvent.click(button)

    const downloadHeaderElement = screen.getByText(/Download sQReen Reader/i);
    expect(downloadHeaderElement).toBeInTheDocument();
});

test('download button links to DownloadPage', async () => {
    const history = createMemoryHistory();

    render(
        <Router history={history}>
            <HomePage />
        </Router>
    );

    const button = screen.getByText('Download');
    await fireEvent.click(button)

    expect(history.location.pathname).toBe('/download');
});