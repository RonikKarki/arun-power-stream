from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import GalleryImage, Document, ContactMessage, Notice
from .serializers import GalleryImageSerializer, DocumentSerializer, ContactMessageSerializer, NoticeSerializer
from rest_framework.generics import ListAPIView

class GalleryImageList(generics.ListAPIView):
    queryset = GalleryImage.objects.order_by('-uploaded_at')
    serializer_class = GalleryImageSerializer

class DocumentList(generics.ListAPIView):
    serializer_class = DocumentSerializer

    def get_queryset(self):
        queryset = Document.objects.order_by('-uploaded_at')
        doc_type = self.request.query_params.get('type')
        if doc_type in ['financial', 'other']:
            queryset = queryset.filter(doc_type=doc_type)
        return queryset

class LatestDocuments(APIView):
    def get(self, request):
        latest_docs = Document.objects.order_by('-uploaded_at')[:5]
        serializer = DocumentSerializer(latest_docs, many=True)
        return Response(serializer.data)

class ContactMessageCreate(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

class ActiveNoticeView(ListAPIView):
    serializer_class = NoticeSerializer

    def get_queryset(self):
        return Notice.objects.filter(show=True).order_by('-uploaded_at')[:1]
