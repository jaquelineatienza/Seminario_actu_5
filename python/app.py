

userPhones = []
users = [[ "juan","perez",34543534,["julio"],[233435]]]
userKids = []

def  addKids():
    while True:
        children  = str(input("ingrese el nombre de su hijo"));
        moreKids = str(input('¿Desea ingresar otro hijo?')).lower().strip() 
        userKids.append(children)
        if moreKids == "no":
            break
def  addPhones():
    while True:
        phone = int(input('ingrese su numero de telefono'))
        asnwer = str(input('¿Desea ingresar otro numero de telefono?')).lower().strip() 
        userPhones.append(phone)
        if asnwer == "no":
            break
def addDate():
    global users 
    user = []
    name = str(input('ingrese su nombre'))
    lastName = str(input('ingrese su nombre'))
    dni = int(input('ingrese su dni'))
    addKids()
    addPhones()
    user += [name, lastName, dni, userPhones, userKids]
    users.append(users)
    print(user)
def dni_filtrado():
    global users 
    encontrado = False
    dni_filtro = int(input('ingrese el dni a buscar'))
    for usuario in users:
        if usuario[2] == dni_filtro:
            encontrado = True
            print(f'Usuario encontrado: {usuario}')
            break  
    if not encontrado:
        print('Usuario no encontrado')



while True:
    opcion = int(input("""1. Ingresar una nueva persona
2. Mostrar todos los datos
3. Filtrar por DNI
4. Salir del programa
Seleccione una opción:(solo numeros)"""))
    def menu(opcion):
            match opcion :
                case 1:
                    addDate()
                case 2:
                    print(users)
                case 3:
                    dni_filtrado()
    
    menu(opcion)
    if opcion == 4 :
        print("Saliendo del sistema")
        break



        