import Screen from './Screen.mjs';

const App = () => {
    return `
        <div>
            ${Screen({ input: 'Hello' })}
            ${Screen({ input: 'World' })}
        </div>
    `;
};

export default App;
