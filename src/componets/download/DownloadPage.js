import './DownloadPage.css';
import {Tabs, Tab} from 'react-bootstrap';
import {useState} from "react";
import logo from '../../logo.svg';
import downloadJava from '../../videos/java-run.mov';
import macInstall from '../../videos/mac-install.mov';
import downloadUrls from './download-urls.json';
import windowsInstall from '../../videos/windows-install.mp4';

function DownloadPage() {
    const [key, setkey] = useState('java');
    return (
        <div className='DownloadPage'>
            <header>
                <img src={logo} className="Download-logo" alt="logo" />
                <h1 className='Download-header'>Download sQReen Reader</h1>
                <Tabs id='downloads' activeKey={key} onSelect={(key) => setkey(key)} className='Download-Tabs'>
                    <Tab title='Java' eventKey='java'>
                        <p>Requires Java 11 or higher</p>
                        <a href={downloadUrls.java} className='btn btn-primary btn-lg'>Download</a>
                        <video loop autoPlay muted>
                            <source src={downloadJava} type='video/mp4' />
                        </video>
                    </Tab>
                    <Tab title='macOS' eventKey='mac'>
                        <a href={downloadUrls.mac}  className='btn btn-primary btn-lg'>Download</a>
                        <p>
                            dmg is not signed. Will need to right-click on the application and hit open.
                            Signed dmg coming soon.
                        </p>
                        <video loop autoPlay muted>
                            <source src={macInstall} type='video/mp4' />
                        </video>
                    </Tab>
                    <Tab title='Windows' eventKey='win'>
                        <a href={downloadUrls.windows}  className='btn btn-primary btn-lg'>Download</a>
                        <video loop autoPlay muted>
                            <source src={windowsInstall} type='video/mp4' />
                        </video>
                    </Tab>
                </Tabs>
            </header>
        </div>
    )
}

export default DownloadPage;