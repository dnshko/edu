from rest_framework import serializers
from .models import Client, ClientAdmin, TeacherProfile, StudentProfile, AdminClassroomAssignments


class ClientSerializers(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class ClientAdminSerializers(serializers.ModelSerializer):
    class Meta:
        model = ClientAdmin
        fields = '__all__'


class TeacherProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = '__all__'


class StudentProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'


class AdminClassroomAssignmentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = AdminClassroomAssignments
        fields = '__all__'

