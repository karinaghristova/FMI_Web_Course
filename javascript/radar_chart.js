var ctx = document.getElementById('radarChartCanva').getContext('2d');

// Create data 
var chartData = {
    labels: ['Български', 'Английски', 'Немски', 'Испански', 'Френски'],
    datasets: [
        {
            label: 'Оценки на Иван',
            data: [3, 5, 2, 4, 6], 
            backgroundColor: 'rgba(255, 99, 132, 0.6)', 
            borderColor: 'rgba(255, 99, 132, 1)', 
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', 
            pointBorderColor: '#fff',
            pointRadius: 5 
        },
        {
            label: 'Оценки на Мария',
            data: [5, 4, 3, 2, 1], 
            backgroundColor: 'rgba(54, 162, 235, 0.2)', 
            borderColor: 'rgb(54, 162, 235)', 
            pointBackgroundColor: 'rgb(54, 162, 235)', 
            pointBorderColor: '#fff',
            pointRadius: 5 
        }
    ]
};

// Create options
var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 80
        }
    },
    plugins: {
        legend: {
            position: 'bottom'
        }
    }
};

// Create  chart
var radarChart = new Chart(ctx, {
    type: 'radar',
    data: chartData,
    options: chartOptions
});