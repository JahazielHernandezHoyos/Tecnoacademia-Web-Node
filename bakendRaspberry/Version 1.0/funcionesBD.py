#!/usr/bin/python
# -*- coding:utf-8 -*-

from pydoc import doc
from turtle import clear
from numpy import NaN
from pymongo import MongoClient
from os import system
from datetime import date
from datetime import datetime
now = datetime.now()
#simulacion entrada de Huella
gx_ref_buffer = [
    245,
    3,
    0,
    0,
    0,
    0,
    4,
    245
  ]

#conectar a la base de datos
client = MongoClient("mongodb+srv://tecnoacademiaADMIN:bBTWBBnFDG2aReok@tecnoacademia.mjfzz.mongodb.net/estudiantes?retryWrites=true&w=majority") 
baseDeDatos = client["Tecnoacademia"] #Selecciona la base de datos
collection = baseDeDatos["estudiantes"] #Selecciona la coleccion

def registro(Huella):
    documentoId = input("Ingrese el documento: ")
    #update_one
    documento= collection.find_one(
        {
            "Numero de identificacion": str(documentoId)
        }
    )

    print("Bienvenido " + documento["Nombre Completo "] + " tu registro esta en proceso...") 

    collection.update_one(
            {"_id": documento["_id"]},
            {
                "$set": {
                    "Huella": Huella
                }
            }
        )
    print(documentoId)
    print("aqui deberia ir la huellita")
    print(Huella)

def validacion(Huella):
    documento= collection.find_one(
        {
            "Huella": Huella
        }
    )
    if documento == None:
        print("Huella no registrada")
        registro(Huella)
    if documento != None:
        Fecha = now.strftime('%d-%m-%Y')
        Hora = now.strftime('%H:%M:%S')
        HoraYFecha = [Fecha, Hora]
        print(str(documento["asistencia"]))
        if documento["asistencia"] != None:
            collection.update_one(
                {"_id": documento["_id"]},
                {"$set": {
                    "asistencia": documento["asistencia"] + [HoraYFecha],
                    "registroDelDia": True
                }
                }
            )
        if str(documento["asistencia"]) == "nan":
            print("siiuuu")
            collection.update_one(
             {"_id": documento["_id"]},
             {"$set": {
                 "asistencia": [HoraYFecha],
                 "registroDelDia": True
             }
             }
         )
        print("Asistencia realizada con exito")


# validacion(gx_ref_buffer)
