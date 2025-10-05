from rest_framework import serializers
from .models import Question

class QuestionSerializer(serializers.ModelSerializer):
    # This tells the serializer to use our custom method to get the options
    options = serializers.SerializerMethodField()

    class Meta:
        model = Question
        # These are the fields that will be sent to the frontend
        fields = ['id', 'question_text', 'options', 'correct_answer']

    def get_options(self, obj):
        # This calls the get_options_list function from your models.py
        return obj.get_options_list()