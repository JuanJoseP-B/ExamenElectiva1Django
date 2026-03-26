from django.shortcuts import render

def hoja_vida(request):
    return render(request, 'dev4/index.html')