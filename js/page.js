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
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="college.html">China College</a></li>
            <li><a href="ucollege.html">American College</a></li>
            <li><a href="rest.html">Eat</a></li>
            <li><a href="place.html">Place</a></li>
            <li><a href="contact.html">Contact me</a></li>
        </ul>
    `;
}