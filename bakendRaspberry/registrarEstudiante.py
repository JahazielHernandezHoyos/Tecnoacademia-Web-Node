from turtle import clear
from pymongo import MongoClient
import tkinter as tk
from os import system

#crear ventana tkinter con dos label y un boton de enviar
def registrarEstudiante():
    #crear ventana
    ventana = tk.Tk()
    ventana.title("Registrar Estudiante")
    ventana.geometry("640x480")
    #crear label
    tiLabel = tk.Label(ventana, text="T.I: ")
    tiEntry = tk.Entry(ventana)
    tiLabel.grid(row=0, column=0)
    tiEntry.grid(row=0, column=1)
    
    #crear boton
    boton = tk.Button(ventana, text="Enviar", command=lambda: registrar(tiEntry.get()))
    #posicionar boton
    boton.grid(row=5, column=1)
    #ejecutar ventana
    system("cls")
    ventana.mainloop()
    

def registrar(ti):
    client = MongoClient("mongodb+srv://tecnoacademiaADMIN:bBTWBBnFDG2aReok@tecnoacademia.mjfzz.mongodb.net/estudiantes?retryWrites=true&w=majority") #conecta con la base de datos en la nube
    baseDeDatos = client["Tecnoacademia"] #Selecciona la base de datos
    collection = baseDeDatos["estudiantes"] #Selecciona la coleccion
    for documento in collection.find({
        "ti": ti
    }):
        system("cls")
        print(documento)
        print("Estudiante ya registrado")
        break
    else:
        system("cls")
        print("el estudiante no esta en la base de datos")

# collection.insert_one({ 
#     "nombre": "Juan Perez", 
#     "ti": 1126912183,
#     "huella": 13,
#     }) 



def main():
    registrarEstudiante()
main()