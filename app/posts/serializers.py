from rest_framework import serializers
from rest_framework.relations import StringRelatedField
from .models import Post, User

class PostSerializer(serializers.ModelSerializer):
    author = StringRelatedField()
    class Meta:
        model = Post
        fields = (
            'id',
            'text',
            'created_at',
            'author',
        )

class UserSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'join_date',
            'posts',
        )
