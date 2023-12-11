document.addEventListener('DOMContentLoaded', function () {
    const api = './css/ucollege.json'
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const main = document.querySelector('main');
            
            data.sections.forEach(section => {
                const sectionElement = document.createElement('section');
                sectionElement.innerHTML = `<h1>${section.title}</h1>`;
                
                section.content.forEach(paragraph => {
                    sectionElement.innerHTML += `<p>${paragraph}</p>`;
                });

                main.appendChild(sectionElement);
            });
        });
});
