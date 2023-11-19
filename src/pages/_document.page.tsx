import * as React from "react";
import { montserrat } from "@/styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-BR" className={montserrat.className}>
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	};
};

MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	const styledComponentSheet = new StyledComponentSheets()
	const materialUiSheets = new MaterialUiServerStyleSheets()
	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: any) => (props) => styledComponentSheet.collectStyles(
					materialUiSheets.collect(<App emotionCache={cache} {...props} />),
				),
			});

		const initialProps = await Document.getInitialProps(ctx);
		// This is important. It prevents emotion to render invalid HTML.
		// See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
		const emotionStyles = extractCriticalToChunks(initialProps.html);
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(" ")}`}
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		));

		return {
			...initialProps,
			// Styles fragment is rendered after the app and page rendering finish.
			// styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
			styles: [
				<React.Fragment key="styles">
					{initialProps.styles}
					{materialUiSheets.getStyleElement()}
					{styledComponentSheet.getStyleElement()}
					{emotionStyleTags}
				</React.Fragment>,
			],
		};
	} finally {
		styledComponentSheet.seal()
	};
};