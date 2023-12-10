function createRestaurantContent() {
    var mainElement = document.getElementById('main-content');

    var sectionElement = createAndAppendElement(mainElement, 'section', 'restaurante');
    createAndAppendElement(sectionElement, 'h1', null, 'Restaurant I like.');

    var articleElement = createAndAppendElement(sectionElement, 'article');
    createAndAppendElement(articleElement, 'p', null, 'I lived in Chicago for three years. I thought I knew a lot about Chicago food. Below I will recommend three ' +
        'of my favorite restaurants and their food. I hope everyone can try it. If you have the opportunity, you can go ' +
        'to my Facebook to report your feelings. If possible, I hope you can recommend some other restaurants to me.');
    createAndAppendElement(articleElement, 'a', null, 'Facebook link: www.facebook.com/tiangang.luo.16', { href: 'https://www.facebook.com/tiangang.luo.16/' });

    var tableElement = createAndAppendElement(sectionElement, 'table');
    createTableHead(tableElement, ['Restaurant Name', 'Best Food', 'Picture', 'Website']);
    createTableRow(tableElement, ['Kyoku', 'Uni', './images/uni.jpg', 'https://www.kyokusushi.com/']);
    createTableRow(tableElement, ['Wagyu House by The X Pot Chicago', 'Bone Marrow', './images/bone.jpg', 'https://thexpot.com/']);
    createTableRow(tableElement, ['Lao Sze Chuan', 'Peiking Duck', './images/duck.jpg', 'https://laoszechuanusa.square.site/']);
}

function createAndAppendElement(parent, tagName, id, text, attributes) {
    var element = document.createElement(tagName);
    if (id) element.id = id;
    if (text) element.textContent = text;
    if (attributes) {
        for (var key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    parent.appendChild(element);
    return element;
}

function createTableHead(table, headers) {
    var theadElement = createAndAppendElement(table, 'thead');
    var trElement = createAndAppendElement(theadElement, 'tr');
    headers.forEach(header => createAndAppendElement(trElement, 'th', null, header));
}

function createTableRow(table, rowData) {
    var tbodyElement = table.querySelector('tbody') || createAndAppendElement(table, 'tbody');
    var trElement = createAndAppendElement(tbodyElement, 'tr');
    rowData.forEach((data, index) => {
        var tdElement = createAndAppendElement(trElement, 'td');
        if (index === 2) {
            var imgElement = createAndAppendElement(document.createElement('img'), 'img', null, null, { src: data, alt: data });
            tdElement.appendChild(imgElement);
        } else if (index === 3) {
            var aElement = createAndAppendElement(tdElement, 'a', null, data, { href: data, target: '_blank' });
        } else {
            tdElement.textContent = data;
        }
    });
}

window.onload = createRestaurantContent;