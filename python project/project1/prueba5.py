import requests
from bs4 import BeautifulSoup

# URL de la primera página
url = 'https://biblos.usac.edu.gt/library/index.php?title=578481&query=@title=Special:GSMSearchPage@process=@titulo=@autor=@subheadings=@keywords=Ingenier%C3%ADa%20en%20Ciencias%20y%20Sistemas@material=tesis@sortby=sorttitle@mode=&recnum=2'

# Bucle while para avanzar de página en página
while True:
  # Realizamos la solicitud HTTP a la página web
  page = requests.get(url)

  # Analizamos el código HTML con Beautiful Soup
  soup = BeautifulSoup(page.content, 'html.parser')

  # Buscamos todos los elementos <p>
  parrafos = soup.find('div', class_='marc')

  # Recorremos cada elemento <p> y mostramos su contenido
  for parrafo in parrafos:
    print(parrafo.text)

  # Buscamos el enlace a la página siguiente
  #siguiente_pagina = soup.find('span', class_='ep_search_control').find('a', string='Siguiente')
  siguiente_pagina = soup.find('button', id='next')
  #siguiente_pagina = soup.find('span', string='siguiente').find('a')
  #siguiente_pagina = soup.find('a', string='Siguiente')

  # Si no encontramos el enlace, significa que estamos en la última página
  # y salimos del bucle
  if siguiente_pagina is None:
    break

  # Si encontramos el enlace, actualizamos la URL de la página a la que apunta
  # y continuamos con el bucle
  url = siguiente_pagina['href']
