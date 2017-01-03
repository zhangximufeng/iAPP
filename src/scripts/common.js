var html = require('./tpls/index.string');

var x = {
    a:"aaa",
    sayA:function(){
        return this.a;
        
    },
    fetch:function(){
        fetch('/api/list.php').then(function(res){
            return res.json()
        }).then(function(res){
                console.log(res);
        })
    
    },
    render:function(){
        console.log(html);
        var body  = document.body;
        body.innerHTML = html+body.innerHTML;
    }
}
module.exports = x;