from django.db import models

class ProgrammingLanguage(models.Model):
    title = models.CharField(max_length=150, db_index=True)
    rating = models.IntegerField()
    vacancies = models.IntegerField()
    change = models.IntegerField()
    image = models.ImageField(upload_to='images/')