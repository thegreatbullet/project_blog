from .models import Todo
from .serializers import TodoSerializer
from rest_framework import generics, permissions
from .permissions import IsAuthorOrReadOnly

# Create your views here.


class ListTodo(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveAPIView):
    permissions_classes = IsAuthorOrReadOnly
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
