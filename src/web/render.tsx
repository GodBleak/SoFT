import { renderToStream } from 'solid-js/web';
import { App } from './app';
import { Document } from './document';


export const render = () => {
    return renderToStream(() => (
        <Document>
            <App />
        </Document>
    ));
}