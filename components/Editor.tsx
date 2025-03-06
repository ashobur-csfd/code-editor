'use client';
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Preview } from './Preview';
import { data } from '@/data/basic';

const CodeEditor = () => {
	// state variables [html code, css code, js code, react code, vue code, angular code]
	const [html, setHtml] = useState<string | undefined>(data.html);
	const [css, setCss] = useState<string | undefined>(data.css);
	const [js, setJs] = useState<string | undefined>(data.js);
	const [reactCode, setReactCode] = useState<string | undefined>(data.react);
	const [vueCode, setVueCode] = useState<string | undefined>(data.vue);
	const [angularCode, setAngularCode] = useState<string | undefined>(
		data.angular
	);

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{/* Add html editor  */}
				<div>
					<h1 className="text-xl p-2">HTML</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="html"
						value={html}
						onChange={setHtml}
					/>
				</div>

				{/* Add css editor  */}
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

				{/* Add js editor  */}
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

				{/* Add React editor */}
				<div>
					<h1 className="text-xl p-2">React (JSX)</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="javascript"
						value={reactCode}
						onChange={setReactCode}
					/>
				</div>

				{/* Add Vue editor */}
				<div>
					<h1 className="text-xl p-2">Vue</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="html"
						value={vueCode}
						onChange={setVueCode}
					/>
				</div>

				{/* Add Angular editor */}
				<div>
					<h1 className="text-xl p-2">Angular</h1>
					<Editor
						theme="vs-dark"
						height="200px"
						language="typescript"
						value={angularCode}
						onChange={setAngularCode}
					/>
				</div>
			</div>

			{/* Show Preview for the code */}
			<Preview
				css={css}
				html={html}
				js={js}
				reactCode={reactCode}
				vueCode={vueCode}
				angularCode={angularCode}
			/>
		</>
	);
};

export default CodeEditor;
