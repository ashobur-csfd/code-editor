type stUN = string|undefined
export const Preview = ({ html, css, js }:{html:stUN,css:stUN,js:stUN}) => {
    const srcDoc = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
  
    return <iframe srcDoc={srcDoc} className="w-full h-64 border" />;
  };
  