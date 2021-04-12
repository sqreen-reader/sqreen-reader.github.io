import logo from '../../logo.svg';
import './HomePage.css';
import {useHistory} from "react-router-dom";

function HomePage() {

    const history = useHistory();

    const routeToDownloads = () => {
        history.push('/download');
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">sQReen Reader</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-lg" onClick={routeToDownloads}>
                    Download
                </button>
            </header>
        </div>
    );
}

export default HomePage;