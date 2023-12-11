const header = document.getElementById('header-main');
header.innerHTML = getHeader();

function getHeader() {
    return `
        <div class="header-content">
            <h1>Tiangang Luo's Web</h1>
            <nav id="nav-menu">${getMenu()}</nav>
            <a href="https://www.facebook.com/tiangang.luo.16/" target="_blank" class="facebook-icon">
                <img src="./images/facebook.png" alt="Facebook" width="20" height="20">
            </a>
        </div>
    `;
}

const footer = document.getElementById('footer-main');
footer.innerHTML = getFooter();

function getFooter() {
    return `
        <footer>
            <p>&copy;2023 Tiangang Luo</p>
        </footer>
    `;
}

const menu = document.getElementById('nav-menu');
menu.innerHTML = getMenu();

function getMenu() {
    return `
        <ul>
            <li><a href="https://finalprojecttiangang.netlify.app/">Home</a></li>
            <li><a href="https://finalprojecttiangang.netlify.app/about">About Me</a></li>
            <li><a href="https://finalprojecttiangang.netlify.app/college">China College</a></li>
            <li><a href="https://finalprojecttiangang.netlify.app/ucollege">American College</a></li>
            <li><a href="https://finalprojecttiangang.netlify.app/rest">Eat</a></li>
            <li><a href="https://finalprojecttiangang.netlify.app/place">Place</a></li>
            <li><a href="https://finalprojecttiangang.netlify.app/contact">Contact me</a></li>
        </ul>
    `;
}
