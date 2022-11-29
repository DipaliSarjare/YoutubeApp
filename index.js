let Api_Key="AIzaSyDeD2Vu8h3zaLc0aY-lpbKOpHLcLfuTjfg";
//"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key"
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=AIzaSyDeD2Vu8h3zaLc0aY-lpbKOpHLcLfuTjfg

let search= async()=>{
    let query=document.getElementById("query").value;
    let data=await getData(query)
   append(data);
};
let getData=async (query)=>{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q==${query}&key=${Api_Key}`;
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    return data.items;
};
let append=(data)=>{
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach((el)=>{
        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;
        let h3=document.createElement("h3");
        h3.innerText=el.snippet.title;
        let div=document.createElement("div");
        div.onclick=()=>{
            saveVideo(el);
        }
        div.setAttribute("class","video")
        div.append(img,h3)
        container.append(div)
    });
};
let saveVideo=(data)=>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href="video.html";
    };


  const url1=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${Api_Key}`
  fetch(url1).then(function(res){
    return res.json();
}).then(function(res){
    console.log(res)
    appendOnHome(res.items);
});

function appendOnHome(data){
    let box=document.getElementById("video-container");
     box.innerHTML=null;
    data.forEach((el)=>{
        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;
        h4=document.createElement("h4");
        h4.innerText=el.snippet.title;
        let div=document.createElement("div");
        div.style.cursor='pointer';
        div.onclick=()=>{
            playVideo(el)
        };
        div.append(img,h4);
        box.append(div);
    });
};

let playVideo=(data)=>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href="video.html";
    };

    
/* et filter = async () => {
    let data = await getData(q);
    console.log(data);
    data = data.filter((el) => {
    return (el.snippet.channelId === "UCvC4D8onUfXzvjTOM-dBfEA");
    });
    append(data);
  }; */