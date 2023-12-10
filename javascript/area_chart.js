var ctx = document.getElementById('areaChartCanva').getContext('2d');

//Create data
var chartData = {
    labels: ['Слаб', 'Среден', 'Добър', 'Много добър', 'Отличен'],
    datasets: [
        {
            label: 'Оценки по Уеб',
            data: [3, 17, 21, 65, 15],
            backgroundColor: '#94618E', 
            borderColor: 'purple'
        },
        {
            label: 'Оценки по ИИ',
            data: [10, 7, 30, 15, 45],
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
var areaChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
});
