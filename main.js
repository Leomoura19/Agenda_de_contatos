function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const opçoes = document.getElementById('opçoes').value;
    const email = document.getElementById('email').value;


    if (name , phone , email , opçoes) {
        const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        
        cell1.textContent = name;
        cell2.textContent = phone;
        cell3.textContent = opçoes;
        cell4.textContent = email;
        
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}