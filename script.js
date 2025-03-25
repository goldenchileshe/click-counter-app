let count = 0;

function increaseCount() {
  count++;
  document.getElementById("count").innerText = count;
}

function decreaseCount() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerText = count;
  }
}

function resetCount() {
  // Show modal instead of instantly resetting
  document.getElementById("confirmModal").style.display = "block";
}

function confirmReset() {
  count = 0;
  document.getElementById("count").innerText = count;
  closeModal();
}

function closeModal() {
  document.getElementById("confirmModal").style.display = "none";
}

// Theme toggle with icon and localStorage
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("themeIcon");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
}

// Load theme on startup
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("themeIcon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

/* --- Draggable Toggle Button --- */
const toggleBtn = document.getElementById("themeToggleBtn");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

toggleBtn.addEventListener("mousedown", (e) => {
  isDragging = true;

  const rect = toggleBtn.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    toggleBtn.style.left = `${e.clientX - offsetX}px`;
    toggleBtn.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
