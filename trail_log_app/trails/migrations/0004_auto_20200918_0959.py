# Generated by Django 3.0.5 on 2020-09-18 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trails', '0003_auto_20200918_0957'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trail',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]