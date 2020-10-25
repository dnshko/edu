from django.contrib import admin
from .models import Client, ClientAdmin, TeacherProfile, StudentProfile, AdminClassroomAssignments
# Register your models here.

admin.site.register(Client)
admin.site.register(ClientAdmin)
admin.site.register(TeacherProfile)
admin.site.register(StudentProfile)
admin.site.register(AdminClassroomAssignments)
