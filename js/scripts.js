$(document).ready(function(){
    $("#myCarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $("#myCarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $("#myCarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});

var ctx = document.getElementById('myChart').getContext("2d");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Millions Americans can benefit', 'Millions Americans depend on food banks', 'Millions Americans can be feeded with donations'],
        datasets: [{
            data: [74,37,22],
            backgroundColor: [
                'rgba(32, 40, 157, 0.75)',
                'rgba(155, 32, 101, 0.75)',
                'rgba(32, 157, 45, 0.75)',
            ],
            borderColor: [
                'rgba(32, 40, 157, 1)',
                'rgba(155, 32, 101, 1)',
                'rgba(32, 157, 45, 1)'
            ],
            borderWidth: 1
        }]
        },
    options:{
        scales: {
            xAxes: [{
                barPercentage: 1.0
            }],
            yAxes: [{
                type: "linear",
                display: true,
                ticks: {
                    beginAtZero: true
                },
                // space between top and graph
                offset: true
            }],

        },
        //Remove legend
        legend: {
           display: false
        },
        //disable tooltip
        tooltips: {
            enabled: false
        }
    }
});