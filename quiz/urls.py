from django.urls import path
from .views import QuizListAPIView, QuizRetrieveAPIView, QuizCreateAPIView
urlpatterns = [
    path('', QuizListAPIView.as_view()),
     path('quiz/', QuizListAPIView.as_view()),
    path('quiz/<int:pk>', QuizRetrieveAPIView.as_view()),
    path('create', QuizCreateAPIView.as_view()),
]
