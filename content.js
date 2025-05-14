console.log("Teachable UX Fix loaded");

const sidebar = document.querySelector("#courseSidebar");
const topbar = document.querySelector(".lecture-left");

if (!sidebar || !topbar) {
  console.error("❌ Sidebar or topbar not found");
}

// Restore previous sidebar state or default to visible
const savedState = localStorage.getItem("sidebarVisible");
const sidebarVisible = savedState === null ? true : savedState === "true";

// Initial sidebar state
sidebar.style.display = sidebarVisible ? "block" : "none";
sidebar.dataset.visible = sidebarVisible ? "true" : "false";

// Create toggle button
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "☰"; // Your existing icon
toggleBtn.id = "sidebar-toggle-btn";
toggleBtn.title = "Show or hide the sidebar";
topbar.prepend(toggleBtn);

// Toggle behavior
toggleBtn.addEventListener("click", () => {
  const isVisible = sidebar.dataset.visible === "true";
  const newState = !isVisible;

  sidebar.style.display = newState ? "block" : "none";
  sidebar.dataset.visible = newState ? "true" : "false";
  localStorage.setItem("sidebarVisible", newState.toString());

  console.log("Sidebar state updated:", newState);
});
