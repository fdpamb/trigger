// jsdom add motion events to test CSSMotion
window.AnimationEvent = window.AnimationEvent || (() => {});
window.TransitionEvent = window.TransitionEvent || (() => {});
global.structuredClone = jest.fn(val => {
    return JSON.parse(JSON.stringify(val));
});
