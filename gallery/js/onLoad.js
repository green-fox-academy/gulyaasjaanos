let imgbar = document.getElementsByClassName("imgbar")[0];
        let imgList = [];
        const seed = Math.floor(Math.random() * 1000) + 1;
        for (let i = 0; i <= 12; i++) {
            imgList.push(document.createElement("img"));
            imgList[imgList.length-1].src = `https://picsum.photos/id/${seed+i}/1600/900`
            imgList[imgList.length-1].alt = `pic#${seed+i}`
            imgList[imgList.length-1].setAttribute("data-pic", `pic#${seed+i}`+"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
            imgList[imgList.length-1].setAttribute("data-num", i);
        }
imgbar.append(...imgList);


