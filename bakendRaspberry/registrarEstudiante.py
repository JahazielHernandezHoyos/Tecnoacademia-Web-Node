from turtle import clear
from pymongo import MongoClient
import tkinter as tk
from os import system

#simulacion entrada de huella
gx_ref_buffer = ""

#conectar a la base de datos
client = MongoClient("mongodb+srv://tecnoacademiaADMIN:bBTWBBnFDG2aReok@tecnoacademia.mjfzz.mongodb.net/estudiantes?retryWrites=true&w=majority") 
baseDeDatos = client["Tecnoacademia"] #Selecciona la base de datos
collection = baseDeDatos["estudiantes"] #Selecciona la coleccion

#crear ventana tkinter con dos label y un boton de enviar
ventana = tk.Tk()
ventana.title("Registrar Estudiante")
ventana.geometry("640x480")

def registrarEstudiante():
    #crear label
    tiLabel = tk.Label(ventana, text="T.I: ")
    tiEntry = tk.Entry(ventana)
    tiLabel.grid(row=0, column=0)
    tiEntry.grid(row=0, column=1)
    
    #crear boton enviar ti
    boton = tk.Button(ventana, text="Verificar TI", command=lambda: Validar(tiEntry.get()))
    boton.grid(row=5, column=1)

    #crear boton registrar asistencia
    boton = tk.Button(ventana, text="Enviar asistencia", command=lambda: Validar(gx_ref_buffer.get()))
    boton.grid(row=5, column=2)

    #vaciar consola
    system("cls")
    ventana.mainloop()


def Validar(ti):

    for documento in collection.find({
        "ti": ti
    }):
        system("cls")
        if documento["huella"] == "":
            actualizarRegistro(documento["_id"], documento)
        else:
            tk.messagebox.showinfo("Asistencia", "Bienvenido " + documento["nombre"] + " Ingresa tu huella con el dedo indice para registrar tu asistencia")
        break
    else:
        system("cls")
        tk.messagebox.showerror("ERROR", "El estudiante no esta en la base de datos")

    
def actualizarRegistro(id, documento):
    tk.messagebox.showinfo("Registro de huella", "Bienvenido " + documento["nombre"] + " ingresa tu huella con el dedo indice para registrarte en la Base de datos") 
    huella = gx_ref_buffer #capturar la huella simulacion #################################
    collection.update_one(
        {"_id": id},
        {"$set": {
            "huella": huella
        }}
    )

def registrarAsistencia(id, documento):
    collection.update_one(
        {"_id": id},
        {"$set": {
            "Asistencias": documento["Asistencias"] + 1
        }}
    )

def main():
    registrarEstudiante()
main()