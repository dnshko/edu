from django.urls import path
from .views import  ClientAPIView,ClientAdminAPIVIEW,TeacherProfileAPIVIEW,StudentProfileAPIVIEW,AdminClassroomAssignmentsAPIVIEW

urlpatterns = [
    path('client/', ClientAPIView.as_view()),
    path('client/<int:id>/', ClientAPIView.as_view()),
    
    path('clientadmin/', ClientAdminAPIVIEW.as_view()),
    path('clientadmin/<int:id>/', ClientAdminAPIVIEW.as_view()),
    
    path('student/', StudentProfileAPIVIEW.as_view()),
    path('student/<int:id>/', StudentProfileAPIVIEW.as_view()),
    
    path('teacher/', TeacherProfileAPIVIEW.as_view()),
    path('teacher/<int:id>/', TeacherProfileAPIVIEW.as_view()),
    
    path('classroom/', AdminClassroomAssignmentsAPIVIEW.as_view()),
    path('classroom/<int:id>/', AdminClassroomAssignmentsAPIVIEW.as_view())
]