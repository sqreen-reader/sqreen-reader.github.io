import './DownloadPage.css';
import {Tabs, Tab} from 'react-bootstrap';
import {useState} from "react";
import logo from '../../logo.svg';
import downloadLinux from '../../videos/linux-install.mp4';
import macInstall from '../../videos/mac-install.mov';
import downloadUrls from './download-urls.json';
import windowsInstall from '../../videos/windows-install.mp4';

function DownloadPage() {
    const [key, setkey] = useState('mac');
    return (
        <div className='DownloadPage'>
            <header>
                <img src={logo} className="Download-logo" alt="logo" />
                <h1 className='Download-header'>Download sQReen Reader</h1>
                <Tabs id='downloads' activeKey={key} onSelect={(key) => setkey(key)} className='Download-Tabs'>

                    <Tab title='macOS' eventKey='mac'>
                        <a href={downloadUrls.mac}  className='btn btn-primary btn-lg'>Download</a>
                        <video loop muted controls>
                            <source src={macInstall} type='video/mp4' />
                        </video>
                    </Tab>
                    <Tab title='Windows' eventKey='win'>
                        <a href={downloadUrls.windows}  className='btn btn-primary btn-lg'>Download</a>
                        <video loop muted controls>
                            <source src={windowsInstall} type='video/mp4' />
                        </video>
                        <p>Note: exe is not signed.</p>
                    </Tab>
                    <Tab title='Linux' eventKey='java'>
                        <a href={downloadUrls.linux} className='btn btn-primary btn-lg'>Download</a>
                        <video loop muted controls>
                            <source src={downloadLinux} type='video/mp4' />
                        </video>
                    </Tab>
                </Tabs>
            </header>
        </div>
    )
}

export default DownloadPage;
