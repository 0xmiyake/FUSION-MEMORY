


const createNav = () => {
    let nav = document.querySelector('.navber');
        // クラス名を探して取得する

    nav.innerHTML = `




    <div class="nav-container">
        <div class="nav-image">
            <img src="./images/nav-image.jpg" alt="">
        </div>
            <ul>
                 <li><a href="./index.html">home</a></li>
                 <li><a href="./about.html">about</a></li>
                 <li><a href="./news.html">news</a></li>
                 <li><a href="./shop.html">shop</a></li>
                 <li><a href="./access.html">access</a></li>
                 <li><a href="./contact.html">contact</a></li>   
            </ul>
    </div>




    `
}

createNav();
