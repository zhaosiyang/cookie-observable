

const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(document)), 'cookie').set;

Object.defineProperty(Object.getPrototypeOf(Object.getPrototypeOf(document)), 'cookie', {
    set: value => {
        console.log('setting cookie with value: ', value);
        setter.call(document, value)
    }
})