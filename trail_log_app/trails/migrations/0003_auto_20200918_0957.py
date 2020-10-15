# Generated by Django 3.0.5 on 2020-09-18 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trails', '0002_trail_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trail',
            name='difficulty',
            field=models.CharField(choices=[('E', 'Easy'), ('M', 'Moderate'), ('D', 'Difficult')], default='E', max_length=10),
        ),
    ]