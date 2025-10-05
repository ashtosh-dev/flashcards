from django.contrib import admin
from .models import Question

# This line tells the admin site to manage the Question model
admin.site.register(Question)