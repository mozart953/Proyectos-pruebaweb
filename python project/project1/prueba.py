import requests
from bs4 import BeautifulSoup
import os

# Realizamos la solicitud HTTP a la página web
url1= input('Escribir url: ')
#url = 'http://www.repositorio.usac.edu.gt/cgi/search/simple?exp=0%7C1%7C-date%2Fcreators_name%2Ftitle%7Carchive%7C-%7Cq%3A%3AALL%3AIN%3Aingenier%C3%ADa+en+sistemas%7C-%7C&_action_search=1&order=-date%2Fcreators_name%2Ftitle&screen=Search&search_offset=20'
url = url1
page = requests.get(url)

# Analizamos el código HTML con Beautiful Soup
soup = BeautifulSoup(page.content, 'html.parser')

# Buscamos todos los elementos <h2> que contengan el texto 'Noticia'
noticias = soup.find_all('td')

#a para actualizar y w para escribir sin actualizar
#with open('informacion.txt', 'w') as f:
with open('informacion.txt', 'a') as f:

# Imprimimos el título de cada noticia
    for noticia in noticias:
        f.write(noticia.text+'\n')
