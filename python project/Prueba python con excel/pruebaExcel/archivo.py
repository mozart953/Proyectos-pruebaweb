import openpyxl

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

def calcular_factorial_y_guardar_en_excel(numero, nombre_archivo, hoja, celda_resultado):
    try:
        resultado = factorial(numero)

        # Cargar el archivo de Excel
        wb = openpyxl.load_workbook(nombre_archivo)
        sheet = wb[hoja]

        # Escribir el resultado en la celda indicada
        sheet[celda_resultado].value = resultado

        # Guardar los cambios en el archivo
        wb.save(nombre_archivo)
        wb.close()

        print(f"El factorial de {numero} es {resultado} y se ha guardado en la celda {celda_resultado} de {hoja} en {nombre_archivo}.")

    except Exception as e:
        print(f"Se produjo un error al calcular el factorial o guardar en Excel: {str(e)}")

# Ejemplo de uso
numero_a_calcular = 5
nombre_archivo_excel = "balance.xlsx"
nombre_hoja = "Sheet1"
celda_resultado_factorial = "C5"

calcular_factorial_y_guardar_en_excel(numero_a_calcular, nombre_archivo_excel, nombre_hoja, celda_resultado_factorial)
