from django.shortcuts import render


def home(request):

    fruitinhass = ['banana', 'laranja', 'morango', 'uva']

    return render(
        request,
        'home.html',
    )
       