import { hydrate } from 'solid-js/web';
import { App } from './app';
import { Document } from './document';

hydrate(
    () => {
        return (
            <Document>
                <App />
            </Document>
        )
    },
    document,
);