import './DownloadPage.css';
import {Tabs, Tab} from 'react-bootstrap';
import {useState} from "react";
import logo from '../../logo.svg';

function DownloadPage() {
    const [key, setkey] = useState('java');
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Download sQReen Reader</h1>
                <Tabs id='downloads' activeKey={key} onSelect={(key) => setkey(key)}>
                    <Tab title='Java' eventKey='java'>
                        <button className='btn btn-primary btn-lg'>Download</button>
                    </Tab>
                    <Tab title='macOS' eventKey='mac'>
                        <button className='btn btn-primary btn-lg'>Download</button>
                    </Tab>
                    <Tab title='Windows' eventKey='win'>
                        <button className='btn btn-primary btn-lg'>Download</button>
                    </Tab>
                </Tabs>
            </header>
        </div>
    )
}

export default DownloadPage;