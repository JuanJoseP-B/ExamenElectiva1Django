from django.shortcuts import render

def hoja_vida(request):
    return render(request, 'dev2/index.html')
