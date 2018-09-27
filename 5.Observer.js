/***************************  Observer Pattern **************************

In This pattern, The instance (subject) maintains a collection of 
objects (observers) and notifies them all when changes to the 
state occurs

Usage: When building web apps you end up writing many event handlers. 
       Event handlers are functions that will be notified when a certain 
       event fires. These notifications optionally receive an event 
       argument with details about the event (for example the x and y 
       position of the mouse at a click event).
       
***************************  Observer Pattern **************************/

function Click() { //  Subject
    this.observers = []; // observers
}

Click.prototype.subscribe = function(observer) {
    this.observers.push(observer)
}

Click.prototype.unsubscribe = function(observer) {
    this.observers = this
        .observers
        .filter(subscriber => subscriber != observer)
}

Click.prototype.notify = function(data) {
    this.observers
        .forEach(observer => {
            observer(data)
        });
}

function clickHandler(item) {
    console.info('Notified : ', item)
}

const click = new Click();
click.subscribe(clickHandler)
click.notify('Event 1');
click.unsubscribe(clickHandler);
click.notify('Event 2');
click.subscribe(clickHandler);
click.notify('Event 3');