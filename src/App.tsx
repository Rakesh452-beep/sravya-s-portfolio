import { useCallback, useMemo, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Nav } from "./components/Nav"
import { NotFound } from "./components/NotFound"
import { PageTransition } from "./components/PageTransition"
import { Reel } from "./components/Reel"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { WorkDetail } from "./pages/WorkDetail"
import { Works } from "./pages/Works"
import { OverlayContext } from "./overlayContext"

export default function App() {
  const [reelOpen, setReelOpen] = useState(false)

  const openReel = useCallback(() => setReelOpen(true), [])

  const value = useMemo(() => ({ openReel }), [openReel])

  return (
    <OverlayContext.Provider value={value}>
      <Nav />

      <PageTransition>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </PageTransition>

      <Footer />

      <Reel open={reelOpen} onClose={() => setReelOpen(false)} />
    </OverlayContext.Provider>
  )
}
