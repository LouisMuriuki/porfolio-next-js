const SparkPost=require("sparkpost")

async function emailHandler(req,res){
    const client =new SparkPost(process.env.SPARKPOST)
    const DATA=JSON.parser(req.body)
    

}