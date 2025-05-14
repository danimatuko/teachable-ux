console.log("Teachable UX Fix loaded");

// Wait for the DOM to fully load
const sidebar = document.querySelector("#courseSidebar");
const topbar = document.querySelector(".lecture-left");
console.table(sidebar, topbar)

if (!sidebar || !topbar) console.error("Elements not found");

// 1. Hide the sidebar initially
sidebar.style.display = "none";
sidebar.dataset.visible = "false"; // Custom marker

// 2. Create the toggle button
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Sidebar";
toggleBtn.id = "sidebar-toggle-btn";
toggleBtn.style.marginLeft = "1rem";
toggleBtn.style.padding = "6px 12px";
toggleBtn.style.borderRadius = "4px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.background = "#4a90e2";
toggleBtn.style.color = "#fff";
toggleBtn.style.fontSize = "14px";

// 3. Add button to topbar
topbar.appendChild(toggleBtn);

// 4. Toggle logic
toggleBtn.addEventListener("click", () => {
  const isVisible = sidebar.dataset.visible === "true";
  sidebar.style.display = isVisible ? "none" : "block";
  sidebar.dataset.visible = isVisible ? "false" : "true";
});
