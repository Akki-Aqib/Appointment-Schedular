let currentStep = 1;
let selectedCategory = "";
let selectedDate = "";
let selectedTime = "";

const steps = document.querySelectorAll(".step");

function showStep(stepNum) {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === stepNum - 1);
  });
}

document.querySelectorAll(".category").forEach((cat) => {
  cat.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(c => c.classList.remove("selected"));
    cat.classList.add("selected");
    selectedCategory = cat.dataset.category;
  });
});

document.querySelectorAll(".slot").forEach((slot) => {
  slot.addEventListener("click", () => {
    document.querySelectorAll(".slot").forEach(s => s.classList.remove("selected"));
    slot.classList.add("selected");
    selectedTime = slot.textContent;
  });
});

document.getElementById("next1").addEventListener("click", () => {
  if (!selectedCategory) return alert("Please select a category.");
  showStep(2);
});

document.getElementById("next2").addEventListener("click", () => {
  const dateInput = document.getElementById("appointment-date").value;
  if (!dateInput) return alert("Please select a date.");
  selectedDate = dateInput;
  showStep(3);
});

document.getElementById("book").addEventListener("click", () => {
  if (!selectedTime) return alert("Please select a time slot.");
  document.getElementById("summary").textContent =
    `📌 ${selectedCategory} on 📅 ${selectedDate} at ⏰ ${selectedTime}`;
  showStep(4);
});

document.getElementById("back1").addEventListener("click", () => showStep(1));
document.getElementById("back2").addEventListener("click", () => showStep(2));

