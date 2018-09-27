/* **************************  Module Pattern **************************

This pattern was originally defined as a way to provide both private 
and public encapsulation for classes

Usage: Module pattern is used to further emulate the concept of classes 
       in such a way that we're able to include both public/private 
       methods and variables inside a single object, thus shielding 
       particular parts from the global scope
       
****************************  Module Pattern **************************/

const Module = (() => {

    const privateMethod = () => {
        console.info('This is private method and can not be accessed from outside')
    }

    return {
        publicMethod: () => {
            console.log('This is public method and can be accessible from outside')
        }
    }
})();

// Below code throws error saying Module.privateMethod is not a function
// const module1 = Module.privateMethod();

const module = Module.publicMethod();
console.log(module)