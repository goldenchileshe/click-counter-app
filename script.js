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
  count = 0;
  document.getElementById("count").innerText = count;

  // Show message
  document.getElementById("message").innerText = "Counter reset!";

  // Hide message after 2 seconds
  setTimeout(() => {
    document.getElementById("message").innerText = "";
  }, 2000);
}
