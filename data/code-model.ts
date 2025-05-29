export const data = [
	{
		html: {
			HTML: `
        <div class="container">
          <h1>Hello World</h1>
          <button id="btn">Click Me</button>
        </div>
      `,
			CSS: `
        body {
          font-family: sans-serif;
          background: #f0f0f0;
          text-align: center;
        }
        #btn {
          padding: 10px 20px;
          background: teal;
          color: white;
          border: none;
          cursor: pointer;
        }
      `,
			JS: `
        document.getElementById("btn").onclick = () => {
          alert("Hello from plain JS!");
        };
      `,
			JSX: `const App = () => {
            const [count, setCount] = React.useState(0); // Using useState hook

            const handleClick = () => {
                setCount(count + 1);
            };

            return (
                <div style={{textAlign: "center"}}>
                    <h1>Count: {count}</h1>
                    <button  onClick={handleClick}>Increment</button>
                </div>
            );
        };`,
		},
		tailwind: {
			HTML: `
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-blue-600 mb-4">Hello Tailwind</h1>
            <button id="tailwindBtn" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Click Me
            </button>
          </div>
        </div>
      `,
			CSS: `
        body {
          background: #f0f0f0;
        }
      `,
			JS: `
        document.getElementById("tailwindBtn").addEventListener("click", () => {
          alert("Tailwind Button Clicked!");
        });
      `,
			JSX: '',
		},
		bootstrap: {
			HTML: `
        <div class="container text-center mt-5">
          <h1 class="text-primary">Hello Bootstrap</h1>
          <button id="bsBtn" class="btn btn-success mt-3">Click Me</button>
        </div>
      `,
			CSS: `
        body {
          background: #f0f0f0;
        }
      `,
			JS: `
        document.getElementById("bsBtn").addEventListener("click", () => {
          alert("Bootstrap Button Clicked!");
        });
      `,
			JSX: '',
		},
	},
	{
		html: {
			HTML: `
        <div>
          <h2>Another Example</h2>
          <p>This is a second plain HTML preview.</p>
        </div>
      `,
			CSS: `
       body {
          background: #f0f0f0;
        }
        h2 {
          color: purple; 
        }
      `,
			JS: '',
			JSX: '',
		},
		tailwind: {
			HTML: `
        <section class="p-10 bg-gradient-to-r from-green-300 to-blue-500 text-white">
          <h2 class="text-2xl font-semibold">Tailwind Example 2</h2>
          <p class="mt-2">Stylish layout with gradients and spacing</p>
        </section>
      `,
			CSS: `
       body {
          background: #f0f0f0;
        }
       
      `,
			JS: '',
			JSX: '',
		},
		bootstrap: {
			HTML: `
        <div class="container mt-4">
          <div class="alert alert-warning" role="alert">
            A simple Bootstrap alert!
          </div>
        </div>
      `,
			CSS: `
       body {
          background: #f0f0f0;
        }
         
      `,
			JS: '',
			JSX: '',
		},
	},
];
