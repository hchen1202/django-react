from django.db import models

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
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
        validators=[
            validators.RegexValidator(
                r'^[\w.@+-]+$',
                _('Enter a valid username. This value may contain only letters, numbers and @/./+/-/_ characters.'),
                'invalid'
            ),
        ],
        error_messages={
            'unique': _("A user with that username already exists."),
        }
    )

    email = models.EmailField(_('Email address'), unique=True)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default=GENDER_MALE)

    confirmed_email = models.BooleanField(default=False)

    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this admin site.')
    )

    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_('Designates whether this user should be treated as active. '
                    'Unselect this instead of deleting accounts.')
    )

