import requests
from bs4 import BeautifulSoup

# URL de la primera página
url = 'http://www.repositorio.usac.edu.gt/cgi/search/simple?exp=0%7C1%7C-date%2Fcreators_name%2Ftitle%7Carchive%7C-%7Cq%3A%3AALL%3AIN%3Aingenier%C3%ADa+en+sistemas%7C-%7C&_action_search=1&order=-date%2Fcreators_name%2Ftitle&screen=Search&search_offset=0'

# Bucle while para avanzar de página en página
while True:
  # Realizamos la solicitud HTTP a la página web
  page = requests.get(url)

  # Analizamos el código HTML con Beautiful Soup
  soup = BeautifulSoup(page.content, 'html.parser')

  # Buscamos todos los elementos <p>
  parrafos = soup.find_all('td')

  # Recorremos cada elemento <p> y mostramos su contenido
  for parrafo in parrafos:
    print(parrafo.text)

  # Buscamos el enlace a la página siguiente
  #siguiente_pagina = soup.find('span', class_='ep_search_control').find('a', string='Siguiente')
  siguiente_pagina = soup.find('span', class_='ep_search_control').find('a')
  #siguiente_pagina = soup.find('span', string='siguiente').find('a')
  #siguiente_pagina = soup.find('a', string='Siguiente')

  # Si no encontramos el enlace, significa que estamos en la última página
  # y salimos del bucle
  if siguiente_pagina is None:
    break

  # Si encontramos el enlace, actualizamos la URL de la página a la que apunta
  # y continuamos con el bucle
  url = siguiente_pagina['href']
