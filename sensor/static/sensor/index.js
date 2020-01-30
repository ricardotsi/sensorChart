$(document).ready(function () {
    var d = new Date();
    var strDate = (d.getDate() + "/" + d.getMonth()+1) + "/" + d.getFullYear();
    $('.titulo').text(strDate);

    drawCharts();
    
    // $('#checkbox').change(function() {
    //     if ($('#checkbox')[0].checked){
    //         $('.luz').text('Acesa');
    //     }else{
    //         $('.luz').text('Apagada');
    //     }
    // });
    setTimeout(function(){
        window.location.reload(1);
     }, 900000);
});

function drawCharts() {
    var ctx = document.getElementById("hoje").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datahj,
            datasets: [{
                    label: "Umidade",
                    data: umidhj,
                    borderColor: 'rgba(177, 15, 46, 1)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    yAxisID: 'Umidade',
                },
                {
                    type: 'line',
                    label: "Temperatura",
                    data: temphj,
                    borderColor: 'rgba(0, 0, 0, 0)',
                    backgroundColor: 'rgba(73, 190, 170, 0.4)',
                    yAxisID: 'Temperatura',
                }
            ],
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                yAxes: [{
                        id: "Temperatura",
                        ticks: {
                            beginAtZero: true,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperatura ºC'
                        }
                    },
                    {
                        id: "Umidade",
                        position: 'right',
                        ticks: {
                            beginAtZero: true,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Umidade %'
                        }
                    },
                ]
            }
        },
    });

    var ctx = document.getElementById("todos").getContext('2d');
    var todos = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datatd,
            datasets: [{
                    label: "Umidade",
                    data: umidtd,
                    borderColor: 'rgba(177, 15, 46, 1)',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    yAxisID: 'Umidade',
                },
                {
                    type: 'line',
                    label: "Temperatura",
                    data: temptd,
                    borderColor: 'rgba(0, 0, 0, 0)',
                    backgroundColor: 'rgba(73, 190, 170, 0.4)',
                    yAxisID: 'Temperatura',
                }
            ],
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                yAxes: [{
                        id: "Temperatura",
                        ticks: {
                            beginAtZero: true,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperatura ºC'
                        }
                    },
                    {
                        id: "Umidade",
                        position: 'right',
                        ticks: {
                            beginAtZero: true,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Umidade %'
                        }
                    },
                ]
            }
        },
    });
}