var ctx = document.getElementById('barChartCanva').getContext('2d');

//Create data
var chartData = {
    labels: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
    datasets: [
        {
            label: 'Похарчени пари през 2022',
            data: [578, 690, 896, 1296, 753, 432, 875, 321, 456, 497, 521, 685],
            backgroundColor: '#94618E', 
            borderColor: 'purple'
        },
        {
            label: 'Похарчени пари през 2023',
            data: [758, 960, 986, 673, 1321, 1294, 652, 895, 923, 657, 1106, 1213],
            backgroundColor: '#FFC0CB', 
            borderColor: '#F59FAE'
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
var barChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
});
