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
    owner = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="recipe_owner",)
    created_at = models.DateTimeField(auto_now_add=True,null=True,blank=True,)
