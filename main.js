
// async function electronic(){
//     try{
//         const result =  await fetch("https://rangedamo.github.io/json-electronic---html/electronic.json").then(res=>res.json())
//         .then(res=>res)
//         console.log(result)
//         result.map(item=>{
//             console.log(item)
//         })
        
//     }
//     catch(err){console.log(err)}
//     finally{}
// }
// electronic()
const elec = [
    {
        "nametv": "BRAVIA XR Mini Led",
        "imageTv": "https://www.ace.co.il/media/catalog/product/cache/cd4070449b2667a42f9e5955c1cb05c9/4/4/4422963_1.jpg",
        "inchTv": "60inch",
        "priceTv": "$500",
        "yearTv": "2020"
    },
    {
        "nametv": "LG OLED",
        "imageTv": "https://www.ace.co.il/media/catalog/product/cache/cd4070449b2667a42f9e5955c1cb05c9/4/4/4422882.jpg",
        "inchTv": "50inch",
        "priceTv": "$455",
        "yearTv": "2021"
    },
    {
        "nametv": "SUMSUNG Neo QLED 8K",
        "imageTv": "https://www.ace.co.il/media/catalog/product/cache/cd4070449b2667a42f9e5955c1cb05c9/4/4/4422905_1.jpg",
        "inchTv": "69inch",
        "priceTv": "$680",
        "yearTv": "2022"
    },
    {
        "nametv": "SONY BRAVIA XR OLED",
        "imageTv": "https://www.ace.co.il/media/catalog/product/cache/cd4070449b2667a42f9e5955c1cb05c9/4/4/4422956.jpg",
        "inchTv": "51inch",
        "priceTv": "$400",
        "yearTv": "2020"
    },
    {
        "nametv": "SONY BRAVIA XR",
        "imageTv": "https://www.ace.co.il/media/catalog/product/cache/cd4070449b2667a42f9e5955c1cb05c9/6/l/6lgxr75z9jaep19.jpg",
        "inchTv": "55inch",
        "priceTv": "$520",
        "yearTv": "2021"
    },
    {
        "nametv": "Neo QLED 8K",
        "imageTv": "https://www.ace.co.il/media/catalog/product/cache/cd4070449b2667a42f9e5955c1cb05c9/4/4/4422903_1.jpg",
        "inchTv": "60inch",
        "priceTv": "$555",
        "yearTv": "2022"
    }
]
elec.map(element => {
    console.log(elec)
});