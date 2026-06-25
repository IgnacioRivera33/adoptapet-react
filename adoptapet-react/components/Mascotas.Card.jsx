function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas, adopcionUrgente }) {
  const especieKey = (especie || '').toLowerCase()

  const estilosPorEspecie = {
    perro: {
      etiqueta: 'Perro',
      fondo: '#e8f5e9',
      borde: '#43a047',
      texto: '#1b5e20',
      acento: '#66bb6a'
    },
    gato: {
      etiqueta: 'Gato',
      fondo: '#f3e5f5',
      borde: '#8e24aa',
      texto: '#4a148c',
      acento: '#ba68c8'
    },
    otro: {
      etiqueta: 'Otra especie',
      fondo: '#e3f2fd',
      borde: '#1e88e5',
      texto: '#0d47a1',
      acento: '#64b5f6'
    }
  }

  const estilo = estilosPorEspecie[especieKey] || estilosPorEspecie.otro
  const listaCaracteristicas = Array.isArray(caracteristicas)
    ? caracteristicas
    : typeof caracteristicas === 'string' && caracteristicas.trim()
      ? caracteristicas.split(',').map((item) => item.trim()).filter(Boolean)
      : []

  return (
    <article
      style={{
        border: `2px solid ${adopcionUrgente ? '#dc2626' : estilo.borde}`,
        borderRadius: '16px',
        padding: '16px',
        boxShadow: adopcionUrgente ? '0 10px 24px rgba(220, 38, 38, 0.2)' : '0 8px 20px rgba(0,0,0,0.08)',
        background: adopcionUrgente ? '#fff7ed' : '#fff',
        maxWidth: '360px',
        margin: '16px auto',
        position: 'relative'
      }}
    >
      {adopcionUrgente && (
        <span
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#dc2626',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: '700'
          }}
        >
          Adopción urgente
        </span>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{nombre}</h3>
        <span
          style={{
            background: estilo.fondo,
            color: estilo.texto,
            border: `1px solid ${estilo.borde}`,
            borderRadius: '999px',
            padding: '4px 10px',
            fontSize: '0.85rem',
            fontWeight: '700'
          }}
        >
          {estilo.etiqueta}
        </span>
      </div>

      <p style={{ margin: '4px 0', color: '#555' }}>{descripcion}</p>

      <div style={{ display: 'grid', gap: '6px', margin: '12px 0' }}>
        <div><strong>Especie:</strong> {especie || 'No registrada'}</div>
        <div><strong>Raza:</strong> {raza || 'No registrada'}</div>
        <div><strong>Edad:</strong> {edad || 'No registrada'}</div>
      </div>

      {listaCaracteristicas.length > 0 && (
        <div>
          <strong>Características:</strong>
          <ul style={{ margin: '8px 0 0 18px', padding: 0 }}>
            {listaCaracteristicas.map((caracteristica, index) => (
              <li key={`${caracteristica}-${index}`} style={{ marginBottom: '4px' }}>
                {caracteristica}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default MascotaCard
