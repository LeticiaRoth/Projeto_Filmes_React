"""
Script Python de autenticação dos usuários
"""

import secrets
import hashlib
import database as db

sessions = {}

def hash_password(password):
    return hashlib.md5(password.encode('utf-8')).hexdigest()

def verify_password(plain_password, password_from_db):
    return hash_password(plain_password) == password_from_db

def handle_login(email, password):
    print(f"Tentativa de login para: {email}")
    user = db.fetch_one("SELECT * FROM usuario WHERE email = %s", (email,))

    if user and verify_password(password, user['senha']):
        token = secrets.token_hex(20)

        sessions[token] = {
            'id_usuario': user['id_usuario'],
            'nome': user['nome'],
            'tipo_usuario': user['tipo_usuario']
        }

        print(f"Usuário {user['nome']} logado com sucesso.")
        return {'token': token, 'user_type': user['tipo_usuario']}
    
    else:
        print(f"Falha no login de {email}")
        return None

def get_user_from_token(auth_header):
    if not auth_header or not auth_header.startswith('Bearer '):
        return None
    
    token = auth_header.split(' ')[1]
    user_data = sessions.get(token)
    return user_data
