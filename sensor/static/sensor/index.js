function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$(document).ready(function () {
    // Adiciona a data atual no título
    var d = new Date();
    var strDate = (d.getDate() + "/" + d.getMonth() + 1) + "/" + d.getFullYear();
    $('.titulo').text(strDate);

    // Desenha os graficos
    drawCharts();

    // Trata a checkbox da luz
    $('#checkboxlight').change(function (event) {
        $('#checkboxlight').bootstrapToggle('disable');
        // var csrftoken = getCookie('csrftoken');
        // $.ajaxSetup({
        //     beforeSend: function(xhr, settings) {
        //         if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        //             xhr.setRequestHeader("X-CSRFToken", csrftoken);
        //         }
        //     }
        // });
        // $.ajax({
        //     type: "POST",
        //     url: "/luz/",
        //     data: {
        //         // 'video': $('#test').val() // from form
        //     },
        //     success: function () {
        //         console.log("deu")
        //         $('#checkboxlight').bootstrapToggle('enable');
        //     }
        // });
        
    });

    // Atualiza página a cada 15 minutos
    setTimeout(function () {
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