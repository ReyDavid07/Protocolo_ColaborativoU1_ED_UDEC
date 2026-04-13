import random

# ============================================================
#   PARTE 1 - ARREGLOS
# ============================================================

print("=" * 50)
print("        PARTE 1 - ARREGLOS")
print("=" * 50)

# ------------------------------------------------------------
# 1. Declaración e inicialización con valores aleatorios
# ------------------------------------------------------------
arreglo = [random.randint(1, 100) for _ in range(10)]
print("\n[1] Arreglo inicial:")
print(arreglo)

# ------------------------------------------------------------
# 2. Recorrido
# ------------------------------------------------------------
print("\n[2a] Recorrido con for clásico:")
for i in range(len(arreglo)):
    print(f"  arreglo[{i}] = {arreglo[i]}")

print("\n[2b] Recorrido con for-each:")
for valor in arreglo:
    print(f"  {valor}", end=" ")
print()

# ------------------------------------------------------------
# 3. Modificación
# ------------------------------------------------------------

# Cambiar impares por cero
print("\n[3a] Cambiar valores impares por cero:")
for i in range(len(arreglo)):
    if arreglo[i] % 2 != 0:
        arreglo[i] = 0
print(arreglo)

# Multiplicar cada valor por su índice
print("\n[3b] Multiplicar cada valor por su índice:")
for i in range(len(arreglo)):
    arreglo[i] = arreglo[i] * i
print(arreglo)

# ------------------------------------------------------------
# 4. Búsqueda lineal
# ------------------------------------------------------------
def busqueda_lineal(arreglo, valor):
    for i in range(len(arreglo)):
        if arreglo[i] == valor:
            return i   # retorna el índice donde se encontró
    return -1          # -1 si no se encontró

print("\n[4] Búsqueda lineal del valor 0:")
indice = busqueda_lineal(arreglo, 0)
if indice != -1:
    print(f"  Valor encontrado en el índice {indice}")
else:
    print("  Valor no encontrado")

# ------------------------------------------------------------
# 5. Comparativa (Python vs Java)
# ------------------------------------------------------------
print("\n[5] Comparativa Python vs Java:")
print("  - Python es de tipado dinámico: no se declara el tipo de cada variable.")
print("  - Java es de tipado estático: se debe declarar int[], String[], etc.")
print("  - En Python los arreglos (listas) son dinámicos: pueden cambiar de tamaño.")
print("  - En Java los arreglos tienen tamaño fijo al momento de crearlos.")
print("  - Python usa índices negativos: arreglo[-1] es el último elemento.")
print("  - En Java no existe indexación negativa.")


# ============================================================
#   PARTE 2 - MATRICES
# ============================================================

print("\n" + "=" * 50)
print("        PARTE 2 - MATRICES")
print("=" * 50)

# ------------------------------------------------------------
# 1. Declaración e inicialización (3x3, valores del 1 al 9)
# ------------------------------------------------------------
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print("\n[1] Matriz inicial:")
for fila in matriz:
    print(" ", fila)

# ------------------------------------------------------------
# 2. Recorrido
# ------------------------------------------------------------
print("\n[2a] Imprimir en forma de tabla (por filas):")
for fila in matriz:
    for valor in fila:
        print(f"{valor:3}", end="")
    print()

print("\n[2b] Recorrido por columnas:")
for col in range(3):
    for fila in range(3):
        print(f"{matriz[fila][col]:3}", end="")
    print()

# ------------------------------------------------------------
# 3. Operaciones
# ------------------------------------------------------------

# Sumar todos los elementos
total = 0
for fila in matriz:
    for valor in fila:
        total += valor
print(f"\n[3a] Suma de todos los elementos: {total}")

# Intercambiar primera fila con la última
matriz[0], matriz[2] = matriz[2], matriz[0]
print("\n[3b] Matriz después de intercambiar fila 0 con fila 2:")
for fila in matriz:
    for valor in fila:
        print(f"{valor:3}", end="")
    print()
