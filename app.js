const form = document.querySelector("#searchForm")
const imgcontainer = document.createElement("DIV")


form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    try{
    while(imgcontainer.firstChild){
        imgcontainer.removeChild(imgcontainer.firstChild)
    }
    const input = form.elements.query.value;
    const config = {params: {q:input}}
    const res = await axios.get("https://api.tvmaze.com/search/shows",config)
    makeImages(res.data)
    }
    catch(e){
        console.log("ERORR!!!",e)
    }
})

const makeImages = (result) =>{
    for(let tvshow of result){
        if(tvshow.show.image){
        const img = document.createElement('IMG')
        img.src = tvshow.show.image.medium;
        imgcontainer.append(img)
        }
    }
    document.body.append(imgcontainer)
}