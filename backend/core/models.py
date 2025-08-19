from django.db import models

# Create your models here.

class GalleryImage(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='gallery/')
    category = models.CharField(max_length=100, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Document(models.Model):
    TYPE_CHOICES = (
        ('financial', 'Financial'),
        ('other', 'Other'),
    )
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='documents/')
    doc_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.subject}"

class Notice(models.Model):
    NOTICE_TYPE_CHOICES = (
        ('image', 'Image'),
        ('pdf', 'PDF'),
    )
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='notices/')
    notice_type = models.CharField(max_length=10, choices=NOTICE_TYPE_CHOICES)
    show = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
