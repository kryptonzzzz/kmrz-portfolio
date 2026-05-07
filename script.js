const skills = [
  "Software Tools (Excel, Word, PowerPoint, QGIS)",
  "Operating Systems (Windows, Linux)",
  "Hardware, Software & Troubleshooting",
  "Web & Software Development",
  "AI Programming & Automation",
  "Productive Time Management",
  "Effective Communication",
];

const education = [
  { period: "2021 — 2026", school: "Central Luzon State University (CLSU)", degree: "Bachelor of Science in Meteorology (BSMET)", detail: "College of Science · GPA 1.64 · Cum Laude / With Academic Distinction" },
  { period: "2019 — 2021", school: "Mallorca National High School (MNHS)", degree: "Senior High School — HUMSS", detail: "GPA 97 · Valedictorian" },
  { period: "2015 — 2019", school: "Masbate National Comprehensive High School (Science High School)", degree: "Junior High School — Grade 7 to Grade 10", detail: "Cumulative Average 89 · Consistent Top Student" },
];

const experiences = [
  { year: "2026", title: "CSE-PPT Passer", body: "Passed the Civil Service Exam (Professional) — March 2026. Among the 15.85% who passed out of 307,489 examinees nationwide." },
  { year: "2025 — Present", title: "Dagaz Data Entry", body: "Disputing services for Uber Eats — accurate case handling, documentation, and resolution." },
  { year: "2024", title: "On-the-Job Training", body: "240 hours of training at PAGASA Baguio Synoptic Station and PAGASA BSU Agromet Station." },
];

const credentials = [
  "On-the-Job Training Certificate of Completion",
  "Certificate of Participation — Youth Forum on Access and Benefit Sharing",
  "Certificate of Participation — First-aid Training",
  "Certificate of Participation — First Campus Journalists' Congress",
  "Certificate of Participation — 2019 CD IV Press Conference",
];

const chips = ["Meteorology", "PAGASA-trained", "Cum Laude", "CSE-PPT Passer"];
const langs = [{ lang: "Filipino", level: "Fluent", v: 100 }, { lang: "English", level: "Intermediate", v: 70 }];

const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

document.getElementById("chips").innerHTML = chips.map(c => `<span class="chip">${esc(c)}</span>`).join("");

document.getElementById("exp-list").innerHTML = experiences.map(e => `
  <article class="exp-item">
    <div class="exp-year">${esc(e.year)}</div>
    <div>
      <h3 class="exp-title">${esc(e.title)}</h3>
      <p class="exp-body">${esc(e.body)}</p>
    </div>
  </article>
`).join("");

document.getElementById("cert-grid").innerHTML = credentials.map(c => `<li>${esc(c)}</li>`).join("");

document.getElementById("edu-grid").innerHTML = education.map(ed => `
  <div class="edu-card">
    <p class="edu-period">${esc(ed.period)}</p>
    <h3 class="edu-degree">${esc(ed.degree)}</h3>
    <p class="edu-school">${esc(ed.school)}</p>
    <p class="edu-detail">${esc(ed.detail)}</p>
  </div>
`).join("");

document.getElementById("skills-list").innerHTML = skills.map((s, i) => `
  <li><span class="num">${String(i + 1).padStart(2, "0")}</span><span>${esc(s)}</span></li>
`).join("");

document.getElementById("lang-list").innerHTML = langs.map(l => `
  <div>
    <div class="lang-row"><span class="lang-name">${esc(l.lang)}</span><span class="muted small">${esc(l.level)}</span></div>
    <div class="lang-bar"><div class="lang-fill" style="width:${l.v}%"></div></div>
  </div>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.nav-links a, .cta-row a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id?.startsWith("#")) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});