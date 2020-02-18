import RPi.GPIO as GPIO
import io

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
try:
    GPIO.output(18, GPIO.HIGH)
    GPIO.output(18, GPIO.LOW)
    with open("/home/pi/sensorChart/luz","w") as tluz:
        tluz.write("1")
        tluz.close()
except:
    GPIO.output(18, GPIO.HIGH)
    GPIO.cleanup()