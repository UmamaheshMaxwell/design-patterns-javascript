/*************************** Singleton Pattern **************************

This pattern ensures a class has only one instance and provide a global 
point of access to it.

Usage: Singletons are useful in situations where system-wide actions 
       need to be coordinated from a single central place. An example 
       is a database connection pool. The pool manages the creation, 
       destruction, and lifetime of all database connections for the 
       entire application ensuring that no connections are 'lost'.

**************************** Singleton Pattern **************************/

const Singleton = (() => {
    let instance = null;

    const createIntance = () => {
        let obj = Object.create(null);
        console.info('Object been created sucessfully !!!')
        return obj;
    }

    return {
        getInstnace: () => {
            if (!instance) {
                instance = createIntance();
            }
            return instance;
        }
    }
})();

var singleton1 = Singleton.getInstnace();
var singleton2 = Singleton.getInstnace();

console.log(`singleton1 Object`, singleton1)
console.log(`singleton2 Object`, singleton2)