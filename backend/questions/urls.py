from django.urls import path
from .views import QuizQuestions

urlpatterns = [
    # This defines the specific API endpoint for the quiz
    path('quiz/<str:topic>/', QuizQuestions.as_view(), name='quiz-questions'),
]