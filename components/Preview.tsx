type iCodeType = string | undefined;

export const Preview = ({
	html,
	css,
	js,
	reactCode,
	vueCode,
	angularCode,
}: {
	html: iCodeType;
	css: iCodeType;
	js: iCodeType;
	reactCode: iCodeType;
	vueCode: iCodeType;
	angularCode: iCodeType;
}) => {
	// Html Code
	const srcDoc =
		html && css && js
			? `
  <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
  </html>
`
			: '';

	// React Code
	const reactSrcDoc = `
		<html>
			<head>
				<style>${css}</style>
				<!-- React and ReactDOM CDN -->
				<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
				<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
			</head>
			<body>
				<div id="root"></div> <!-- Root div for React to mount -->
				<script type="text/babel">
					// React code injected dynamically here
					${reactCode}
					const rootElement = document.getElementById('root');
					if (rootElement) {
						const root = ReactDOM.createRoot(rootElement);
						root.render(<App />);
					}
				</script>
			</body>
		</html>
	`;

	// Vue Code
	const vueSrcDoc = `
		<html>
			<head>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
				<style>${css}</style>
			</head>
			<body>
				 ${vueCode}
			</body>
		</html>
	`;

	// Angular Code
	const angularSrcDoc = `
		<html>
			<head>
				<script src="https://unpkg.com/@angular/core@12.0.0/bundles/core.umd.js"></script>
				<script src="https://unpkg.com/@angular/common@12.0.0/bundles/common.umd.js"></script>
				<style>${css}</style>
			</head>
			<body>
				<app-root></app-root>
				<script>
					${angularCode}
				</script>
			</body>
		</html>
	`;

	return (
		<div>
			{/* HTML/CSS/JS Preview */}
			{srcDoc && <iframe srcDoc={srcDoc} className="w-full h-64 border" />}

			{/* React Preview  */}
			{reactCode && (
				<iframe srcDoc={reactSrcDoc} className="w-full h-64 border mt-4" />
			)}

			{/* Vue Preview */}
			{vueCode && (
				<iframe srcDoc={vueSrcDoc} className="w-full h-64 border mt-4" />
			)}

			{/* Angular Preview */}
			{/* {angularCode && (
				<iframe srcDoc={angularSrcDoc} className="w-full h-64 border mt-4" />
			)} */}
		</div>
	);
};
