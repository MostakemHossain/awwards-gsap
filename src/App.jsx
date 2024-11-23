import Hero from "./components/Hero"


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="bg-blue-500 z-0 min-h-screen"></section>
    </main>
  )
}

export default App