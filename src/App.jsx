import { Link, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Experience from './pages/Experience.jsx'
import Competitions from './pages/Competitions.jsx'
import CompetitionDetail from './pages/CompetitionDetail.jsx'

function NotFound() {
  return (
    <div className="scroll-mt-28 sm:scroll-mt-32">
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28">
        <p className="text-zinc-400">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/competitions/:slug" element={<CompetitionDetail />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
