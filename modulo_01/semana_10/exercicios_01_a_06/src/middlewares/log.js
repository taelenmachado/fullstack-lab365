function log (request, response, next) {
    console.log(request)
    console.log('Método', request.method)
    console.log('Path', request.path)
    console.log('Body', request.body)
    console.log('Params', request.params)
    next()
}

module.exports = log