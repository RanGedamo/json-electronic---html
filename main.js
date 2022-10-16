const PROJECTOR_API = "https://rangedamo.github.io/json-electronic---html/projector-apartments.json"
const TV_API = "https://rangedamo.github.io/json-electronic---html/tv-apartments.json"
async function electronic(){
    try{
        const result =  await fetch(PROJECTOR_API).then(res=>res.json())
        .then(res=>res)
        console.log(result)
        
        result.map(item=>{
            console.log(item.imageP)
            projector.innerHTML += `<p>${item.nameProjector}</p><img src=${item.imageProjector} width='200px'> <br> <p>${item.dataProjector}</p>`
        })
        
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()