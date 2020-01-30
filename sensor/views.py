from django.shortcuts import render
from .models import Sensor
import json
import datetime
from django.contrib.auth.decorators import login_required
import io

@login_required
def index(request):
    #Pega todos os objetos
    todos = Sensor.objects.all()
    datatd =  [datetime.datetime.strftime(obj.data,"%d-%m-%Y") for obj in todos]
    temptd =  [obj.temperatura for obj in todos]
    umidtd =  [obj.umidade for obj in todos]
    
    #Pega os objetos das Ultimas 24H
    time_24_hours_ago = datetime.datetime.now() - datetime.timedelta(days=1)
    hoje = todos.filter(data__gte=time_24_hours_ago)
    datahj =  [datetime.datetime.strftime(obj.data,"%H:%M") for obj in hoje]
    temphj =  [obj.temperatura for obj in hoje]
    umidhj =  [obj.umidade for obj in hoje]
    
    #Pega os objetos da última leitura
    ultimo = todos.filter().latest('data')
    datault = datetime.datetime.strftime(ultimo.data,'%H:%M')
    tempult = ultimo.temperatura
    umidult =  ultimo.umidade

    #Temperatura da CPU
    temp = open("/sys/class/thermal/thermal_zone0/temp", "r")
    tcpu = temp.readline()

    context = {
        'datahj': json.dumps(datahj),
        'temphj': json.dumps(temphj),
        'umidhj': json.dumps(umidhj),
        'datatd': json.dumps(datatd),
        'temptd': json.dumps(temptd),
        'umidtd': json.dumps(umidtd),
        "datault": json.dumps(datault),
        "tempult": json.dumps(tempult),
        "umidult": json.dumps(umidult),
        "tcpu": json.dumps(tcpu),
    }
    return render(request, "sensor/index.html", context)
