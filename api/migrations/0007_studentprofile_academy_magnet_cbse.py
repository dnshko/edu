# Generated by Django 3.1.2 on 2020-11-02 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20201103_0319'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentprofile',
            name='academy_magnet_cbse',
            field=models.CharField(blank=True, max_length=265, null=True),
        ),
    ]
