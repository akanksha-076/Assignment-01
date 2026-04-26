const form = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clearAllBtn");
const sampleBtn = document.getElementById("addSampleBtn");
const keyDiv = document.getElementById("key");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

function addEvent(title, date, category, desc) {
  const emptyState = eventContainer.querySelector(".empty-state");
  if (emptyState) emptyState.remove();

  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `
    <div class="card-header">
      <h3>${title}</h3>
      <button class="delete-btn" title="Delete">&times;</button>
    </div>
    <p class="card-date">📅 ${date}</p>
    <span class="badge">${category}</span>
    <p class="card-desc">${desc}</p>
  `;
  eventContainer.appendChild(card);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addEvent(
    eventTitle.value,
    eventDate.value,
    eventCategory.value,
    eventDescription.value
  );
  form.reset();
});

sampleBtn.addEventListener("click", () => {
  addEvent("Annual Dev Conference", "2026-02-15", "Conference", "Annual conference for developers worldwide.");
  addEvent("JavaScript Workshop", "2026-02-20", "Workshop", "Hands-on JavaScript learning session.");
});

eventContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest(".event-card").remove();
    if (eventContainer.children.length === 0) {
      eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
    }
  }
});

clearBtn.addEventListener("click", () => {
  eventContainer.innerHTML = `<div class="empty-state">No events yet. Add your first event!</div>`;
});

document.addEventListener("keydown", (e) => {
  keyDiv.textContent = "You pressed: " + e.key;
});