import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

const toastStyle = { width: 250 };
const Layout = ({ children }: { children: ReactNode }): ReactElement => (
    <div>
        <Head>
            <meta content='width=device-width, initial-scale=1' name='viewport'/>
        </Head>
        {children}
        <ToastContainer
            closeOnClick
            enableMultiContainer
            pauseOnHover
            autoClose={5000}
            position='bottom-right'
            // eslint-disable-next-line react/forbid-component-props
            style={toastStyle}
        />
    </div>
);

export default Layout;
