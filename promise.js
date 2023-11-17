//promsises
const {readFile,writeFile}=require('fs');
const util=require('util')
//const {readFile,writeFile}=require('fs').promises (alternative)
//await readFile,await writeFile directly

const writetoFile=util.promisify(writeFile)//same as promise(auto promise)

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getText('./firstfile.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))

///async await function
//same as async function start(){ code...}
const start =async()=>{
    try {
        const first= await getText('./firstfile.txt')//replacement of line 18
        await writetoFile('./firstfile.txt','Add this new line')//needs both params
    } catch (error) {
        console.log(error)
    }
}

start() //calling start
