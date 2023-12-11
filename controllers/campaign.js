
exports.getAllProducts = (req, res, next) => {
    res.send('fetch all products');
}

exports.getProduct = (req, res, next) => {
    const id = req.params.productId
    console.log(req.params)
    res.send(`fetch one products ${id}`);
}

exports.createProduct = (req, res, next) => {
    res.send('created Product successfully')
}

exports.updateProduct = (req, res, next) => {
    res.send('updated Product successfully')
}

exports.deleteProduct = (req, res, next) => {
    res.send('delete Product successfully')
}
