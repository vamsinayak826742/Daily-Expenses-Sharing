document.getElementById('create-user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const mobile = document.getElementById('user-mobile').value;

    // Make API call to create user
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, mobile })
    })
    .then(response => response.json())
    .then(data => {
        alert('User created successfully!');
        // Reset form
        document.getElementById('create-user-form').reset();
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('add-expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('expense-description').value;
    const amount = document.getElementById('expense-amount').value;

    // Make API call to add expense
    fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, amount })
    })
    .then(response => response.json())
    .then(data => {
        alert('Expense added successfully!');
        // Reset form
        document.getElementById('add-expense-form').reset();
    })
    .catch(error => console.error('Error:', error));
});

// Add logic for downloading the balance sheet
document.getElementById('download-balance-sheet').addEventListener('click', function() {
    fetch('/api/balance-sheet')
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'balance-sheet.pdf'; // Change the file type as needed
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading balance sheet:', error));
});
