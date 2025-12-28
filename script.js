// ======= DAILY LIST =======
let dailyTasks = JSON.parse(localStorage.getItem("daily")) || [];
let monthlyTasks = JSON.parse(localStorage.getItem("monthly")) || [];

const dailyList = document.getElementById("dailyList");
const monthlyList = document.getElementById("monthlyList");

// Render function for lists
function renderLists() {
    dailyList.innerHTML = "";
    dailyTasks.forEach((task, index) => {
        dailyList.innerHTML += `
            <li>
                <input type="checkbox" ${task.done ? "checked" : ""} onclick="toggleDaily(${index})">
                ${task.text}
                <button class="delete" onclick="deleteDaily(${index})">x</button>
            </li>`;
    });

    monthlyList.innerHTML = "";
    monthlyTasks.forEach((task, index) => {
        monthlyList.innerHTML += `
            <li>
                <input type="checkbox" ${task.done ? "checked" : ""} onclick="toggleMonthly(${index})">
                ${task.text}
                <button class="delete" onclick="deleteMonthly(${index})">x</button>
            </li>`;
    });
}

// DAILY ADD / DELETE / TOGGLE
function addDaily() {
    let input = document.getElementById("dailyInput");
    if (!input.value.trim()) return;
    dailyTasks.push({ text: input.value, done: false });
    input.value = "";
    save();
}

function toggleDaily(i) {
    dailyTasks[i].done = !dailyTasks[i].done;
    save();
}

function deleteDaily(i) {
    dailyTasks.splice(i, 1);
    save();
}

// MONTHLY ADD / DELETE / TOGGLE
function addMonthly() {
    let input = document.getElementById("monthlyInput");
    if (!input.value.trim()) return;
    monthlyTasks.push({ text: input.value, done: false });
    input.value = "";
    save();
}

function toggleMonthly(i) {
    monthlyTasks[i].done = !monthlyTasks[i].done;
    save();
}

function deleteMonthly(i) {
    monthlyTasks.splice(i, 1);
    save();
}

// SAVE to localStorage
function save() {
    localStorage.setItem("daily", JSON.stringify(dailyTasks));
    localStorage.setItem("monthly", JSON.stringify(monthlyTasks));
    renderLists();
}

renderLists();
