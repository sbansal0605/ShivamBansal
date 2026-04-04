import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Competitions from './pages/Competitions.jsx'
import LeadershipExtras from './pages/LeadershipExtras.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/leadership-extras" element={<LeadershipExtras />} />
      </Routes>
    </Layout>
  )
}
