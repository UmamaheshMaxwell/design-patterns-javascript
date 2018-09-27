/***************************  Revealing Module Pattern **************************

In This pattern we reveal public pointers to methods inside the Module’s scope

Usage: Revealing Module Pattern, can create a really nice code management system 
       in which you can clearly see and define which methods are shipped back to 
       the Module
       
****************************  Revealing Module Pattern **************************/

const RevealingModule = (() => {

    const privateMethod = () => {
        console.info('This is private method and can not be accessed from outside')
    }

    const getCustomerData = () => {
        return 'This is to get customer data';
    }

    const getOrderData = () => {
        return 'This is to get order data';
    }

    const getTransactionHistory = () => {
        return 'This is to get transaction history';
    }
    return {
        getCustomerData: getCustomerData,
        getTransactionHistory: getTransactionHistory
    }
})();

const getCustomerData = RevealingModule.getCustomerData();
console.log(getCustomerData);

const getTransactionHistory = RevealingModule.getTransactionHistory();
console.log(getTransactionHistory);