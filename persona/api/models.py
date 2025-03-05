from django.db import models

class Persona(models.Model):
    """Definición del modelo para representar un censo"""
    id = models.CharField(max_length=9, primary_key=True)
    nombre = models.CharField(max_length=128)
    apellido = models.CharField(max_length=128)
    email = models.EmailField()

##HACER STR Y META
