from .models import Client, ClientAdmin, TeacherProfile, StudentProfile, AdminClassroomAssignments,AssignTest
from .serializers import ClientSerializers,ClientAdminSerializers, TeacherProfileSerializers, StudentProfileSerializers, AdminClassroomAssignmentsSerializers,AssignTestSerializers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import mixins
from rest_framework import generics
# Create your views here.

class ClientAPIView(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = ClientSerializers
    queryset = Client.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)


class ClientAdminAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = ClientAdminSerializers
    queryset = ClientAdmin.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)



class TeacherProfileAPIVIEW(generics.GenericAPIView,mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin):
    serializer_class = TeacherProfileSerializers
    queryset = TeacherProfile.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)


class StudentProfileAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = StudentProfileSerializers
    queryset = StudentProfile.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)



class AdminClassroomAssignmentsAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = AdminClassroomAssignmentsSerializers
    queryset = AdminClassroomAssignments.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)


class AssignTestAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = AssignTestSerializers
    queryset = AssignTest.objects.all()

    lookup_field ='id'

    def get(self, request , id = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)