# Generated by Django 4.1.6 on 2023-05-14 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Skinhub', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='slug',
            field=models.SlugField(blank=True, max_length=200, null=True),
        ),
    ]