import { useState } from 'react'
import './App.css'
import ListaMascotas from '../components/Lista.Mascotas'
import FiltroEspecie from '../components/Filtro.Especie'
import { mascotas } from '../data/mascotas'

function App() {
  const [especieSeleccionada, setEspecieSeleccionada] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const handleBusquedaChange = (event) => {
    const valor = event.target.value
    const textoNormalizado = valor.trim().slice(0, 20)
    setBusqueda(textoNormalizado)
  }

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      especieSeleccionada === 'Todos' ||
      mascota.especie.toLowerCase() === especieSeleccionada.toLowerCase()

    const textoBusqueda = busqueda.toLowerCase()
    const coincideNombre =
      textoBusqueda === '' || mascota.nombre.toLowerCase().includes(textoBusqueda)

    return coincideEspecie && coincideNombre
  })

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>Mascotas en adopción</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        Directorio digital interactivo del refugio
      </p>

      <FiltroEspecie
        especieSeleccionada={especieSeleccionada}
        onCambiarEspecie={setEspecieSeleccionada}
        busqueda={busqueda}
        onCambiarBusqueda={handleBusquedaChange}
      />

      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '24px' }}>
          No hay mascotas que coincidan
        </p>
      )}
    </main>
  )
}

export default App
