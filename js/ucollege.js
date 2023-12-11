document.addEventListener('DOMContentLoaded', function () {
    const api = './css/ucollege.json'
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const main = document.querySelector('main');
            
            // Loop through sections in JSON
            data.sections.forEach(section => {
                const sectionElement = document.createElement('section');
                sectionElement.innerHTML = `<h1>${section.title}</h1>`;
                
                // Loop through content in each section
                section.content.forEach(paragraph => {
                    sectionElement.innerHTML += `<p>${paragraph}</p>`;
                });

                main.appendChild(sectionElement);
            });
        });
});
