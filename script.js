// Open Items Page based on selected category
function openCategory(pagePath) {
  // pagePath should be the actual HTML file in items/ folder
  window.location.href = pagePath;
}

// Logout function
function logout() {
  // Optional: clear temporary cart/user data
  localStorage.removeItem("isLoggedIn"); // clear login flag
  window.location.replace("index.html"); // go to login page
}
