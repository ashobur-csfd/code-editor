type iCodeType = string | undefined;

export const Preview2 = ({
	html,
	css,
	js,
	reactCode,
	selectedFramework,
}: {
	html: iCodeType;
	css: iCodeType;
	js: iCodeType;
	reactCode: iCodeType;
	selectedFramework: string;
}) => {
	// CDN links based on selected framework
	const frameworkCDNs: Record<string, string> = {
		tailwind: `<script src="https://cdn.tailwindcss.com"></script>`,
		bootstrap: `
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
		`,
		html: '', // plain HTML has no extra CDN
	};

	const cdn = frameworkCDNs[selectedFramework] || '';

	const srcDoc =
		html || css || js
			? `
  <html>
    <head>
      ${cdn}
      <style>${css || ''}</style>
    </head>
    <body>
      ${html || ''}
      <script>${js || ''}</script>
    </body>
  </html>
  `
			: '';

	return (
		<div>
			{/* HTML/CSS/JS Preview */}
			{srcDoc && (
				<iframe
					sandbox="allow-scripts allow-same-origin allow-modals"
					srcDoc={srcDoc}
					className="w-full h-64 border"
				/>
			)}
		</div>
	);
};
