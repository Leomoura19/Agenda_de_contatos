function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    if (name , phone , email ) {
        const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        
        
        cell1.textContent = name;
        cell2.textContent = phone;
        cell3.textContent = email;
        
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}