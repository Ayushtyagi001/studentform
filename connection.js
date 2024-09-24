const mongoose=require('mongoose');
async function connection(){
    try{
        let connect=await mongoose.connect(`mongodb://localhost:27017/batch1-new`);     //This is used to connect node js with mongodb by passing the url or protocol
        //line 6 jb tk ni chlega jb tk 4 execute na ho due to async await
        console.log("Connection Created...");
    }catch(err){
        console.log(err);
    }
}
module.exports=connection;  