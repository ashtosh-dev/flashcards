from django.db import models

class Question(models.Model):
        """
        Represents a single quiz question in the database.
        """
        topic = models.CharField(max_length=100)
        question_text = models.CharField(max_length=255)
        
        # We will store the multiple-choice options as a simple, comma-separated string.
        # For example: "Option A, Option B, Option C, Option D"
        options = models.TextField()
        
        correct_answer = models.CharField(max_length=100)

        def __str__(self):
            """
            Returns a string representation of the question, which is useful for the Django admin panel.
            """
            return f"{self.topic} - {self.question_text}"

        def get_options_list(self):
            """
            A helper method to split the comma-separated string of options into a Python list.
            This will be used by our API to send a clean list to the frontend.
            """
            return [option.strip() for option in self.options.split(',')]
    
