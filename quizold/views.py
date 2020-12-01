from django.shortcuts import render
from .serializers import QuizListSerializer, QuizSerializer, DataQuestionsSerializer, AnswerBankSerializer
from .models import Quiz,DataQuestions,AnswerBank
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_200_OK
)
from rest_framework import mixins
from rest_framework import generics
# Create your views here.
class QuizListAPIView(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = QuizListSerializer
    queryset = Quiz.objects.all()

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

class QuizRetrieveAPIView(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()
    lookup_field ='pk'

    def get(self, request , pk = None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    
    def post(self, request):
        return self.create(request)

    def put(self, request, pk=None):
        return self.update(request, pk)
    
    def delete(self, request, pk):
        return self.destroy(request, pk)

class QuizCreateAPIView (CreateAPIView):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()

    def post(self, request):
        serializer = QuizSerializer(data=request.data)
        if serializer.is_valid():
            quiz = serializer.create(request)
            if quiz:
                return Response(data={"data": quiz.id}, status=HTTP_201_CREATED)
        print(serializer.error)
        return Response(status=HTTP_400_BAD_REQUEST)



class DataQuestionsAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = DataQuestionsSerializer
    queryset = DataQuestions.objects.all()

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


class AnswerBankAPIVIEW(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    serializer_class = AnswerBankSerializer
    queryset = AnswerBank.objects.all()

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