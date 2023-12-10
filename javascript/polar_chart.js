var ctx = document.getElementById('polarAreaChartCanva').getContext('2d');

// Create data
var chartData = {
    labels: ['Иван', 'Алекс', 'Мария', 'Лили', 'Криси'],
    datasets: [{
        data: [37, 28, 13, 32, 47], 
        backgroundColor: ['#BB6CE6', '#AF9FF5', '#67E07F', '#F2E335', '#FFC0CB'], 
        borderColor: ['#9654BA', '#877AC2', '#50AD62', '#D6C82D', '#F59FAE'], 
    }]
};

// Create options
var chartOptions = {
    responsive: true,
    scale: {
        ticks: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            position: 'bottom' // Adjust legend position
        }
    }
};

// Create chart
var polarAreaChart = new Chart(ctx, {
    type: 'polarArea',
    data: chartData,
    options: chartOptions
});