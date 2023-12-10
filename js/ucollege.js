function createCourseSelectionSystem() {
    const main = document.querySelector('main');

    const courseSelectionSection = document.createElement('section');
    courseSelectionSection.innerHTML = `
        <h1>Course Selection System:</h1>
        <p><strong>United States:</strong> At American universities, students generally have greater autonomy and can choose courses based on personal interests and majors. The university offers a wide range of elective and general education courses, encouraging students to explore multiple disciplines.</p>
        <p><strong>China:</strong> Some Chinese universities adopt fixed course schedules and class arrangements. Students may be assigned to specific classes and take the same courses with their classmates, forming a relatively fixed study plan.</p>
    `;

    main.appendChild(courseSelectionSection);
}

function createTeachingMethod() {
    const main = document.querySelector('main');

    const teachingMethodSection = document.createElement('section');
    teachingMethodSection.innerHTML = `
        <h1>Teaching Method:</h1>
        <p><strong>United States:</strong> American universities focus more on interaction and student engagement. Course delivery may include group discussions, research projects, demonstrations and practical case analyses, with an emphasis on developing students' critical thinking and problem-solving skills.</p>
        <p><strong>China:</strong> Some Chinese universities use traditional lecture-based teaching, where teachers lead the classroom. Students may be asked more to memorize and understand textbook content.</p>
    `;

    main.appendChild(teachingMethodSection);
}

function createAssessmentMethod() {
    const main = document.querySelector('main');

    const assessmentMethodSection = document.createElement('section');
    assessmentMethodSection.innerHTML = `
        <h1>Assessment Method:</h1>
        <p><strong>United States:</strong> There are various assessment methods, including assignments, group projects, midterm exams, and final exams. The focus is on comprehensive assessment of students' understanding of knowledge and application of abilities.</p>
        <p><strong>China:</strong> The assessment method may be more focused on final exams, and students' grades mainly depend on exam performance.</p>
    `;

    main.appendChild(assessmentMethodSection);
}

function createStudentSelfGovernance() {
    const main = document.querySelector('main');

    const studentSelfGovernanceSection = document.createElement('section');
    studentSelfGovernanceSection.innerHTML = `
        <h1>Student Self-Governance:</h1>
        <p><strong>United States:</strong> American universities encourage student autonomy and self-management. Students generally have more freedom, including choosing accommodation, participating in club activities and deciding their course progress.</p>
        <p><strong>China:</strong> Some Chinese universities may pay more attention to discipline and collective management, and students may be more restricted in some aspects of their activities.</p>
    `;

    main.appendChild(studentSelfGovernanceSection);
}

function createExtracurricularActivities() {
    const main = document.querySelector('main');

    const extracurricularActivitiesSection = document.createElement('section');
    extracurricularActivitiesSection.innerHTML = `
        <h1>Extracurricular Activities:</h1>
        <p><strong>United States:</strong> University life emphasizes the development of the whole person. Students participate in various societies, sports, cultural and voluntary activities to cultivate leadership and teamwork.</p>
        <p><strong>China:</strong> Some Chinese universities may have relatively few extracurricular activities, with students focusing primarily on their studies.</p>
    `;

    main.appendChild(extracurricularActivitiesSection);
}

function createGeneralOverview() {
    const main = document.querySelector('main');

    const generalOverviewSection = document.createElement('section');
    generalOverviewSection.innerHTML = `
        <h1>General Overview:</h1>
        <p>Generally speaking, Chinese universities focus on providing students with a solid basic education, emphasizing discipline and teamwork. Tuition fees and living costs are relatively low, providing students with limited financial resources with a more affordable study option. Cultural integration is a unique feature of Chinese universities. International students have the opportunity to deeply integrate into Chinese culture and promote cross-cultural exchanges. The teaching in some Chinese universities focuses on the teaching of theoretical knowledge, providing students with a solid disciplinary foundation. Chinese universities emphasize collective cooperation and team spirit, cultivating students' sense of collective honor and organizational and coordination abilities. The education system of American universities focuses on cultivating students' innovative thinking and practical application abilities. Students have the opportunity to gain broad exposure to a diverse range of general education in the first two years of college, and can subsequently choose a major based on personal interests and career goals. Practical learning, internships and independent research are important components of an academic career, with an emphasis on developing students' leadership and entrepreneurship. American universities have an international academic atmosphere that attracts students from all over the world, and a large alumni network provides students with a wide range of career opportunities and support.</p>
    `;

    main.appendChild(generalOverviewSection);
}

document.addEventListener('DOMContentLoaded', function () {
    createCourseSelectionSystem();
    createTeachingMethod();
    createAssessmentMethod();
    createStudentSelfGovernance();
    createExtracurricularActivities();
    createGeneralOverview();
});