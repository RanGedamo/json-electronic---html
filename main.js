const PROJECTOR_API = "https://rangedamo.github.io/json-electronic---html/projector-electronic.json"
const TV_API = "https://rangedamo.github.io/json-electronic---html/tv-electronic.json"
const COUCH_API = "https://rangedamo.github.io/json-electronic---html/couch-furniture.json"
const FIDGE_API = "https://rangedamo.github.io/json-electronic---html/fridge-electronic.json"
async function electronic(){
    try{
        const result =  await fetch(FIDGE_API).then(res=>res.json())
        .then(res=>res)
        console.log(result)
        
        result.map(item=>{
            console.log(item.imageP)
            projector.innerHTML += `<p>${item.nameFridge}</p><img src=${item.imageCouch} width='200px'> <br> <p>${item.dataCouch}</p>`
        })
        
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()