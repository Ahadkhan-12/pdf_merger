const fs = require('fs');

try {
    const data =fs.readdir("data",(err,data)=>{
    console.log(data);
    for(let i=0;i<data.length;i++){
        let item=data[i];
        let newpath="data/"+item.replaceAll("ahad","ares");
        fs.rename("data/"+item,newpath,()=>{
            console.log("Rename Successful");
        });
    }
  });
 
} catch (err) {
  console.error(err);
}