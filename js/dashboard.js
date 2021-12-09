$(".counterup").counterUp({
    delay: 10,
    time: 1000
})

let dateArr = ["Nov 10","Nov 9","Nov 8","Nov 7","Nov 6","Nov 5","Nov 4","Nov 3","Nov 2"]
let OrderArr = [32,8,23,22,10,23,20,3,0]
let Viewer = [339,100,221,210,131,200,210,10,12]

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Orders',
            data: OrderArr,
            backgroundColor: [
                '#007bff30',
            ],
            borderColor: ['#007bff'],
            borderWidth: 1,
            tension: 0.1,
        },
        {
            label: 'Viewers',
            data: Viewer,
            backgroundColor: [
                '#dc354530',
            ],
            borderColor: ['#dc3545'],
            borderWidth: 1,
            tension: 0.1,
        }
    ],
    },
    options: {
        scales: {
            yAxes:[{
                display: false,
            }],
            y: {
                beginAtZero: true
            },
        },
        legend:{
            labels:{
                usePointStyle: true
            }
        }
    }
});
let place = ['YGN','MDY','AYA','TNI','MON'];
let orders = [13,19,9,29,12]
const dtx = document.getElementById('dougnut').getContext('2d');
const dougnut = new Chart(dtx, {
    type: 'doughnut',
    data: {
        labels: place,
        datasets: [{
            label: 'Orders & Places',
            data: orders,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            yAxes: {
                display: false,
                beginAtZero: true
            }
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true,
            }
        },
    }
});
$('.carousel').carousel({
    interval: 5000
  })