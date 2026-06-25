import MascotaCard from './Mascotas.Card'

function ListaMascotas({ mascotas }) {
  if (!Array.isArray(mascotas)) {
    return null
  }

  return (
    <section
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
      }}
    >
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
    </section>
  )
}

export default ListaMascotas
