type iCodeType = string | undefined;

export const Preview2 = ({
	html,
	css,
	js,
	reactCode,
}: {
	html: iCodeType;
	css: iCodeType;
	js: iCodeType;
	reactCode: iCodeType;
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

	return (
		<div>
			{/* HTML/CSS/JS Preview */}
			{srcDoc && <iframe srcDoc={srcDoc} className="w-full h-64 border" />}
		</div>
	);
};
