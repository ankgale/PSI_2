from django.db import models

class Persona(models.Model):
    """Definición del modelo para representar un censo"""
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=128)
    apellido = models.CharField(max_length=128)
    email = models.EmailField()
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} ({self.id})"

    class Meta:
        verbose_name = "Persona"
        verbose_name_plural = "Personas"
        ordering = ["apellido", "nombre"]
