
async function electronic(){
    try{
        return await fetch("https://rangedamo.github.io/react-bulid-json/db.json").then(res=>res.json())
        .then(res=>console.log(res))
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()