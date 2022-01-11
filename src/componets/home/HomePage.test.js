import { render, screen, fireEvent} from '@testing-library/react';
import HomePage from "./HomePage";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('renders header', () => {
    render(<HomePage />);
    const headerElement = screen.getByText(/sQReen Reader$/i);
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
});

test('download button links to DownloadPage', async () => {
    render(<HomePage />);

    const button = screen.getByText('Download');
    await fireEvent.click(button)

    expect(mockedUsedNavigate).toBeCalledWith('/download');
});

test('renders summary', () => {
    render(<HomePage />);
    const summary = screen.getByText(/What is sQreen Reader?/i);
    expect(summary).toBeInTheDocument();
})

test('renders open source information', () => {
    render(<HomePage />);
    const summary = screen.getByText(/^Open Source$/i);
    expect(summary).toBeInTheDocument();
})

test('renders open source information', () => {
    render(<HomePage />);
    const openSourceHeader = screen.getByText(/^Open Source$/i);
    expect(openSourceHeader).toBeInTheDocument();
})

test('renders open source information', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/github.com/i);
    expect(linkElement).toBeInTheDocument();
})
