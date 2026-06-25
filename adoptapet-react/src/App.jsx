import './App.css'
import ListaMascotas from '../components/Lista.Mascotas'
import { mascotas } from '../data/mascotas'

function App() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px' }}>Mascotas en adopción</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        Directorio digital interactivo del refugio
      </p>

      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
