import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup

contador = 1

url_base = 'http://www.repositorio.usac.edu.gt'

if contador == 0:
    contador =2
    url_relativa = 'cgi/search/simple?exp=0|1|-date%2Fcreators_name%2Ftitle|archive|-|q%3A%3AALL%3AIN%3Aingeniería+en+sistemas|-|&_action_search=1&order=-date%2Fcreators_name%2Ftitle&screen=Search&search_offset=0'


url = urljoin(url_base, url_relativa)

while True:
    # Descarga la página
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extrae la información de la página
    informacion = soup.find_all('td')

    # Procesa la información
    for dato in informacion:
        print(dato.text)

    # Busca el enlace a la página siguiente
    siguiente_pagina = soup.find('span', class_='ep_search_control').find('a', string='Siguiente')
    if siguiente_pagina:
        # Si hay un enlace a la página siguiente, obtiene la URL relativa y la combina con la URL base
        url = urljoin(url_base, siguiente_pagina['href'])
 
        
