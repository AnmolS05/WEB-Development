const userList = document.getElementById("userList");
const errorEl = document.getElementById("error");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
  userList.innerHTML = '';
  errorEl.textContent = '';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const data = await res.json();
    data.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user';
      div.innerHTML = `
        <strong>${user.name}</strong><br>
        📧 ${user.email}<br>
        🏠 ${user.address.street}, ${user.address.city}
      `;
      userList.appendChild(div);
    });
  } catch (err) {
    errorEl.textContent = `Failed to fetch users: ${err.message}`;
  }
}

reloadBtn.addEventListener("click", fetchUsers);
window.addEventListener("load", fetchUsers);
