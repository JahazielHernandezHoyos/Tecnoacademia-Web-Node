#!/usr/bin/python
# -*- coding:utf-8 -*-

from turtle import clear
from pymongo import MongoClient
from os import system
from Lector_huella import AddUser
import Tkinter as tk
# from tkinter import *
# from tkinter import printacion entrada de Huella
gx_ref_buffer = "16"

#conectar a la base de datos
client = MongoClient("mongodb+srv://tecnoacademiaADMIN:bBTWBBnFDG2aReok@tecnoacademia.mjfzz.mongodb.net/estudiantes?retryWrites=true&w=majority") 
baseDeDatos = client["Tecnoacademia"] #Selecciona la base de datos
collection = baseDeDatos["estudiantes"] #Selecciona la coleccion

#crear ventana tkinter con dos label y un boton de enviar
ventana = tk.Tk()
ventana.title("Registrar Estudiante")
ventana.geometry("540x480")


def ventanaInicial():
    #crear label
    diLabel = tk.Label(ventana, text="Numero de documento: ")
    diEntry = tk.Entry(ventana)
    diLabel.grid(row=0, column=0)
    diEntry.grid(row=0, column=1)
    
    #crear boton enviar ti
    boton = tk.Button(ventana, text="Verificar TI", command=lambda: Validacion(diEntry.get(), None))
    boton.grid(row=5, column=1)

    #crear boton registrar asistencia
    boton = tk.Button(ventana, text="Enviar asistencia", command=lambda: Validacion(None, gx_ref_buffer))
    boton.grid(row=5, column=2)

    #vaciar consola
    system("cls")
    ventana.mainloop()


def Validacion(di, Huella):
    #validacion por documento de identidad
    if Huella == None:
        documento = collection.find_one({
            "Numero de identificacion": di
        })
        if documento is None:
            print("Registro de Huella", "No se encontro el estudiante")
        if di == documento["Numero de identificacion"] and documento["Huella"] != "":
            print("Registro de Huella", "Usted ya se encuentra registrado, envie su asistencia")
        if documento["Huella"] == "":
            registrarHuella(documento["_id"], documento)
            
    #validacion por Huella
    if di == None:
        documento = collection.find_one({
            "Huella": Huella
        })
        if documento is None:
            print("Registro de Huella", "No se encontro el estudiante")
        else:
            registrarAsistencia(documento["_id"], documento)

    
def registrarHuella(id, documento):
    print("Registro de Huella", "Bienvenido " + documento["Nombre Completo "] + " coloca tu dedo indice para registrarte en la Base de datos antes de darle al boton de aceptar") 
    collection.update_one(
        {"_id": id},
        {"$set": {
            "Huella": AddUser()
        }}
    )
    print("tu huella ha sido registrada")


def registrarAsistencia(id, documento):
    if documento["registroDelDia"] == False:
        collection.update_one(
            {"_id": id},
            {"$set": {
                "asistencia": documento["asistencia"] + 1,
                "registroDelDia": True
            }
            }
        )
        print("Asistencia", "Bienvenido " + documento["Nombre Completo "] + " tu asistencia ha sido registrada")
    else:
        print("Registro de asistencia", documento["Nombre Completo "] + " ya pasastes la asistencia de hoy")


def main():
    collection.update_many(
            {"registroDelDia": 
            True},
            {"$set": {
                "registroDelDia": False
            }
            }
        )
    ventanaInicial()
main()

