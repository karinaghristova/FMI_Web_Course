var ctx = document.getElementById('pieChartCanva').getContext('2d');

// Create data
var chartData = {
    labels: ['Средно', 'Бакалвър', 'Магистър'],
    datasets: [{
        data: [157, 84, 43], 
        backgroundColor: ['#94618E','#FFC0CB', '#FFFF42'], 
        borderColor: ['#85517F','#F59FAE', '#EBEB3D'],
    }]
};

// Create options
var chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' 
        }
    }
};

// Create chart
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: chartData,
    options: chartOptions
});