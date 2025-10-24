"""
Script python conexão com o banco
"""
from configs import *
import mysql.connector

def listar_filmes():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM banco_filmes.usuario")
    resultado = cursor.fetchall()
    print("Vamos ver se funciona", resultado)

    for res in resultado:
        id_usuario,nome, email, senha, tipo_usuario = res
        print(id_usuario,nome, email, senha, tipo_usuario)

listar_filmes()

#MÉTODO POST 