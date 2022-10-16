
async function electronic(){
    try{
        const result =  await fetch("https://rangedamo.github.io/json-electronic---html/tv-apartments.json").then(res=>res.json())
        .then(res=>res)
        console.log(result)
        
        result.map(item=>{
            const imageTvs = document.createElement('div')
            console.log(item.imageTv)
            imageTvs.innerHTML = `<img src=${item.imageTv} width='200px'>`
        })
        
    }
    catch(err){console.log(err)}
    finally{}
}
electronic()