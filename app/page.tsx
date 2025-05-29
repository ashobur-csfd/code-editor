'use client';
import { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { Preview2 } from '@/components/Preview-2';
import { data } from '@/data/code-model';

/*  Language List */
const languageMap: Record<string, string> = {
	HTML: 'html',
	CSS: 'css',
	JS: 'javascript',
	JSX: 'javascript',
};

export default function Home() {
	return (
		<div className="max-w-4xl mx-auto p-4 space-y-10">
			{/*  Design Blocks */}
			{data.map((design, index) => (
				<DesignBlock key={index} design={design} designIndex={index} />
			))}
		</div>
	);
}

/*  Design Block */
function DesignBlock({ design }: { design: any; designIndex: number }) {
	/*  states */
	const [selectedFramework, setSelectedFramework] = useState<string>('html');
	const [copied, setCopied] = useState(false);

	/*  code change state */
	const currentCode = design[selectedFramework] || {};

	/*  tabs in current design */
	const availableTabs = [
		'preview',
		...Object.keys(currentCode).filter((key) => currentCode[key].trim() !== ''),
	];

	/*  active tab state */
	const [activeTab, setActiveTab] = useState('preview');

	/*  handlers framework change */
	const handleFrameworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newFramework = e.target.value;
		setSelectedFramework(newFramework);

		const newCode = design[newFramework] || {};
		const newTabs = [
			'preview',
			...Object.keys(newCode).filter((key) => newCode[key].trim() !== ''),
		];
		setActiveTab(newTabs.includes(activeTab) ? activeTab : 'preview');
	};

	/*  code change handler */
	const handleCodeChange = (value: string | undefined) => {
		if (activeTab !== 'preview' && value !== undefined) {
			design[selectedFramework][activeTab] = value;
		}
	};

	/*  copy code handler */
	const handleCopy = () => {
		const value = currentCode?.[activeTab] || '';
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="border min-h-64 ">
			{/* Tabs & Controls */}
			<div className="flex justify-between bg-black text-white p-2 border-b">
				<div className="flex space-x-4">
					{/* Tabs */}
					{availableTabs.map((tab) => (
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
				<div className="flex space-x-2 items-center">
					{/* Framework Selector */}
					<select
						className="border border-white mr-2  p-1 capitalize text-white"
						value={selectedFramework}
						onChange={handleFrameworkChange}
					>
						{Object.keys(design).map((fw) => (
							<option key={fw} value={fw} className=" bg-black text-white">
								{fw}
							</option>
						))}
					</select>

					{/* Copy Button */}
					<button className="text-sm font-semibold" onClick={handleCopy}>
						{copied ? 'Copied!' : 'Copy'}
					</button>
				</div>
			</div>

			{/* Editor or Preview */}
			<div className="bg-black p-4   text-white">
				{activeTab === 'preview' ? (
					<Preview2
						html={currentCode.HTML}
						css={currentCode.CSS}
						js={currentCode.JS}
						reactCode={currentCode.JSX}
						selectedFramework={selectedFramework}
					/>
				) : (
					<Editor
						theme="vs-dark"
						height="200px"
						language={languageMap[activeTab] || 'plaintext'}
						value={currentCode?.[activeTab]}
						onChange={handleCodeChange}
					/>
				)}
			</div>
		</div>
	);
}
