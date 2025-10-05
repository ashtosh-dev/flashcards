from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Question
from .serializers import QuestionSerializer

class QuizQuestions(APIView):
    # This function handles GET requests from the frontend
    def get(self, request, topic, format=None):
        # It finds 10 random questions that match the requested topic
        questions = Question.objects.filter(topic__iexact=topic).order_by('?')[:10]

        # If no questions are found, it sends an error message
        if not questions.exists():
            return Response({"error": "No questions found for this topic"}, status=404)

        # It converts the questions into JSON and sends them to the frontend
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)