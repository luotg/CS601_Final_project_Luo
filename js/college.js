document.addEventListener("DOMContentLoaded", function () {
    createCollegeSection();
    createThoughtsSection();
});

function createCollegeSection() {
    var collegeSection = document.createElement("section");
    collegeSection.id = "sitcollege";

    var h1 = document.createElement("h1");
    h1.textContent = "During My Chinese college - Shanghai Institute of Technology";
    collegeSection.appendChild(h1);

    var article = document.createElement("article");
    var p = document.createElement("p");
    p.textContent = "Shanghai Institute of Technology is the first high-level applied innovation university named after \"Applied Technology\" in Shanghai and the country's first. It is located in Fengxian District, Shanghai. The scenery is very beautiful. The seaside is just 20 minutes' drive away. I am studying Mechanical Engineering here. Compared with American universities, the learning situation in Chinese universities is different. The university I attended was not a self-selected course system. When I entered this university, I was assigned classes. My class is Class 5, with a total of 39 students. During their years in college, students in this class take every course the same every semester. The school will arrange courses for us. Our course times are also consistent. At 8:00 in the morning, the school will arrange a morning run for our mechanical department class. After our morning run, we will have breakfast until 9 o'clock. Then our first lesson will begin. Each class is one and a half hours long. There are three classes in the morning and two classes in the afternoon. There are no classes in the evening. If students want to study some minor courses, or want to retake courses due to low grades, these courses will be scheduled after 6 p.m. Students in need need to choose their own courses here.";
    article.appendChild(p);

    var img = document.createElement("img");
    img.src = "./images/sitcollege.jpg";
    img.alt = "sitphoto";
    collegeSection.appendChild(article);
    collegeSection.appendChild(img);

    document.querySelector("main").appendChild(collegeSection);
}

function createThoughtsSection() {
    var thoughtsSection = document.createElement("section");
    thoughtsSection.id = "Mythoughts";

    var h1 = document.createElement("h1");
    h1.textContent = "My Thoughts";
    thoughtsSection.appendChild(h1);

    var article = document.createElement("article");
    var p = document.createElement("p");
    p.textContent = "I think my university life in China is very good. Because our class has been together since entering college until graduation. I know everyone in our class very well. We have spent a lot of time together and are very familiar with each other. Everyone is a long-time friend to me. We will arrange class gatherings together during school. In addition, in order to unite the cooperation of the class, the sports games, performances and other activities arranged by the school are all based on the class. Classes are pitted against each other. very interesting.";
    article.appendChild(p);

    thoughtsSection.appendChild(article);

    document.querySelector("main").appendChild(thoughtsSection);
}