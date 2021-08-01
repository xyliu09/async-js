function getTodos(callback) {
    var request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        // console.log(request, request.readyState)
        if (request.readyState === 4 && request.status === 200) {
            var responseData = JSON.parse(request.responseText);
            callback(undefined, responseData);
        }
        else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', 'todos.json');
    request.send();
}
getTodos(function (err, data) {
    console.log('callback fired');
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
