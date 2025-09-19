// Dummy auth for testing
let currentUser = null;

export function login(email, password) {
  // Simple hardcoded roles for now
  if (email === "admin@test.com" && password === "1234") {
    currentUser = { email, role: "admin" };
  } else {
    currentUser = { email, role: "user" };
  }
  return currentUser;
}

export function logout() {
  currentUser = null;
}

export function getCurrentUser() {
  return currentUser;
}
