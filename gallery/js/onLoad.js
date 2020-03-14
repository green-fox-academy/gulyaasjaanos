let imgbar = document.getElementsByClassName("imgbar")[0];
        let imgList = [];
        const seed = Math.floor(Math.random() * 1000) + 1;
        for (let i = 0; i <= 24; i++) {
            let img_wrapper = document.createElement("div");
            img_wrapper.classList.add("img_wrapper");
            img_wrapper.setAttribute("data-pic", `pic#${seed+i}`);
            let img = document.createElement("img");
            img.src = `https://picsum.photos/id/${seed+i}/712/400`
            img.alt = `pic#${seed+i}`
            img.setAttribute("data-pic", `pic#${seed+i}`+"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
            img.setAttribute("data-num", i);
            img_wrapper.appendChild(img);
            imgList.push(img_wrapper);
        }
imgbar.append(...imgList);


