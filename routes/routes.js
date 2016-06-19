var appRouter=function(app){
    app.get("/",function(req,res){
       res.send({"msg":"Hello world!"}); 
    });
}
module.exports=appRouter;