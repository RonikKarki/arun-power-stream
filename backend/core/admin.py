from django.contrib import admin
from .models import GalleryImage, Document, ContactMessage, Notice

admin.site.register(GalleryImage)
admin.site.register(Document)
admin.site.register(ContactMessage)
admin.site.register(Notice)
