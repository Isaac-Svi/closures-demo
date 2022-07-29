import { attachToStore } from './storage.mjs';

const Screen = (props, store) => {
    return `
        <div class="screen">
            ${props.input}
            ${store.num}
        </div>
    `;
};

export default attachToStore(Screen);
