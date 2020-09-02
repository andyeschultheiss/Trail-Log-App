from django.db import models
from django.contrib.auth.models import User


class Trail(models.Model):
    # trail difficulty options
    EASY = 'E'
    MODERATE = 'M'
    DIFFICULT = 'D'
    DIFFICULTY_CHOICES = [
        (EASY, 'Easy'),
        (MODERATE, 'Moderate'),
        (DIFFICULT, 'Difficult'),
    ]

    name = models.CharField(max_length=100, unique=True)
    difficulty = models.CharField(
        max_length=1,
        choices=DIFFICULTY_CHOICES,
        default=EASY,
    )
    length = models.DecimalField(blank=True, decimal_places=1, max_digits=3)
    elevation_change = models.IntegerField(blank=True)
    brief_description = models.CharField(blank=True, max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    oregon_hikers_link = models.URLField(blank=True)
    owner = models.ForeignKey(User, related_name="trails", on_delete=models.CASCADE, null=True)
    # may add in future: strava_link = models.URLField(blank=True)

    


