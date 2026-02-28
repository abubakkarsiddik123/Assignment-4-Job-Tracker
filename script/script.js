let currentBtn = "all";
const btnActive = ["bg-blue-500", "text-white"];
const btnInactive = ["bg-white", "border", "border-[#f1f2f4FF]"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptySection = document.getElementById("empty-section");

function switchBtn(click) {
  const btns = ["all", "interview", "rejected"];
  currentBtn = click;
  for (const btn of btns) {
    const btnName = document.getElementById("btn-" + btn);
    if (btn === click) {
      btnName.classList.remove(...btnInactive);
      btnName.classList.add(...btnActive);
    } else {
      btnName.classList.remove(...btnActive);
      btnName.classList.add(...btnInactive);
    }
  }

  const pages = [allContainer, interviewContainer, rejectedContainer];
  for (const section of pages) {
    section.classList.add("hidden");
  }

  emptySection.classList.add("hidden");

  if (click === "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.children.length < 1) {
      emptySection.classList.remove("hidden");
    }
  } else if (click === "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      emptySection.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      emptySection.classList.remove("hidden");
    }
  }
  updateTotal();
}

const totalAll = document.getElementById("total-all");
const totalInterview = document.getElementById("total-interview");
const totalReject = document.getElementById("total-reject");
const totalAvailable = document.getElementById("available");

totalAll.innerText = allContainer.children.length;

switchBtn(currentBtn);

document
  .getElementById("main-container")
  .addEventListener("click", function (event) {
    const clickElement = event.target;
    const card = clickElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (clickElement.classList.contains("interview")) {
      status.innerText = "interviewed";
      interviewContainer.appendChild(card);
      updateTotal();
    }
    if (clickElement.classList.contains("rejected")) {
      status.innerText = "rejected";
      rejectedContainer.appendChild(card);
      updateTotal();
    }
    if (clickElement.classList.contains("delete")) {
      parent.removeChild(card);
      updateTotal();
    }
  });

function updateTotal() {
  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };
  totalAll.innerText = counts["all"];
  totalInterview.innerText = counts["interview"];
  totalReject.innerText = counts["rejected"];
  totalAvailable.innerText = counts[currentBtn];

  if (counts[currentBtn] < 1) {
    emptySection.classList.remove("hidden");
  } else {
    emptySection.classList.add("hidden");
  }
}

updateTotal();
