from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    instructions = models.TextField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    rating = models.IntegerField()
    image = models.CharField(max_length=256,)
class Chef(models.Model):
    'Generated Model'
    profile_image = models.CharField(max_length=256,)
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="chef_user",)
