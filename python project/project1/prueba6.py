import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Establece la URL base y la URL relativa
url_base = 'https://biblos.usac.edu.gt/library'
url_relativa = '/index.php?title=567004&query=@title=Special:GSMSearchPage@process=@titulo=@autor=@subheadings=@keywords=Ingeniería en Ciencias y Sistemas@material=tesis@sortby=sorttitle@mode=&recnum=1'

url = urljoin(url_base, url_relativa)

while True:
    # Descarga la página
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extrae el título de cada artículo
    titulos = soup.find_all('div', class_='marc')

    # Comprueba si la búsqueda ha devuelto resultados
    if titulos:
        # Si la búsqueda ha devuelto resultados, procesa la información
        for titulo in titulos:
            print(titulo.text)
    else:
        # Si la búsqueda no ha devuelto resultados, salta a la siguiente iteración del bucle
        continue

    # Busca el botón "next"
    next_button = soup.find('button', id='next')
    if next_button:
        # Si hay un botón "next", obtiene la URL relativa y la combina con la URL base
        next_link = next_button.find_parent('a')
        if next_link.has_attr('href'):  # Comprueba si el elemento "a" tiene el atributo "href"
            url_relativa = next_link['href']
            url = urljoin(url_base, url_relativa)
        else:
            # Si el elemento "a" no tiene el atributo "href", salta a la siguiente iteración del bucle
            continue
    else:
        # Si no hay un botón "next", termina el bucle
        break
