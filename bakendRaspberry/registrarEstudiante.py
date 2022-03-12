from turtle import clear
from pymongo import MongoClient
import tkinter as tk
from os import system

#simulacion entrada de huella
gx_ref_buffer = "12"

#conectar a la base de datos
client = MongoClient("mongodb+srv://tecnoacademiaADMIN:bBTWBBnFDG2aReok@tecnoacademia.mjfzz.mongodb.net/estudiantes?retryWrites=true&w=majority") 
baseDeDatos = client["Tecnoacademia"] #Selecciona la base de datos
collection = baseDeDatos["estudiantes"] #Selecciona la coleccion

#crear ventana tkinter con dos label y un boton de enviar
ventana = tk.Tk()
ventana.title("Registrar Estudiante")
ventana.geometry("640x480")

def ventanaInicial():
    #crear label
    tiLabel = tk.Label(ventana, text="T.I: ")
    tiEntry = tk.Entry(ventana)
    tiLabel.grid(row=0, column=0)
    tiEntry.grid(row=0, column=1)
    
    #crear boton enviar ti
    boton = tk.Button(ventana, text="Verificar TI", command=lambda: Validacion(tiEntry.get(), None))
    boton.grid(row=5, column=1)

    #crear boton registrar asistencia
    boton = tk.Button(ventana, text="Enviar asistencia", command=lambda: Validacion(None, gx_ref_buffer))
    boton.grid(row=5, column=2)

    #vaciar consola
    system("cls")
    ventana.mainloop()


def Validacion(ti, huella):
    #validacion por tarjeta de identidad
    print(huella)
    if huella == None:
        documento = collection.find_one({
            "ti": ti
        })
        if documento is None:
            tk.messagebox.showinfo("Registro de huella", "No se encontro el estudiante")
        if documento["huella"] == "":
            registrarHuella(documento["_id"], documento)
            
    #validacion por huella
    if ti == None:
        documento = collection.find_one({
            "huella": huella
        })
        if documento is None:
            tk.messagebox.showinfo("Registro de huella", "No se encontro el estudiante")
        else:
            registrarAsistencia(documento["_id"], documento)
            tk.messagebox.showinfo("Asistencia", "Bienvenido " + documento["nombre"] + " tu asistencia ha sido registrada")

    
def registrarHuella(id, documento):
    tk.messagebox.showinfo("Registro de huella", "Bienvenido " + documento["nombre"] + " ingresa tu huella con el dedo indice para registrarte en la Base de datos") 
    lectura = gx_ref_buffer #capturar la huella simulacion #################################
    collection.update_one(
        {"_id": id},
        {"$set": {
            "huella": lectura
        }}
    )

def registrarAsistencia(id, documento):
    collection.update_one(
        {"_id": id},
        {"$set": {
            "asistencia": documento["asistencia"] + 1
        }}
    )

def main():
    ventanaInicial()
main()