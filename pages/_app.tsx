import NextApp, { AppProps } from 'next/app';
import { ReactElement } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import '../style-guide/base.css';

import { NextPageWithLayout } from '../lib/types';

interface AppPropsWithLayout extends AppProps {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Component: NextPageWithLayout;
}

/**
 *
 */
export default class App extends NextApp<AppPropsWithLayout> {

    /**
     * Override default render with layout.
     *
     * @returns {ReactElement} jsx
     */
    public render(): ReactElement {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { Component, pageProps } = this.props;

        const getLayout = Component.getLayout ?? (page => page);

        return getLayout(<Component {...pageProps}/>);
    }
}
