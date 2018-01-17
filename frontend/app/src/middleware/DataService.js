import request from 'superagent';

// curried function for generating a get request function which takes a url route, successAction and errorAction.
const getApiGenerator = next => (route, successAction, errorAction) =>
    request
        .get(route)
        .end((err, res) => {
            if (err) {
                console.log(route + " error" + err);
                next(errorAction(err));
            }
            const data = JSON.parse(res.text);
            next(successAction(data));
        });


const dataService= store => next => action => {
    next(action);
    const getApi = getApiGenerator(next);
    switch (action.type) {
        default:
            break;
    }
};

export default dataService;