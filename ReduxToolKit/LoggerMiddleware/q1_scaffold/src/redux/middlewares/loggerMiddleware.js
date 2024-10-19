// create and export middleware function here

export const loggerMiddleware = function (store) {

    return function (next) {
        return function (action) {
            console.log("[LOG]: " + action.type + " " + new Date().toString());
            // call next middleware in pipeline.
            next(action);
            // log the modified state of app.
            console.log(store.getState());
        }
    }
}