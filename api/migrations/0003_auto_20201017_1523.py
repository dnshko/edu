# Generated by Django 3.1.2 on 2020-10-17 09:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201009_2104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientadmin',
            name='Client',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.client'),
        ),
    ]