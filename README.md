# 3-Async Storage
Settings: usamos async storage para guardar un dato.
native no es un browser: para poder utilizar localStorage o sessionStorage, u otro elementos particulares del browser es necesario instalar librerias adicionales.
"@react-native-async-storage/async-storage"


# 2-Environment

app.json -> app.config.js: para poder configurar los extras.
setting.js: inicializa la configuracion.
api.js: usa la configuracion de ambiente cargada.
axios: ver que la ip a usar para localhost
segun si es emulador o dispositivo.
Profile.js: se carga con el usuario 2 usando axios, que es pasado como route param por navigation.

# 1-Navigation

App.js: StackNavigation, ver uso de navigation en cada componente.
Profile.js: SafeView para que solo se pinte
