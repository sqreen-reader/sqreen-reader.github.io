import logo from '../../logo.svg';
import './HomePage.css';
import {useNavigate} from "react-router-dom";
import demo from '../../videos/demo.mov';

function HomePage() {

    const navigate = useNavigate();

    const routeToDownloads = () => {
        navigate('/download');
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">sQReen Reader</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <button className="btn btn-primary btn-lg" onClick={routeToDownloads}>
                    Download
                </button>

                <div className="summary">
                    <h2>What is sQreen Reader?</h2>
                    <p>sQReen Reader is a desktop tool that watches your screen for QR codes and gives you a way to open
                        the hyperlinks embedded in the QR code.</p>
                </div>
                <video loop muted controls autoPlay>
                    <source src={demo} type='video/mp4' />
                </video>
                <h2>Open Source</h2>
                <p>sQreen Reader is open source. The source code can be found on <a href="https://github.com/sqreen-reader">github.com.</a> </p>
            </header>
        </div>
    );
}

export default HomePage;
