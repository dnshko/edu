# Generated by Django 2.2.10 on 2020-11-20 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_auto_20200626_1005'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnswerBank',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test_id', models.IntegerField(blank=True, null=True)),
                ('test_type', models.IntegerField(blank=True, null=True)),
                ('answer_source_name', models.CharField(max_length=64)),
                ('description_short', models.CharField(max_length=64)),
                ('description_long', models.CharField(max_length=64)),
                ('question_num', models.IntegerField(blank=True, null=True)),
                ('question_type', models.IntegerField(blank=True, null=True)),
                ('subject_category', models.IntegerField(blank=True, null=True)),
                ('Step_3', models.CharField(max_length=64)),
                ('step_4', models.CharField(max_length=64)),
                ('step_1', models.CharField(max_length=64)),
                ('step_2', models.CharField(max_length=64)),
                ('step_3_image', models.CharField(max_length=64)),
                ('step_4_image', models.CharField(max_length=64)),
                ('all_steps', models.CharField(max_length=64)),
                ('all_steps_image', models.CharField(max_length=64)),
                ('steps_steps_video', models.CharField(max_length=64)),
                ('steps_video', models.CharField(max_length=64)),
                ('filler_1', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='DataQuestions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test_id', models.IntegerField(blank=True, null=True)),
                ('test_type', models.IntegerField(blank=True, null=True)),
                ('test_name', models.CharField(max_length=64)),
                ('description_short', models.CharField(max_length=64)),
                ('description_longh', models.CharField(max_length=64)),
                ('skill_covered', models.CharField(max_length=64)),
                ('section_type', models.IntegerField(blank=True, null=True)),
                ('section_optional_count', models.IntegerField(blank=True, null=True)),
                ('section_duration', models.CharField(max_length=64)),
                ('subject_category', models.IntegerField(blank=True, null=True)),
                ('question_num', models.IntegerField(blank=True, null=True)),
                ('question_complexity', models.IntegerField(blank=True, null=True)),
                ('question_type', models.IntegerField(blank=True, null=True)),
                ('question_header', models.CharField(max_length=64)),
                ('question_text', models.CharField(max_length=64)),
                ('question_image', models.CharField(max_length=64)),
                ('answer_type', models.IntegerField(blank=True, null=True)),
                ('answer_1', models.CharField(max_length=64)),
                ('answer_2', models.CharField(max_length=64)),
                ('answer_3', models.CharField(max_length=64)),
                ('answer_4', models.CharField(max_length=64)),
                ('correct_answer_key', models.IntegerField(blank=True, null=True)),
                ('filter_1', models.CharField(max_length=64)),
            ],
        ),
    ]
