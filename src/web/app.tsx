import { type Component, onMount, Suspense, createResource } from 'solid-js';
import { isServer } from 'solid-js/web';
import { type Hello, createClient } from "../client"
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

export const App: Component = () => {
    const hostAddress = isServer ? "http://localhost:3030" : `${window?.location.hostname}:${window?.location.port}`
    const socket = io(hostAddress);
    const connection = socketio(socket);
    const client = createClient(connection);
    const [response, { refetch }] = createResource<Hello | null>(() => client.service('hello').get(null))

    onMount(() => {
        refetch()
    })

    return (
        <div class="text-center">
            <header class="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-2xl">
                <img src="/public/images/logo.svg" class="h-96" alt="logo" />
                <p class="text-green-500 font-bold animate-bounce animate-infinite">
                    <Suspense fallback={<p>Loading...</p>}>
                        <p>{response()?.text}</p>
                    </Suspense>
                </p>
                <p class='text-white'>Learn <a
                    class="text-blue-500 font-semibold underline"
                    href="https://solidjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >SolidJS
                </a>, <a
                    class="text-rose-400 font-semibold underline"
                    href="https://feathersjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >FeathersJS
                    </a>
                </p>

            </header>
        </div>
    );
};
