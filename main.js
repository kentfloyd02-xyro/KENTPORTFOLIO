const testimonials = [
  {
    name: "Project Partner",
    role: "Team Collaboration",
    content:
      "Reliable, easy to work with, and consistent in delivering clean results during group projects.",
    image: "KentImage.png",
  },
  {
    name: "Classmate",
    role: "Web Development",
    content:
      "Shows strong commitment to learning new tools and improving the quality of his work.",
    image: "KentImage.png",
  },
  {
    name: "Peer Reviewer",
    role: "Code Review",
    content:
      "Communicates well, accepts feedback, and applies it quickly to build better solutions.",
    image: "KentImage.png",
  },
  {
    name: "Team Lead",
    role: "Project Support",
    content:
      "Demonstrates a professional attitude, solid problem solving, and a clear willingness to grow.",
    image: "KentImage.png",
  },
  {
    name: "Mentor",
    role: "Technical Guidance",
    content:
      "A promising developer who brings focus, discipline, and a thoughtful approach to each task.",
    image: "KentImage.png",
  },
];

const createTestimonialsCard = (testimonial) => {
  return `
        <div class="card">
            <div class="profile">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div>
                    <div class="name">${testimonial.name}</div>
                    <div class="role">${testimonial.role}</div>
                </div>
            </div>
            <div class="testimonial-text">${testimonial.content}</div>
        </div>
    `;
};

const populateColumn = (columnId) => {
  const column = document.getElementById(columnId);

  [...testimonials, ...testimonials].forEach((testimonial) => {
    column.innerHTML += createTestimonialsCard(testimonial);
  });
};

testimonials.sort(() => Math.random() - 0.5);
populateColumn("column1");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column2");
testimonials.sort(() => Math.random() - 0.5);
populateColumn("column3");

const menuToggle = document.querySelector(".menu-toggle");
const navButton = document.querySelector(".nav-button");
const navLinks = document.querySelectorAll(".nav-button a");

const closeNavigation = () => {
  navButton.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
};

const scrollToSectionCenter = (hash) => {
  const target = document.querySelector(hash);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });

  history.pushState(null, "", hash);
};

menuToggle.addEventListener("click", () => {
  const isOpen = navButton.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeNavigation();
    scrollToSectionCenter(link.getAttribute("href"));
  });
});
