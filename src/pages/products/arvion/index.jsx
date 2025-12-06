import React from "react"
import { ArvionHero } from "./components/ArvionHero"
import { ArvionStory } from "./components/ArvionStory"
import WatchSketchVideoSection from "./components/WatchSketchVideoSection"
import WatchPreviewImageSection from "./components/WatchPreviewImageSection"
import { Footer } from "../../layout/footer"
import { Header } from "../../layout/header"

const Arvion = () => {
  return (
    <>
      <Header />
      <ArvionHero />
      <ArvionStory />
      <WatchSketchVideoSection />
      <WatchPreviewImageSection />
      <Footer />
    </>
  )
}

export default Arvion