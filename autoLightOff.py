import RPi.GPIO as GPIO
import io

try:
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(18, GPIO.OUT)
    GPIO.output(18, GPIO.HIGH)
    GPIO.cleanup()
    with open("/home/pi/sensorChart/luz","w") as tluz:
        tluz.write("0")
        tluz.close()
except:
    GPIO.output(18, GPIO.HIGH)
    GPIO.cleanup()