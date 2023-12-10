var ctx = document.getElementById('lineChartCanva').getContext('2d');

//Create data
var chartData = {
    labels: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
    datasets: [
        {
            label: 'Приход на компанията в хиляди',
            data: [4, 6, 3, 7, 8, 11, 11, 13, 9, 4, 5, 7],
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
var lineChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
});
