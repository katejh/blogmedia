from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=25, unique=True)
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
    
class Post(models.Model):
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE)

    def __str__(self):
        return self.text
