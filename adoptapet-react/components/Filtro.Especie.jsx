function FiltroEspecie({ especieSeleccionada, onCambiarEspecie, busqueda, onCambiarBusqueda }) {
  const opciones = ['Todos', 'Perro', 'Gato', 'Otro']

  return (
    <section style={{ marginBottom: '24px' }}>
      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="busquedaMascota" style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>
          Buscar por nombre
        </label>
        <input
          id="busquedaMascota"
          type="text"
          value={busqueda}
          onChange={onCambiarBusqueda}
          placeholder="Ej. Luna"
          maxLength={20}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {opciones.map((opcion) => {
          const activo = especieSeleccionada === opcion
          return (
            <button
              key={opcion}
              type="button"
              onClick={() => onCambiarEspecie(opcion)}
              style={{
                padding: '8px 12px',
                borderRadius: '999px',
                border: activo ? '1px solid #2563eb' : '1px solid #cbd5e1',
                background: activo ? '#2563eb' : '#fff',
                color: activo ? '#fff' : '#334155',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {opcion}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default FiltroEspecie
