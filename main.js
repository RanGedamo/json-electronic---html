const PROJECTOR_API = "https://rangedamo.github.io/json-electronic---html/projector-apartments.json"
const TV_API = "https://rangedamo.github.io/json-electronic---html/tv-apartments.json"
const COUCH_API = "https://rangedamo.github.io/json-electronic---html/couch-apartments.json"
async function electronic(){
    try{
        const result =  await fetch(COUCH_API).then(res=>res.json())
        .then(res=>res)
        console.log(result)
        
        result.map(item=>{
            console.log(item.imageP)
            projector.innerHTML += `<p>${item.nameCouch}</p><img src=${item.imageCouch} width='200px'> <br> <p>${item.dataCouch}</p>`
        })
        
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()