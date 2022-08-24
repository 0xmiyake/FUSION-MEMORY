

    // 画像をjsでhtmlに入れ込む


    let y = document.querySelector(".photo-images");
    let images = ["photo-img01.jpg", "photo-img02.jpg" ,"photo-img03.jpg", "photo-img04.jpg", "photo-img05.jpg"];
    // let title = ["photo-img01.jpg", "photo-img02.jpg" ,"photo-img03.jpg", "photo-img04.jpg", "photo-img05.jpg"];

    for (let i = 0;i < images.length; i++){
        y.innerHTML += 
            '<div class=photo-image><img src="./images/'
            + images[i] + 
            '" alt=""></div>';

        
        console.log(images[i])

    }