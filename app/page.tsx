'use client';
import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { data } from '@/data/basic';
import { Preview2 } from '@/components/Preview-2';

/*  tab list */
const tabs = ['preview', 'Html', 'CSS', 'JS', 'JSX'];

/*  support language */
const languageMap: Record<string, string> = {
	Html: 'html',
	CSS: 'css',
	JS: 'javascript',
	JSX: 'javascript',
};

export default function Home() {
	/* states */
	const [activeTab, setActiveTab] = useState('preview');
	const [copied, setCopied] = useState(false);
	const [code, setCode] = useState({
		Html: data.html,
		CSS: data.css,
		JS: data.js,
		JSX: data.react,
	});

	/* code change handler */
	const handleCodeChange = (value: string | undefined) => {
		if (activeTab in code && value !== undefined) {
			setCode((prev) => ({
				...prev,
				[activeTab]: value,
			}));
		}
	};

	/* copy code handler */
	const handleCopy = () => {
		const value = code[activeTab as keyof typeof code] || code.Html || '';
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="max-w-4xl mx-auto p-4">
			{/* Tabs */}
			<div className="flex justify-between bg-black border p-2 border-b-0">
				<div className="flex space-x-4">
					{tabs.map((tab) => (
						<button
							key={tab}
							className={`px-3 py-1 capitalize ${
								activeTab === tab ? 'font-bold underline' : ''
							}`}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Copy Button */}
				<button className="text-sm font-semibold" onClick={handleCopy}>
					{copied ? 'Copied!' : 'Copy'}
				</button>
			</div>

			{/* Editor or Preview */}
			<div className="bg-black border p-4 relative">
				{activeTab === 'preview' ? (
					<>
						<div className="flex justify-between mb-2">
							<span className="text-sm font-semibold">Preview</span>
						</div>
						<Preview2
							html={code.Html}
							css={code.CSS}
							js={code.JS}
							reactCode={code.JSX}
						/>
					</>
				) : (
					<Editor
						theme="vs-dark"
						height="200px"
						language={languageMap[activeTab] || 'plaintext'}
						value={code[activeTab as keyof typeof code]}
						onChange={handleCodeChange}
					/>
				)}
			</div>
		</div>
	);
}
