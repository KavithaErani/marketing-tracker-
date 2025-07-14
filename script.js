document.getElementById("visitors").innerText = 1200;
document.getElementById("conversion").innerText = "4.5%";

const ctx = document.getElementById('visitorsChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Visitors',
            data: [150, 200, 180, 220, 300, 400, 350],
            borderColor: 'blue',
            borderWidth: 2
        }]
    }
});
