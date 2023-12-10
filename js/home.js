document.addEventListener('DOMContentLoaded', function () {
    function createSectionContent(sectionId, title, text, link, imagePath) {
        const section = document.getElementById(sectionId);

        const h1 = document.createElement('h1');
        const img = document.createElement('img');
        const article = document.createElement('article');
        const paragraph = document.createElement('p');
        const readMoreLink = document.createElement('a');

        h1.textContent = title;

        if (imagePath) {
            img.src = imagePath;
            img.alt = 'my photo';
            article.appendChild(img);
        }

        paragraph.textContent = text;
        readMoreLink.textContent = 'Read More';
        readMoreLink.href = link;

        article.appendChild(paragraph);
        article.appendChild(readMoreLink);
        section.appendChild(h1);
        section.appendChild(article);
    }

    createSectionContent('about', 'About Tiangang', 'I am an international student from China. I am currently studying Computer Information Systems at Boston University. Now lives in the Chicago area and works at ACC. In addition, I am also the "father" of two lovely dogs.', 'about.html', './images/tl.jpg');
    createSectionContent('college', 'Life in China', 'I have lived in China for 21 years. In school in China, I experienced a completely different life than in the United States. I love life there and share it with you.', 'college.html');
    createSectionContent('ucollege', 'Life in American', 'I have been in the United States for 7 years and have studied at three universities here. Regarding university study in the United States, I think there are many differences from China.', 'ucollege.html');
    createSectionContent('restaurant', 'Restaurant I like', 'I love foods. I recorded some delicious food and information about restaurants.', 'rest.html');
    createSectionContent('place', 'Place to go', 'In addition to food, I also have many interesting places to share with you. This includes scenic views and recreational facilities. There are locations in China and locations in the United States.', 'place.html');
});