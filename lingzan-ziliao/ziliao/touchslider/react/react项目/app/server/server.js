var  http  =  require("http");  
var  urllib  =  require("url");    
var  port  =  8888;  

http.createServer(function(req,  res) {    
    var  params  =  urllib.parse(req.url,  true);    
    console.log(params.query);  
    if  (params.query  &&  params.query.callback)  {  
        var  str  =   params.query.callback  +  "("  +  JSON.stringify(params.query)  +  ")"; //jsonp  
        res.end(str);  
    } 
    else  {  
             res.end(JSON.stringify(params.query)); //普通的json  
           }       

}).listen(port,  function() {  
    console.log("服务启动，监听端口为："  +  port);    
}) 
