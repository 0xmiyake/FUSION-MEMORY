    let y = document.querySelector(".news-top-images");
    let images = ["news-image01.jpg", "news-image02.jpg" ,"news-image03.jpg", "news-image04.jpg", "news-image05.jpg", "news-image06.jpg"];
    // let title = ["photo-img01.jpg", "photo-img02.jpg" ,"photo-img03.jpg", "photo-img04.jpg", "photo-img05.jpg"];

    for (let i = 0;i < images.length; i++){
        y.innerHTML += 
            '<div class=news-top-image><img src="./images/'
            + images[i] + 
            '" alt=""></div>';
        
        console.log(images[i])

    }