import pymongo as md
from datetime import date, datetime
import serial
import time


#date
day = date.today()
nday = day.strftime("%d-%m-%Y")


#création  communication arduino

port ="COM9"  #port serie
try:
    com = serial.Serial(port, 115200, timeout=1)
except Exception:
    print(" problème de connexion serie ")

try:

    client = md.MongoClient("localhost", 27017, ServerSelectionTimeoutMS=5000)
    Dblist = client.list_database_names()
    print(Dblist)
    if 'arduino_sensor' in Dblist:

        #Dbclient = client.get_database("arduino_sensor")  #récupération base de données
        Dbclient = client.arduino_sensor
        print(Dbclient)
        listCollect = Dbclient.list_collection_names() #listes des tables
        #print(listCollect)
        if "temperature" in listCollect:
            table = Dbclient.get_collection("temperature") #recupération table

            #table.insert_one(datas)

            #afficher
            # docs = table.find()
            # for doc in docs:
            #     print(doc)
        else:
            print("table introuvable")
    else:
        print("base de données introuvable")

except Exception as e:
    print("erreur: ", str(e))

# finally:
    #client.close()
while True:

    #données du capteur

    data = com.readline()
    print(data.decode('utf-8'))

    # temps
    now = datetime.now()
    ctime = now.strftime("%H:%M:%S")
    datas = {"temp °c": data.decode('utf-8'), "date": nday, "heure": ctime}

    table.insert_one(datas)  #insetion dans la base de données

    time.sleep(5) #toute les 5 secondes

