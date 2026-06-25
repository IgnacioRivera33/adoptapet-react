import './App.css'
import MascotaCard from '../components/Mascotas.Card'

function App() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>Mascotas en adopción</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        Directorio digital interactivo del refugio
      </p>

      <MascotaCard
        nombre="Luna"
        raza="Mestiza"
        edad="2 años"
        especie="gato"
        descripcion="Gata tranquila, sociable y muy cariñosa."
        caracteristicas={['Juguetona', 'Se lleva bien con niños', 'Muy dulce']}
      />

      <MascotaCard
        nombre="Rocky"
        raza="Labrador"
        edad="4 años"
        especie="perro"
        descripcion="Perro activo, obediente y excelente compañero para familias."
        caracteristicas={['Energético', 'Le gusta correr', 'Entrenado']}
      />
    </main>
  )
}

export default App
