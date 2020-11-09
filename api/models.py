from django.db import models
from django.db import models

# Create your models here.

class Client(models.Model):
        
    ClientName = models.CharField(max_length=265, null=True, blank=True)
    first_name = models.CharField(max_length=64, null=True, blank=True)
    middle_name = models.CharField(max_length=64, null=True, blank=True)
    last_name = models.CharField(max_length=64, null=True, blank=True)
    email = models.CharField(max_length=32, null=True, blank=True)
    mobile = models.CharField(max_length=16, null=True, blank=True)
    persion = models.CharField(max_length=64, null=True, blank=True)
    mobile1 = models.CharField(max_length=16, null=True, blank=True)
    license_key = models.CharField(max_length=256, null=True, blank=True)
    address = models.CharField(max_length=256, null=True, blank=True )
    city = models.CharField(max_length=256, null=True, blank=True)
    state = models.CharField(max_length=256, null=True, blank=True)
    zipcode = models.CharField(max_length=256, null=True, blank=True)
    country = models.CharField(max_length=256, null=True, blank=True)

    def __str__(self):
        return self.ClientName

class ClientAdmin(models.Model):

    Client  = models.ForeignKey(Client , on_delete=models.CASCADE, null=True)
    FirstName = models.CharField(max_length=265, null=True, blank=True)
    LastName = models.CharField(max_length=265, null=True, blank=True)
    Email = models.CharField(max_length=265, null=True, blank=True)
    licence = models.CharField(max_length=265, null=True, blank=True)
    loginEmail = models.CharField(max_length=265, null=True, blank=True)
    password = models.CharField(max_length=265, null=True, blank=True)
    confirm_password = models.CharField(max_length=265, null=True, blank=True)

    def __str__(self):
        return self.FirstName


class TeacherProfile(models.Model):
    # PREFIX = (
    #     ('Dr.','Dr.'),
    #     ('Mr.','Mr.'),
    #     ('Mrs.','Mrs.'),
    #     ('Ms.','Ms')
    # )
    # RELATIONSHIP = (
    #     ('Father','Father'),
    #     ('Mother','Mother'),
    #     ('Relative','Relative '),
    #     ('Friend','Friend')
    # )
    Select_Teacher =  models.CharField(max_length=265, null=True, blank=True)
    Prefix =  models.CharField(max_length=265, null=True, blank=True)
    First_Name =  models.CharField(max_length=265, null=True, blank=True)
    Middle_Name =  models.CharField(max_length=265, null=True, blank=True)
    Last_Name =  models.CharField(max_length=265, null=True, blank=True)
    Email =  models.CharField(max_length=265, null=True, blank=True)
    Mobile =  models.CharField(max_length=265, null=True, blank=True)
    Emergency_Contact_Person1 =  models.CharField(max_length=265, null=True, blank=True)
    Emergency_Mobile1 =  models.CharField(max_length=265, null=True, blank=True)
    Relationship_1 =  models.CharField(max_length=265, null=True, blank=True )
    Emergency_Contact_Person2 =  models.CharField(max_length=265, null=True, blank=True)
    Emergency_Mobile2 =  models.CharField(max_length=265, null=True, blank=True)
    Relationship_2 =  models.CharField(max_length=265, null=True, blank=True)
    Address = models.CharField(max_length=265, null=True, blank=True)
    City =  models.CharField(max_length=265, null=True, blank=True)
    State =  models.CharField(max_length=265, null=True, blank=True)
    Zip_Code =  models.CharField(max_length=265, null=True, blank=True) 
    Country =  models.CharField(max_length=265, null=True, blank=True)
    School_District =  models.CharField(max_length=265, null=True, blank=True)
    Currently_Teaching =  models.CharField(max_length=265, null=True, blank=True) 
    Ap_Classess =  models.CharField(max_length=265, null=True, blank=True)
    Notes_Comments =  models.CharField(max_length=265, null=True, blank=True)
    High_Degree_Completed =  models.CharField(max_length=265, null=True, blank=True)
    Grade_Level =  models.CharField(max_length=265, null=True, blank=True)
    Speciality =  models.CharField(max_length=265, null=True, blank=True)

    def __str__(self):
        return self.Select_Teacher


class StudentProfile(models.Model):
    # PREFIX = (
    #     ('Dr.','Dr.'),
    #     ('Mr.','Mr.'),
    #     ('Mrs.','Mrs.'),
    #     ('Ms.','Ms')
    # )
    # RELATIONSHIP = (
    #     ('Father','Father'),
    #     ('Mother','Mother'),
    #     ('Relative','Relative '),
    #     ('Friend','Friend')
    # )
    Select_Student =  models.CharField(max_length=265, null=True, blank=True)
    Student_First_Name =  models.CharField(max_length=265, null=True, blank=True)
    Student_Middle_Name =  models.CharField(max_length=265, null=True, blank=True)
    Student_Last_Name =  models.CharField(max_length=265, null=True, blank=True)
    Student_Email =  models.CharField(max_length=265, null=True, blank=True)
    Password =  models.CharField(max_length=265, null=True, blank=True)
    Student_Mobile =  models.CharField(max_length=265, null=True, blank=True)
    Emergency_Contact_Person1 =  models.CharField(max_length=265, null=True, blank=True)
    Emergency_Mobile1 =  models.CharField(max_length=265, null=True, blank=True)
    Relationship_1 =  models.CharField(max_length=265, null=True, blank=True )
    Emergency_Contact_Person2 =  models.CharField(max_length=265, null=True, blank=True)
    Emergency_Mobile2 =  models.CharField(max_length=265, null=True, blank=True)
    Relationship_2 =  models.CharField(max_length=265, null=True, blank=True)
    Student_Address = models.CharField(max_length=265, null=True, blank=True)
    City =  models.CharField(max_length=265, null=True, blank=True)
    State =  models.CharField(max_length=265, null=True, blank=True)
    Zip_Code =  models.CharField(max_length=265, null=True, blank=True) 
    Country =  models.CharField(max_length=265, null=True, blank=True)
    gate_student = models.CharField(max_length=265, null=True, blank=True)
    Current_School_Attending =  models.CharField(max_length=265, null=True, blank=True)
    academy_magnet_cbse = models.CharField(max_length=265, null=True, blank=True)
    School_District =  models.CharField(max_length=265, null=True, blank=True)
    Grade_Level =  models.CharField(max_length=265, null=True, blank=True) 
    GAP =  models.CharField(max_length=265, null=True, blank=True)
    Additional_Comments =  models.CharField(max_length=265, null=True, blank=True)
    Enroll_Program =  models.CharField(max_length=265, null=True, blank=True)
    Assign_Teachers =  models.CharField(max_length=265, null=True, blank=True)
    Continuing_Student =  models.CharField(max_length=265, null=True, blank=True)
    Discount_Applied_Code = models.CharField(max_length=265, null=True, blank=True)
    Exit_Program = models.CharField(max_length=265, null=True, blank=True)
    Exit_Comments = models.CharField(max_length=265, null=True, blank=True)

    def __str__(self):
        return self.Select_Student

class AdminClassroomAssignments(models.Model):
    Select_Teacher =models.CharField(max_length=265, null=True, blank=True)
    Courses_Taught = models.CharField(max_length=265, null=True, blank=True)
    Select_Students = models.CharField(max_length=265, null=True, blank=True)

    def __str__(self):
        return self.Select_Teacher



