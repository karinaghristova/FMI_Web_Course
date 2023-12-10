var ctx = document.getElementById('scatterChartCanva').getContext('2d');

// Create data
var chartData = {
    datasets: [{
        label: 'Scatter Chart Example',
        data: [
            { x: 7, y: 15 }, 
            { x: 13, y: 27 }, 
            { x: 27, y: 21 }, 
            { x: 34, y: 16 }, 
            { x: 42, y: 17 }  
        ],
        backgroundColor: '#94618E', 
        borderColor: 'purple', 
        pointRadius: 6, 
        pointHoverRadius: 8 
    }]
};

// Create options 
var chartOptions = {
    responsive: true,
    scales: {
        x: {
            type: 'linear',
            position: 'bottom' 
        },
        y: {
            type: 'linear',
            position: 'left' 
        }
    },
    plugins: {
        legend: {
            display: false 
        }
    }
};

// Create chart
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: chartData,
    options: chartOptions
});