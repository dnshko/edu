# Generated by Django 3.1.2 on 2020-10-31 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20201017_1523'),
    ]

    operations = [
        migrations.AddField(
            model_name='clientadmin',
            name='confirm_password',
            field=models.CharField(blank=True, max_length=265, null=True),
        ),
    ]
