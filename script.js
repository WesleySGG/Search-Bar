const data = [
    {
        title: "Software Engineer",
        description:
            "Design and guide the development of programs, applications and systems, so that they meet requirements and fulfill determined functions."
    },
    {
        title: "Marketing Manager",
        description:
            "They are responsible for developing marketing plans, carrying out market research, analyzing consumer trends and identifying target audiences."
    },
    {
        title: "Nurse Practitioner",
        description:
            "Provide assistance to patients and/or users in clinics, hospitals, outpatient clinics, ships, health centers and at home, carrying out consultations and more complex procedures and prescribing actions; implement actions to promote health within the community."
    },
    {
        title: "Financial Analyst",
        description:
            "Payment and receipt of bills, billing analysis, bank reconciliation, checking of bills and invoices, and expense control."
    },
    {
        title: "Graphic Designer",
        description:
            "Professional who works on creating visual projects that aim to communicate and represent ideas."
    },
    {
        title: "Physical Therapist",
        description:
            "Serve patients for prevention, habilitation and rehabilitation, using specific physiotherapy protocols and procedures; enable patients; carry out specific diagnoses; analyze patients’ conditions; develop prevention, health promotion and quality of life programs."
    },
    {
        title: "Human Resources Manager",
        description:
            "Professional responsible for coordinating a company's HR team. This person develops strategies aligned with the business objective and the needs of the Human Resources department, in addition to monitoring the goals and the team."
    },
    {
        title: "Mechanical Engineer",
        description:
            "Area of ​​engineering dedicated to mechanical systems, machines, industrial installations, equipment, motor vehicles and production systems."
    },
    {
        title: "Teacher",
        description:
            "Is a professional who teaches different types of activities that aim to educate and teach a person or a group, spreading knowledge from different areas."
    },
];
const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");
const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
        </div>
        `
    })
}
searchInput.addEventListener("keyup", (e) => {
    const search = data.filter(i=>i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})
window.addEventListener("load", displayData.bind(null,data))
