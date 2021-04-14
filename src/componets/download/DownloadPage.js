import './DownloadPage.css';
import {Tabs, Tab} from 'react-bootstrap';
import {useState} from "react";
import logo from '../../logo.svg';
import downloadJava from '../../videos/java-run.mov';
import macInstall from '../../videos/mac-install.mov';

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
                        <a href="https://github-registry-files.githubusercontent.com/353537725/729dda80-993b-11eb-800c-0f86a65e617b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20210413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210413T193827Z&X-Amz-Expires=300&X-Amz-Signature=b11fc026f2e57b4e9ce7b17164d29e3f7247ca8e614837f60ae9cbb7c8892a50&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=353537725&response-content-disposition=filename%3Dsqreen-reader-ui-1.0-20210409.175404-1.jar&response-content-type=application%2Foctet-stream" className='btn btn-primary btn-lg'>Download</a>
                        <video loop autoPlay muted>
                            <source src={downloadJava} type='video/mp4' />
                        </video>
                    </Tab>
                    <Tab title='macOS' eventKey='mac'>
                        <a href="https://github-registry-files.githubusercontent.com/353537725/729dda80-993b-11eb-800c-0f86a65e617b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20210413%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210413T193827Z&X-Amz-Expires=300&X-Amz-Signature=b11fc026f2e57b4e9ce7b17164d29e3f7247ca8e614837f60ae9cbb7c8892a50&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=353537725&response-content-disposition=filename%3Dsqreen-reader-ui-1.0-20210409.175404-1.jar&response-content-type=application%2Foctet-stream" className='btn btn-primary btn-lg'>Download</a>
                        <p>
                            dmg is not signed. Will need to right-click on the application and hit open.
                            Signed dmg coming soon.
                        </p>
                        <video loop autoPlay muted>
                            <source src={macInstall} type='video/mp4' />
                        </video>
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