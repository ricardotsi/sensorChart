$(document).ready(function () {
    // Adiciona a data atual no título
    var d = new Date();
    var strDate = (d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear());
    $('.titulo').text(strDate);

    // Desenha os graficos
    drawCharts();

    //Verifica posição da ventilação
    if(vent == 0){
        $("#checkboxfan").bootstrapToggle('off');
    }else{
        $("#checkboxfan").bootstrapToggle('on');
    }

    // Trata a checkbox da ventilação
    $('#checkboxfan').change(function (event) {
        $('#checkboxfan').bootstrapToggle('disable');
        $('#checkboxlight').bootstrapToggle('disable');
        var estado = $('#checkboxfan')[0].checked;
        $.ajax({
            url: 'ajax/ventilacao',
            data: {
                'estado': estado
            },
            dataType: 'json',
            success: function (data) {
                if (data.resultado.includes("Ventilação")){
                    $(".alert").addClass("alert-success");
                }else{
                    $(".alert").addClass("alert-danger");
                }
                $(".alert").append("<strong>" + data.resultado + "</strong>")
                $(".alert").fadeIn().delay(2000).fadeOut();
                setTimeout(
                    function () {
                        if (data.resultado.includes("Ventilação")){
                            $(".alert").removeClass("alert-success");
                        }else{
                            $(".alert").removeClass("alert-danger");
                        }
                        $(".alert").empty();
                        $('#checkboxfan').bootstrapToggle('enable');
                        $('#checkboxlight').bootstrapToggle('enable');
                    }, 3000);
            },
            error: function (data) {
                $(".alert").addClass("alert-danger");
                $(".alert").append("<strong>Ocorreu um erro na requisição</strong>")
                $(".alert").fadeIn().delay(2000).fadeOut();
                setTimeout(
                    function () {
                        $(".alert").removeClass("alert-danger");
                        $(".alert").empty();
                    }, 3000);
            }
        });
    });

    //Verifica posição da ventilação
    if(luz == 0){
        $("#checkboxlight").bootstrapToggle('off');
    }else{
        $("#checkboxlight").bootstrapToggle('on');
    }

    // Trata a checkbox da luz
    $('#checkboxlight').change(function (event) {
        $('#checkboxlight').bootstrapToggle('disable');
        $('#checkboxfan').bootstrapToggle('disable');
        var estado = $('#checkboxlight')[0].checked;
        $.ajax({
            url: 'ajax/luz',
            data: {
                'estado': estado
            },
            dataType: 'json',
            success: function (data) {
                if (data.resultado.includes("Luz")){
                    $(".alert").addClass("alert-success");
                }else{
                    $(".alert").addClass("alert-danger");
                }
                $(".alert").append("<strong>" + data.resultado + "</strong>")
                $(".alert").fadeIn().delay(2000).fadeOut();
                setTimeout(
                    function () {
                        if (data.resultado.includes("Luz")){
                            $(".alert").removeClass("alert-success");
                        }else{
                            $(".alert").removeClass("alert-danger");
                        }
                        $(".alert").empty();
                        $('#checkboxlight').bootstrapToggle('enable');
                        $('#checkboxfan').bootstrapToggle('enable');
                    }, 3000);
            },
            error: function (data) {
                $(".alert").addClass("alert-danger");
                $(".alert").append("<strong>Ocorreu um erro na requisição</strong>")
                $(".alert").fadeIn().delay(2000).fadeOut();
                setTimeout(
                    function () {
                        $(".alert").removeClass("alert-danger");
                        $(".alert").empty();
                    }, 3000);
            }
        });
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