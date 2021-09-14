import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

/**
 * Document to use for full styling functionality.
 */
export default class DivinationDocument extends Document {

    /**
     * Wrap all Documents, and their "getInitialProps" with stylesheet rendering.
     * This allows every page to be pre-rendered with CSS styling, that is consistent with frontend rendering.
     *
     * @param {object} ctx - document context
     * @returns {object} props with styles
     */
    public static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        // Support of server-side styling
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {

            ctx.renderPage = () => originalRenderPage({
                // eslint-disable-next-line react/require-optimization, @typescript-eslint/naming-convention
                enhanceApp: App => props => sheet.collectStyles(<App {...props}/>),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    /**
     * Base document with meta tags and favicon.
     *
     * @returns {JSX} document
     */
    public render(): ReactElement {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='utf-8'/>
                    <link
                        href='https://static.showcasejobs.com/web/app-icon.png'
                        rel='shortcut icon'
                    />
                    <meta content='#000000' name='theme-color'/>
                    <meta content='autoRotate:disabled' httpEquiv='ScreenOrientation'/>
                    <meta
                        content='Showcase: Your Video, Searchable & Organized'
                        property='og:title'
                    />
                    <meta
                        content='https://static.getshowcase.io/preview/images/preview-image.png'
                        property='og:image'
                    />
                    <meta
                        // eslint-disable-next-line max-len
                        content='Showcase is where all of your company’s video lives. We make it skimmable and searchable, and its insights actionable. Engage your employees and customers with the video content you’ve already invested in.'
                        property='og:description'
                    />
                    <link
                        href='https://static.showcasejobs.com/web/app-icon.png'
                        rel='apple-touch-icon'
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
