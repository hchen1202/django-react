import uuid

from datetime import timedelta

from django.db import models

from django.utils import timezone

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from django.utils.translation import ugettext_lazy as _

# Create your models here.

class User(AbstractBaseUser):
    """
    Model that represents an user.
    To be active, the user must register and confirm his email.
    """

    GENDER_MALE = 'M'
    GENDER_FEMALE = 'F'
    GENDER_CHOICES = (
        (GENDER_MALE, 'Male'),
        (GENDER_FEMALE, 'Female')
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    username = models.CharField(
        _('username'),
        max_length=30,
        unique=True,
        help_text=_('Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        error_messages={
            'unique': _("A user with that username already exists."),
        }
    )

    email = models.EmailField(_('Email address'), unique=True)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default=GENDER_MALE)

    # A string describing the name of the field on the user model that is used as the unique identifier. 
    USERNAME_FIELD = 'email'

