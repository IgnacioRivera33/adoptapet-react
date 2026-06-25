Componente
Donde se usaria: App para la pagina general y MascotaCard para cada tarjeta de animal
Por que es adecuado: Permite dividir la interfaz en partes claras

JSX
Donde se usaria: Dentro de cada componente para escribir la estructura visual
Por que es adecuado: Es la forma natural de describir la UI en react, mezclando HTML con javascript.

Props
Donde se usaria: Permiten pasar datos desde app hacia MascotaCard
Por que es adecuado: Es ideal porque los datos fluyen de forma clara y el componente hijo puede mostrarlos

Estado
Donde se usaria: Guardar la lista de mascotas o un filtro como "solo urgentes"
Por que es adecuado: Se usa cuando la información debe cambiar durante la interacción del usuario y React debe volver a renderizar la vista.

Renderizado de listas
Donde se usaria: Muestra todas las mascotas con .map() 
Por que es adecuado: Es la solucion para mostrar colleciones de datos como este tipo de listas.

Renderizado condicional
Donde se usaria: Al mostrar un badge urgente o un mensaje de advertencia
Por que es adecuado: Porque permite cambiar la UI segun una condicion.