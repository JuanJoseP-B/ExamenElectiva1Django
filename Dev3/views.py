from django.shortcuts import render

def hoja_vida(request):
    return render(request, 'dev3/index.html')