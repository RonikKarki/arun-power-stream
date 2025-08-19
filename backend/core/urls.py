from django.urls import path
from .views import GalleryImageList, DocumentList, LatestDocuments, ContactMessageCreate, ActiveNoticeView

urlpatterns = [
    path('gallery/', GalleryImageList.as_view(), name='gallery-list'),
    path('documents/', DocumentList.as_view(), name='document-list'),
    path('latest-documents/', LatestDocuments.as_view(), name='latest-documents'),
    path('contact/', ContactMessageCreate.as_view(), name='contact-message'),
    path('notice/', ActiveNoticeView.as_view(), name='active-notice'),
]