
async function electronic(){
    try{
        const result =  await fetch("https://rangedamo.github.io/json-electronic---html/tv-apartments.json").then(res=>res.json())
        .then(res=>res)
        console.log(result)
        result.map(item=>{
            console.log(item.nametv)
        })
        
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()