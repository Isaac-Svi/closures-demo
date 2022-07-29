const store = {
    num: 12343,
};

export const attachToStore = (component) => (props) => {
    return component(props, store);
};
