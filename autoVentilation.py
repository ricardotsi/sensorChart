import RPi.GPIO as GPIO
import io
import time


GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.OUT)
try:
    GPIO.output(23, GPIO.HIGH)
    GPIO.output(23, GPIO.LOW)
    with open("/home/pi/sensorChart/vent","w") as tvent:
        tvent.write("1")
        tvent.close()
    time.sleep(5)
    GPIO.output(23, GPIO.HIGH)
    GPIO.cleanup()
    with open("/home/pi/sensorChart/vent","w") as tvent:
        tvent.write()
        tvent.close()
except:
    GPIO.output(23, GPIO.HIGH)
    GPIO.cleanup()