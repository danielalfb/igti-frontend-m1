function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`;
  });
  return `<table>${rows.join('')}</table>`;
}

async function constructTable() {
  let [employees, roles] = await Promise.all([
    fetchJson('http://localhost:3000/employees'),
    fetchJson('http://localhost:3000/roles'),
  ]);
  let table = renderTable(employees, roles);
  document.getElementById('showData').innerHTML = table;
}
constructTable();
