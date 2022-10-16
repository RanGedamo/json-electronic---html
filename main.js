
async function electronic(){
    try{
        return await fetch("https://rangedamo.github.io/json-electronic---html/electronic.json").then(res=>res.json())
        .then(res=>res)
        
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()