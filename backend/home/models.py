from django.conf import settings
from django.db import models


class FFFsefe(models.Model):
    "Generated Model"
    dfde = models.BigIntegerField()
    rel_kungshu_1_n = models.ForeignKey(
        "home.Kungshu",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        related_name="fffsefe_rel_kungshu_1_n",
    )


class Kungshu(models.Model):
    "Generated Model"
    asdw = models.BigIntegerField()
    werf = models.CharField(
        max_length=99,
    )
    bft = models.PositiveIntegerField()
    dfntj = models.BinaryField()
    rel_fffsefe_n_n = models.ManyToManyField(
        "home.FFFsefe",
        blank=True,
        related_name="kungshu_rel_fffsefe_n_n",
    )
