from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        "message": "Welcome to the Octofit API!",
        "url": "https://humble-fiesta-jjvx44g9ggg3pwx4-8000.app.github.dev"
    })