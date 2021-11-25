let controller = {
    product: function(req,res){
        res.render('productDetail')
    },
    productCart: function(req,res){
        res.render('productCart')
    }
}

module.exports = controller