'use client';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Preview } from './Preview';

const CodeEditor = () => {
	const [html, setHtml] = useState<
		string | undefined
	>(`<h1 id="myHeader">My First CSS Example</h1>
<p>This is a paragraph.</p>`);
	const [css, setCss] = useState<string | undefined>(`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`);
	const [js, setJs] = useState<
		string | undefined
	>(`const myHeader= document.getElementById('myHeader')
myHeader.style.background="red"`);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div>
					<h1 className="text-xl p-2">Html</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="html"
						value={html}
						onChange={setHtml}
					/>
				</div>
				<div>
					<h1 className="text-xl p-2">CSS</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="scss"
						value={css}
						onChange={setCss}
					/>
				</div>
				<div>
					<h1 className="text-xl p-2">JS</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="javascript"
						value={js}
						onChange={setJs}
					/>
				</div>
			</div>
			<Preview css={css} html={html} js={js} />
		</>
	);
};

export default CodeEditor;
