var ctx = document.getElementById('bubbleChartCanva').getContext('2d');

//Create data
var chartData = {
    datasets: [
        {
            label: 'Координати на точки',
            data: [
                { x: 10, y: 20, r: 7 }, 
                { x: 30, y: 7, r: 25 }, 
                { x: 50, y: 47, r: 13 },
                { x: 15, y: 31, r: 15 }, 
                { x: 20, y: 40, r: 25 }, 
                { x: 43, y: 23, r: 20 }, 
                { x: 21, y: 20, r: 15 }, 
                { x: 34, y: 40, r: 25 }, 
                { x: 47, y: 13, r: 20 }, 
            ],
            backgroundColor: '#94618E', 
            borderColor: 'purple'
        }
    ]
};

//Create options
var chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Create chart
var bubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: chartData,
    options: chartOptions
});
