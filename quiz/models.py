from django.db import models

# Create your models here.
class Quiz(models.Model):
    title = models.CharField(max_length=50)
    time = models.IntegerField()
    created_date = models.DateField(auto_now_add=True)
    total_marks = models.PositiveIntegerField()

    def __str__(self):
        return self.title


class Choice(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=200)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(
        Choice, on_delete=models.CASCADE, related_name='answer', blank=True, null=True)
    quiz = models.ForeignKey(
        Quiz, on_delete=models.CASCADE,  related_name='questions', blank=True, null=True)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question


class DataQuestions(models.Model):
    """
    Test info
    """
    test_id = models.CharField(max_length=64, null=True,blank=True)
    test_type = models.CharField(max_length=64, null=True,blank=True)
    test_name = models.CharField(max_length=64, null=True,blank=True)
    description_short = models.CharField(max_length=64, null=True,blank=True)
    description_long = models.CharField(max_length=64, null=True,blank=True)
    skill_covered = models.CharField(max_length=64, null=True,blank=True)
    section_type = models.CharField(max_length=64, null=True,blank=True)
    section_optional = models.CharField(max_length=64, null=True,blank=True)
    section_question_count = models.CharField(max_length=64, null=True,blank=True)
    section_duration = models.CharField(max_length=64, null=True,blank=True)
    subject_category = models.CharField(max_length=64, null=True,blank=True)
    question_num = models.CharField(max_length=64, null=True,blank=True)
    question_complexity = models.CharField(max_length=64, null=True,blank=True)
    question_type = models.CharField(max_length=64, null=True,blank=True)
    question_header = models.CharField(max_length=64, null=True,blank=True)
    question_text = models.CharField(max_length=64, null=True,blank=True)
    question_image =models.CharField(max_length=64, null=True,blank=True)
    answer_type = models.CharField(max_length=64, null=True,blank=True)
    answer_1 = models.CharField(max_length=64, null=True,blank=True)
    answer_2 = models.CharField(max_length=64, null=True,blank=True)
    answer_3 = models.CharField(max_length=64, null=True,blank=True)
    answer_4 =models.CharField(max_length=64, null=True,blank=True)
    correct_answer_key = models.CharField(max_length=64, null=True,blank=True)
    filter_1 =models.CharField(max_length=64, null=True,blank=True)

    def __str__(self):
        return self.test_id


class AnswerBank(models.Model):
    """
    Master Answer Bank
    """
    test_id = models.CharField(max_length=64, null=True,blank=True)
    test_type = models.CharField(max_length=64, null=True,blank=True)
    answer_source_name = models.CharField(max_length=64, null=True,blank=True)
    description_short = models.CharField(max_length=64, null=True,blank=True)
    description_long  = models.CharField(max_length=64, null=True,blank=True)
    question_num = models.CharField(max_length=64, null=True,blank=True)
    question_type = models.CharField(max_length=64, null=True,blank=True)
    subject_category = models.CharField(max_length=64, null=True,blank=True)
    step_1 = models.CharField(max_length=64, null=True,blank=True)
    step_2 = models.CharField(max_length=64, null=True,blank=True)
    Step_3 = models.CharField(max_length=64, null=True,blank=True)
    step_4 = models.CharField(max_length=64, null=True,blank=True)
    step_1_image = models.CharField(max_length=64, null=True,blank=True)
    step_2_image = models.CharField(max_length=64, null=True,blank=True)
    step_3_image = models.CharField(max_length=64, null=True,blank=True)
    step_4_image = models.CharField(max_length=64, null=True,blank=True)
    all_steps = models.CharField(max_length=64, null=True,blank=True)
    all_steps_image = models.CharField(max_length=64, null=True,blank=True)
    steps_video = models.CharField(max_length=64, null=True,blank=True)
    filler_1 = models.CharField(max_length=64, null=True,blank=True)

    def __str__(self):
        return self.test_id