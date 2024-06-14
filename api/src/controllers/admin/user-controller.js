exports.create = (req, res) => {
    console.log(req.body)

    res.send('POST request to the homepage')
}

exports.findAll = (req, res) => {
    console.log("Parámetros")
    console.log(req.params)

    console.log("Query")
    console.log(req.query) 

    res.send('GET request to the homepage')
}

exports.findOne = (req, res) => {
    console.log("Parámetros id , soy yo")
    console.log(req.params.id)

    console.log("Query")
    console.log(req.query)


    res.send('GET request to the homepage')
}

exports.update = (req, res) => {
    console.log(req.params.id)
    console.log(req.body)


    res.send('PUT request to the homepage')
}

exports.delete = (req, res) => {
    console.log(req.params.id)
    res.send('DELETE request to the homepage')
}