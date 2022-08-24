


const createNav = () => {
    let nav = document.querySelector('.navber');
        // クラス名を探して取得する

    nav.innerHTML = `




    <div class="nav-container">
        <div class="nav-image">
            <img src="./images/nav-image.jpg" alt="">
        </div>
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">news</a></li>
                <li><a href="">shop</a></li>
                <li><a href="">access</a></li>
                <li><a href="">contact</a></li>   
            </ul>
    </div>




    `
}

createNav();