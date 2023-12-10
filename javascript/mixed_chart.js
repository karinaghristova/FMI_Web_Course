var ctx = document.getElementById('mixedChartCanva').getContext('2d');

// Create data
var chartData = {
    labels: ['Яна', 'Фифо', 'Мирела', 'Алекс', 'Мая'],
    datasets: [
        {
            label: 'Колонно множество от данни',
            type: 'bar',
            data: [30, 50, 20, 40, 60],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
        },
        {
            label: 'Линейно множество от данни',
            type: 'line',
            data: [50, 30, 40, 20, 60],
            borderColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5
        }
    ]
};

// Create options
var chartOptions = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            position: 'bottom'
        }
    }
};

// Createchart
var mixedChart = new Chart(ctx, {
    type: 'bar', 
    data: chartData,
    options: chartOptions
});