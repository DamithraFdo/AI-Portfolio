"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Sparkles, 
  ChevronDown,
  Instagram,
  Twitter,
  Mail,
  Play,
  ArrowRight,
  Image as ImageIcon,
  Film,
  Palette,
  Layers,
  Maximize2,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check
} from "lucide-react"

// Animated background
function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 grid-pattern animate-grid-move opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[150px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-glow-cyan/5 blur-[200px]" />
    </div>
  )
}

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              <div className="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary/50 blur-lg" />
            </div>
            <span className="font-sans font-bold text-lg sm:text-xl tracking-wide">
              Damithra<span className="text-primary">Fdo</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Gallery', 'Posters', 'Thumbnails', 'Videos', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex glass px-4 lg:px-5 py-2 rounded-xl text-sm font-medium text-primary border border-primary/30 hover:border-primary/60 transition-all neon-blue"
            >
              Hire Me
            </motion.a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass p-2 rounded-xl"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass-strong rounded-2xl mt-2 p-4"
            >
              {['Gallery', 'Posters', 'Thumbnails', 'Videos', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  const aiTools = [
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/ffffff" },
    { name: "DALL-E", icon: "https://cdn.simpleicons.org/openai/ffffff" },
    { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/ffffff" },
    { name: "Midjourney", icon: "https://cdn.simpleicons.org/midjourney/ffffff" },
    { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/ffffff" },
    { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/ffffff" },
    { name: "Runway", icon: "https://cdn.simpleicons.org/runway/ffffff" },
    { name: "v0", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  ]
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">Available for commissions</span>
        </motion.div>
        
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6"
        >
          <span className="text-foreground">AI-Powered</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] neon-text-blue">
            Visual Creator
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
        >
          Crafting stunning visuals with cutting-edge AI. Specializing in 
          <span className="text-primary"> image generation</span>, 
          <span className="text-accent"> poster design</span>, 
          <span className="text-glow-cyan"> thumbnails</span>, and 
          <span className="text-primary"> video creation</span>.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.a
            href="#gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            <span className="relative flex items-center justify-center gap-2 text-primary-foreground">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto glass px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border border-border hover:border-primary/50 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-accent" />
            Get in Touch
          </motion.a>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-16 max-w-3xl mx-auto px-4"
        >
          {[
            { value: '500+', label: 'AI Artworks' },
            { value: '200+', label: 'Posters' },
            { value: '150+', label: 'Thumbnails' },
            { value: '50+', label: 'Videos' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* AI Tools Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 sm:mt-16 px-4"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 uppercase tracking-widest">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="group relative glass px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2 hover:border-primary/50 transition-all cursor-default"
              >
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Category tabs component
function CategoryTabs({ 
  categories, 
  active, 
  onChange 
}: { 
  categories: { id: string; label: string; icon: React.ElementType }[]
  active: string
  onChange: (id: string) => void 
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            active === cat.id
              ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground neon-blue'
              : 'glass text-muted-foreground hover:text-foreground'
          }`}
        >
          <cat.icon className="w-4 h-4" />
          <span className="hidden sm:inline">{cat.label}</span>
          <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
        </motion.button>
      ))}
    </div>
  )
}

// Prompt Modal Component
function PromptModal({ 
  isOpen, 
  onClose, 
  title, 
  prompt 
}: { 
  isOpen: boolean
  onClose: () => void
  title: string
  prompt: string
}) {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  if (!isOpen) return null
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="glass-strong rounded-2xl sm:rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 glass p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
            AI PROMPT
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
        </div>
        
        <div className="relative">
          <div className="glass rounded-xl p-4 sm:p-6 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed max-h-[300px] overflow-y-auto">
            {prompt}
          </div>
          
          <motion.button
            onClick={copyToClipboard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-3 right-3 glass px-3 py-2 rounded-lg flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </motion.button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Use this prompt with Midjourney, DALL-E, or Stable Diffusion
        </p>
      </motion.div>
    </motion.div>
  )
}

// Lightbox component
function Lightbox({ 
  images, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext,
  onShowPrompt
}: { 
  images: { title: string; category: string; image: string; prompt: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onShowPrompt: () => void
}) {
  const current = images[currentIndex]
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 glass p-2 sm:p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 glass p-2 sm:p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 glass p-2 sm:p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={current.image}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm text-primary font-mono mb-1 sm:mb-2">{current.category}</p>
              <h3 className="text-xl sm:text-3xl font-bold text-foreground">{current.title}</h3>
            </div>
            <motion.button
              onClick={(e) => { e.stopPropagation(); onShowPrompt(); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 hover:border-primary/60 transition-all neon-blue"
            >
              <FileText className="w-4 h-4" />
              View Prompt
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              i === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

// AI Image Gallery Section
function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [promptModalOpen, setPromptModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{ title: string; prompt: string } | null>(null)
  
  const categories = [
    { id: 'all', label: 'All Work', icon: Layers },
    { id: 'portrait', label: 'AI Portraits', icon: ImageIcon },
    { id: 'landscape', label: 'Landscapes', icon: ImageIcon },
    { id: 'abstract', label: 'Abstract', icon: Sparkles },
    { id: 'concept', label: 'Concept Art', icon: Palette },
    { id: 'Restore', label: 'Restore', icon: ImageIcon },
  ]
  
  // Add your images to /public/images/gallery/ as image1.jpg, image2.jpg, etc.
  const artworks = [
    { title: "Golden sunlight", category: "portrait", image: "/images/gallery/image1.jpg", prompt: "A cinematic portrait of a beautiful lady standing against a textured wall, with golden sunlight casting dramatic shadows through window blinds across her face and body. It's lightly raining, and the soft raindrops are barely visible as they fall through the golden light. The lighting adds a warm, moody tone while the shadows create stylish lines over her face, highlighting her expression. The background remains softly blurred, emphasizing the subject’s form and texture 1:1." },
    { title: "Digital Aurora", category: "landscape", image: "/images/gallery/image2.png", prompt: "Breathtaking arctic landscape with vibrant aurora borealis, purple and cyan northern lights dancing across the sky, snow-covered mountains, mirror-like frozen lake reflection, 8k ultra detailed, NASA photography style --ar 16:9 --v 6" },
    { title: "Neural Cosmos", category: "abstract", image: "/images/gallery/image3.png", prompt: "Abstract visualization of neural network as cosmic structure, interconnected nodes glowing with bioluminescent energy, deep space background, fibonacci spiral composition, octane render, 8k resolution --ar 1:1 --v 6" },
    { title: "Dark & Scary", category: "concept", image: "/images/gallery/image4.jpg", prompt: "Digital art, make me an image of when your mind goes blank and your imagination goes dark and scary images enter your mind. spooky dark images  put these images  in the background  of a man sitting  on the floor his head rested in his hands a scared expression  on his face With a blank stare in his eyes 1:1" },
    { title: "Social Worker", category: "concept", image: "/images/gallery/image5.jpeg", prompt: "Create a hyper-realistic AI image of a young male social worker styled as a digital superhero, bursting out from a broken smartphone screen, holding a glowing heart made of pixels in one hand and a laptop in the other. He wears a futuristic smart casual with tech patterns (circuit board designs), and behind him, ghostly holograms of people he’s helped rise up like constellations. Emojis (💖💬🧠💡) orbit around he. The scene blends tech culture, technology, and compassion. The TikTok interface is cracked open as if he broke through the algorithm itself." },
    { title: "Future City", category: "concept", image: "/images/gallery/image6.png", prompt: "Futuristic utopian city at twilight, vertical gardens on skyscrapers, flying vehicles with light trails, teal and cyan color palette, Syd Mead inspired, architectural visualization, 8k ultra detailed --ar 16:9 --v 6" },
    { title: "Me in GTA", category: "portrait", image: "/images/gallery/image7.png", prompt: "Create a highly detailed 8K portrait poster inspired by the iconic visual style of the modern Grand Theft Auto VI promotional artwork aesthetic, featuring a cinematic urban atmosphere with bold composition, vibrant lighting, layered graphic elements, and stylish contemporary street-luxury fashion energy. The overall design must strongly capture the signature mood of GTA VI posters, including dynamic neon color grading, tropical-modern city vibes, dramatic shadows, glossy highlights, stylized textures, decorative ornaments, graphic overlays, urban symbols, luxury lifestyle accents, and immersive environmental storytelling. Add premium poster decorations such as abstract shapes, graffiti-inspired accents, subtle retro-modern textures, luxury vehicle silhouettes, nightlife elements, palm tree shadows, street sign details, glowing reflections, and layered visual effects that enrich the composition without making it feel overcrowded. Include a large cinematic title text “Grand Theft Auto VI” prominently on the poster using typography inspired by official AAA video game promotional posters, with the full version of “GTA” clearly written as “Grand Theft Auto.” The typography should feel bold, luxurious, modern, and integrated naturally into the poster design, supported by additional smaller decorative texts, symbols, labels, and graphic UI-style elements to strengthen the authentic game-poster atmosphere. The subject must not replicate the exact pose from the reference photo. Create a completely fresh and more visually engaging pose with stronger body language, natural movement, and expressive emotion. The expression should feel alive, charismatic, confident, and cinematic rather than stiff, awkward, or flat. The pose must resemble the elegance and attitude of an international fashion model, combining stylish confidence with relaxed realism. Avoid static standing poses. Instead, use dynamic posture, subtle movement, fashionable gestures, asymmetrical body positioning, realistic interaction with the environment, and strong eye expression to create a premium editorial look. The outfit should feature trendy modern casual fashion with a luxurious streetwear influence. The clothing must feel fashionable, youthful, and visually rich, avoiding plain or monotonous styling. Combine varied colors, layered clothing pieces, modern fabric textures, unique motifs, stylish accessories, and contemporary fashion details that complement the GTA VI-inspired atmosphere. The styling should feel premium, photogenic, and believable, similar to high-end editorial fashion mixed with modern open-world video game aesthetics, Use cinematic lighting with realistic skin texture, detailed fabric rendering, atmospheric reflections, depth-rich environment composition, balanced contrast, and ultra-sharp visual clarity. The poster should feel like an official next-generation AAA game promotional artwork with highly polished rendering quality, immersive visual storytelling, and professional graphic design execution. Ultra-detailed, highly aesthetic, cinematic composition, realistic proportions, premium poster layout, vibrant modern color palette, visually powerful, and rendered in ultra high-definition 8K quality. Face and body exactly same as uploaded image." },
    { title: "Clam Garden", category: "portrait", image: "/images/gallery/image8.jpeg", prompt: "Ultra-realistic cinematic full-body portrait of a stylish young lady(5', slim but toned body) with the exact same face and hairstyle as reference. He wears a light beige shirt with small floral prints, paired with cream straight trousers and white sneakers. Pose: sitting casually on a low wooden bench, right elbow resting on knee, left hand holding a bright orange marigold loosely. Expression is calm, slightly smiling Background: bright sunny garden with orange and white blooms" },
    { title: "Void Walker", category: "Concept", image: "/images/gallery/image9.png", prompt: "Mysterious figure in flowing ethereal robes walking through dimensional void, stars and galaxies visible in fabric, cosmic horror aesthetic, blue and silver palette, epic scale, 8k cinematic --ar 9:16 --v 6" },
    { title: "Anime World", category: "portrait", image: "/images/gallery/image10.png", prompt: "Ultra-wide fisheye selfie shot, anime crossover group selfie inside a cozy modern living room, the viewer's face replacing the central person, centered very close to camera, arms extended toward the lens, slightly playful expression, surrounded by stylized anime pirate crew characters posing tightly behind and around the subject. exaggerated facial expressions. joyful chaotic group energy, indoor living room with sofa, bookshelf, framed anime posters, window with curtains in the background, warm wooden cletails, strong circular fisheye distortion, black rounded lens vignette around the edges, intimate selfie perspective, subject occupying the center foreground. background characters layered in depth around the face. Apply a much darker, moodier, ultra-cinematic lighting style: deep black-rich shadows, cinematic contrast, dramatic directional light on the face and upper torso, selective radiant bloom on bright edges, luminous halo around face, shoulders and arms, strong subject separation from the background, subtle rim light, glossy highlights, realistic skin texture, soft but sharp facial detail, premium dark editorial cinematic grade, moody warm interior tones, controlled highlights, volumetric glow, film-like contrast, ultra-sharp details, realistic lighting diffusion, cinematic depth, high-end poster look. 8K." },
    { title: "Past to present", category: "Restore", image: "/images/gallery/image11.png", prompt: "Restore this old photo into professional portrait of DLSR-quality colour and detail, using an advanced upscaling algorithm comparable to the results from canon EOS R6 II. Ensure the restored the image looks natural, retains exact facial features, has great clarity." },
    { title: "Me in 2003", category: "Restore", image: "/images/gallery/image12.png", prompt: "Restore this old photo into professional portrait of DLSR-quality colour and detail, using an advanced upscaling algorithm comparable to the results from canon EOS R6 II. Ensure the restored the image looks natural, retains exact facial features, has great clarity." },
  ]
  
  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(a => a.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredArtworks.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredArtworks.length) % filteredArtworks.length)
  }
  
  const showPromptFromLightbox = () => {
    const current = filteredArtworks[currentImageIndex]
    setSelectedItem({ title: current.title, prompt: current.prompt })
    setLightboxOpen(false)
    setPromptModalOpen(true)
  }
  
  const showPromptDirect = (item: { title: string; prompt: string }) => {
    setSelectedItem(item)
    setPromptModalOpen(true)
  }
  
  return (
    <section id="gallery" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            // AI IMAGE GENERATION
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            AI <span className="text-primary">Artwork</span> Gallery
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Stunning visuals created with advanced AI models - Midjourney, DALL-E, Meta-AI, Stable Diffusion
          </p>
        </motion.div>
        
        <CategoryTabs 
          categories={categories} 
          active={activeCategory} 
          onChange={setActiveCategory} 
        />
        
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art, i) => (
              <motion.div
                key={`${art.title}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <img 
                  src={art.image}
                  alt={art.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Mesh overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity mesh-pattern" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] sm:text-xs text-primary font-mono uppercase">{art.category}</p>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-3">{art.title}</h3>
                  
                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => openLightbox(i)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 glass px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Enlarge</span>
                    </motion.button>
                    <motion.button
                      onClick={() => showPromptDirect(art)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 glass px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Prompt</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={filteredArtworks}
            currentIndex={currentImageIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={prevImage}
            onNext={nextImage}
            onShowPrompt={showPromptFromLightbox}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {promptModalOpen && selectedItem && (
          <PromptModal
            isOpen={promptModalOpen}
            onClose={() => setPromptModalOpen(false)}
            title={selectedItem.title}
            prompt={selectedItem.prompt}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

// Poster Design Section
function PosterSection() {
  const [promptModalOpen, setPromptModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{ title: string; prompt: string } | null>(null)
  const [enlargedPoster, setEnlargedPoster] = useState<number | null>(null)
  
  // Add your poster images to /public/images/posters/ as poster1.jpg, poster2.jpg, etc.
  const posters = [
    { title: "KFC Campaign", type: "Campaign Poster", image: "/images/posters/poster1.png", prompt: "4:5 vertical premium campaign poster, ultra-high resolution (8K), hyper-real commercial food photography, global OOH + digital + social ready. Style: KFC Premium Minimal × Bold Composition × Hyper-real advertising aesthetic. Scene: Pure matte white background with a dominant rounded rectangle block in ultra-vibrant KFC Red gradient (deep crimson top-left → warm scarlet bottom-right glow). Typography: “CRAVE” in ultra-bold geometric sans-serif, stretched wide, cropped by frame edges, soft shadow depth, glossy emboss effect. Subject: Male model, sharp editorial look, confident expression. Pose: One hand extended toward the audience holding a KFC burger (crispy chicken fillet, golden bun, lettuce, sauce detail). Other hand extended holding a Pepsi cup (condensation droplets, ice cubes, Pepsi logo visible, domed lid with striped straw). Body angled slightly for depth, cinematic hero perspective. Lighting: Bright studio key light (front-left) defining product textures, vibrant red rim light (right) enhancing silhouettes, subtle glow from red gradient block, soft grounded shadow under burger and cup. Color palette: KFC Red primary, clean white secondary, golden fried tones, Pepsi Blue accents, deep micro-shadows for definition. Mood: Bold, confident, premium appetite appeal. Typography overlay: - Top left: KFC logo (Colonel Sanders icon + “KFC”) - Top right: “Satisfy your cravings.” - Center background: “CRAVE” - Bottom: “KFC Burger & Pepsi Combo — Irresistible. Refreshing. Unbeatable.” Camera: Digital medium format (Hasselblad H6D), 80mm prime lens, HDR rendering, ultra-real textures, shallow depth of field, creamy bokeh, cinematic grain. --ar 4:5 --v 6 --q 2 --style raw --uplight" },
    { title: "ACEY Drink", type: "Brand Poster", image: "/images/posters/poster2.png", prompt: "A dynamic high-energy beverage advertisement poster for an energy drink called “ACEY” designed in a cinematic streetwear commercial photography style with intense motion and urban energy. The central character is a young woman with a youthful plump face, oversized expressive doll-like eyes, gen z vibe with soft glossy reflections, long delicate eyelashes, a tiny button nose, and rosy flushed cheeks. She has a short sleek dark black bob haircut with thick blunt-cut bangs sitting just above her eyes, and smooth glossy strands with clean geometric shaping. A small metallic grey mechanical hair clip is placed on one side of her hair, adding a futuristic accent. Her expression is energetic and confident, captured mid-action. She is frozen in a powerful mid-air skatepark jump pose, wearing a pineapple yellow crop top, a white windbreaker jacket, and white cargo pants with subtle pineapple accents, paired with sporty white sneakers featuring neon green details. Her body is angled dynamically, emphasizing speed, motion, and athletic energy. In the foreground, a large chilled aluminum can labeled “ACEY” is dramatically tilted toward the viewer, rendered with extreme detail. It is surrounded by an explosive high-speed liquid motion splash of neon pineapple-yellow energy fluid, floating ice cubes, water droplets, and fresh pineapple slices and cinnamon captured in ultra-sharp macro detail, emphasizing refreshment and impact. The background shows a vibrant urban skatepark covered in colorful graffiti walls, with palm trees silhouetted against a bright blue sky. The lighting is high-contrast and cinematic, with strong highlights and crisp shadows, giving a polished commercial advertising look. The typography is bold, aggressive, and stylized: at the top, distressed brush lettering reads “Cinnamon & Pineapple carbonated drink!” with dynamic energy strokes. The overall aesthetic combines high-speed sports advertising, urban streetwear branding, liquid motion photography, and cinematic product commercial styling, with electric lime green, black, white, and sky blue as the dominant color palette, referance:Introducing Sri Lanka's first ever Cinnamon & Pineapple carbonated drink! Where tropical sweetness meets a warm Ceylon twist." },
    { title: "Family Festival", type: "Music Poster", image: "/images/posters/poster3.png", prompt: "Ultra-colorful high-energy concert poster design 4:5 vertical layout optimized for print and digital campaigns, style modern Sri Lankan festival × neon glow × dynamic stage photography × bold typography, large central collage of performers Bathiya & Santhush (BNS), Nalin Perera, Sanuka Wickramasinghe mid-performance with microphones guitars expressive poses, background abstract fusion of stage lights fireworks tropical Sri Lankan motifs waves palms temple outlines, event title bold metallic gradient font “Family Night with Marians 2026” glowing centered top, details Saturday 26 October 2026 7:00 PM onwards Nilabee Holiday Lagoon Resort Chilaw organized by Strydo Labs & Nilabee Hotels Chilaw, ticket pricing Rs.5000 VIP Rs.3000 Premium Rs.2000 Standard Rs.1000 Student plus Rs.1000 Flemingo gift voucher, ticket outlets Nilabee Holiday Resort Chilaw Domino’s Pizza Chilaw Mayura Bookshop Chilaw & Nigambo Abans Showroom Chilaw Nawaloka College Colombo 5 and online ticket.lk, contact reservations 0716507322 0322222140, design composition performers rim lighting lens flare motion blur audience silhouettes raised hands confetti spotlight beams, color palette electric blues fiery reds golden yellows deep purples, mood festive energetic community-driven premium entertainment, overlay sponsor logos bottom strip QR code quick ticket access tagline “An unforgettable night of music unity and celebration”, camera wide-angle concert photography HDR cinematic grain crisp detail --ar 4:5 --v 6 --q 2 --style raw --uplight" },
    { title: "I'm in Black", type: "Film Cover", image: "/images/posters/poster4.png", prompt: "Create a highly detailed 8K cinematic portrait poster inspired by the iconic Men in Black film aesthetic, blending sleek sci‑fi action with luxury fashion editorial energy. Style: Futuristic blockbuster movie poster × secret‑agent noir × premium fashion photography. Scene: A high‑tech urban nightscape — glowing neon skylines, futuristic architecture, mysterious shadows, and subtle alien motifs integrated into the environment. Energy: Intense action‑film tension with dramatic lighting, glossy highlights, layered textures, holographic overlays, and bold cinematic composition. Decorations: Abstract geometric shapes, glowing particle effects, subtle graffiti‑like accents, futuristic weapon silhouettes, holographic symbols, and premium poster ornaments that enrich the composition without overcrowding. Typography: Large cinematic title text “MEN IN BLACK” in bold AAA movie‑poster style — luxurious, modern, seamlessly integrated into the design. Support with smaller decorative texts, futuristic labels, and UI‑style graphic elements to strengthen the authentic action‑film atmosphere. Subject: Face and body exactly same as uploaded image, but posed with dynamic action‑film body language — alive, charismatic, confident, cinematic. Avoid static standing; instead use asymmetrical posture, subtle movement, expressive gestures, and strong eye contact. The pose should radiate stylish confidence with natural realism, like an international fashion model caught mid‑motion in an action sequence. Outfit: Sleek modern black suit with luxurious tailoring — layered with subtle futuristic details, glossy textures, unique motifs, and stylish accessories (dark sunglasses, metallic watch, or hidden weapon accents). Fashionable, youthful, photogenic, blending high‑end editorial fashion with sci‑fi action aesthetics. Lighting: Cinematic action‑film grade — realistic skin texture, ultra‑sharp fabric rendering, atmospheric reflections, volumetric glow, balanced contrast, and depth‑rich environment composition. Mood: Explosive, premium, immersive storytelling — feels like an official next‑generation Hollywood action blockbuster poster. Rendering: Ultra‑detailed, highly aesthetic, cinematic composition, realistic proportions, premium poster layout, vibrant modern color palette, visually powerful, polished in ultra high‑definition 8K quality." },
    { title: "Class Poster", type: "Class Poster", image: "/images/posters/poster5.png", prompt: "4:5 vertical ultra-realistic educational poster, high-resolution (8K), professional lighting, cinematic composition. Theme: Robotics education and training in Sri Lanka. Style: Futuristic classroom × STEM showcase × Realistic photography × Clean commercial layout. Scene: Instructor Damithra Fernando (young Sri Lankan male, wearing blue ANKA TECHNOLOGIES polo shirt and lanyard) teaching robotics to students. Foreground: Damithra standing beside humanoid robots (NAO robot in white-red, Pepper robot in white-gray) and a green tracked robot vehicle. Background: Modern classroom or exhibition booth with banners reading “ANKA TECHNOLOGIES”, “STEM EDU LK”, and “Robotics & AI Courses”. Lighting: Soft white key light with blue accent glow, HDR rendering, subtle reflections on robots, realistic depth of field. Typography: “ROBOTICS CLASS” in bold white and blue sans-serif font at top; subtext lines — “Group & Individual Classes”, “Online & Physical Classes”, “Beginner to Advanced Level Classes”. Instructor section: “Damithra Fernando” and “Contact: 0716507322” in clean white text near bottom-left. Tagline: “Take Your Robotics Skills to the Next Level” in bold yellow and white at bottom center. Color palette: Deep blue background with circuit pattern, white and silver highlights, red accents from robots, green from tracked robot. Mood: Inspirational, futuristic, educational, professional. Camera: Medium-wide shot, realistic depth, cinematic HDR, crisp detail, soft bokeh background. --ar 4:5 --v 6 --q 2 --style raw --uplight" },
    { title: "Samsung Campaign", type: "Brand Campaign", image: "/images/posters/poster6.png", prompt: "Corporate brand campaign poster 'Future Forward', abstract geometric shapes representing innovation, professional minimal design, navy and silver color palette, modern sans-serif typography, premium feel --ar 2:3 --v 6" },
  ]
  
  const showPrompt = (item: { title: string; prompt: string }) => {
    setSelectedItem(item)
    setPromptModalOpen(true)
  }
  
  return (
    <section id="posters" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 holographic opacity-20" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            // POSTER DESIGN
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Eye-Catching <span className="text-accent">Posters</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            From movie posters to event graphics - AI-powered designs that captivate
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posters.map((poster, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img 
                src={poster.image}
                alt={poster.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Glow border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-xl sm:rounded-2xl transition-colors" />
              
              {/* Info overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
                <p className="text-[10px] sm:text-xs text-accent font-mono uppercase mb-0.5 sm:mb-1">{poster.type}</p>
                <h3 className="text-sm sm:text-lg font-bold text-foreground mb-3">{poster.title}</h3>
                
                {/* Action buttons */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    onClick={() => setEnlargedPoster(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 glass px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Enlarge</span>
                  </motion.button>
                  <motion.button
                    onClick={() => showPrompt(poster)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 glass px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Prompt</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enlarged poster modal */}
        <AnimatePresence>
          {enlargedPoster !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setEnlargedPoster(null)}
            >
              <button
                onClick={() => setEnlargedPoster(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 glass p-2 sm:p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-md sm:max-w-lg md:max-w-xl aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={posters[enlargedPoster].image}
                  alt={posters[enlargedPoster].title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                  <p className="text-sm text-accent font-mono uppercase mb-2">{posters[enlargedPoster].type}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{posters[enlargedPoster].title}</h3>
                  <motion.button
                    onClick={() => {
                      showPrompt(posters[enlargedPoster])
                      setEnlargedPoster(null)
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 hover:border-primary/60 transition-all neon-blue"
                  >
                    <FileText className="w-4 h-4" />
                    View Prompt
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Prompt modal */}
        <AnimatePresence>
          {promptModalOpen && selectedItem && (
            <PromptModal
              isOpen={promptModalOpen}
              onClose={() => setPromptModalOpen(false)}
              title={selectedItem.title}
              prompt={selectedItem.prompt}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Thumbnail Design Section
function ThumbnailSection() {
  const [promptModalOpen, setPromptModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{ title: string; prompt: string } | null>(null)
  const [enlargedThumb, setEnlargedThumb] = useState<number | null>(null)
  
  // Add your thumbnail images to /public/images/thumbnails/ as thumb1.jpg, thumb2.jpg, etc.
  const thumbnails = [
    { title: "Garfild Show", views: "1.2M", channel: "Garfild Show", image: "/images/thumbnails/thumb1.png", prompt: "🎨 Thumbnail Concept:- Title Typography: 'GARFIELD' in bold 3D yellow/orange letters with black outline- Sinhala Typography: 'සහ ලංකා සවාරිය' in bold blue/yellow letters with white + black outline- Characters: Garfield (with Sri Lankan straw hat, flag, coconut drink) and Odie (excited smile, tongue out)- Location: Dalada Maligawa (Temple of the Tooth, Kandy) with lush hills, prayer flags, and ceremonial elephant- Logo: FULL HD 1080 badge in yellow/black at top-left corner- Disclaimer Footer: Small white text on black strip  'Disclaimer: Everything is for educational purpose only. All rights reserved to respective owners.'-Style: Bright, saturated colors, fun cartoon vibe, Sri Lankan cultural backdrop- Resolution: FullHD 1920x1080" },
    { title: "Future of AI in 2024", views: "890K", channel: "AI Insights", image: "/images/thumbnails/thumb2.jpg", prompt: "Engaging YouTube thumbnail 'FUTURE OF AI', futuristic robot face, pink and magenta gradient, large bold typography, tech visualization elements, professional thumbnail design, high CTR optimized --ar 16:9 --v 6" },
    { title: "Build Apps with AI", views: "2.1M", channel: "Dev Academy", image: "/images/thumbnails/thumb3.jpg", prompt: "Developer tutorial thumbnail 'BUILD APPS WITH AI', code editor screenshot, teal cyan gradient, developer avatar, excited expression, arrow pointing to code, clean modern design --ar 16:9 --v 6" },
    { title: "Neural Networks Explained", views: "567K", channel: "Science Hub", image: "/images/thumbnails/thumb4.jpg", prompt: "Educational thumbnail 'NEURAL NETWORKS', brain with network visualization, green mint gradient, professor pointing gesture, simplified diagram, accessible science design --ar 16:9 --v 6" },
    { title: "AI Art Masterclass", views: "1.5M", channel: "Creative AI", image: "/images/thumbnails/thumb5.jpg", prompt: "Creative tutorial thumbnail 'AI ART MASTERCLASS', stunning AI artwork preview, pink to yellow gradient, artist palette icon, bold text with glow, premium course feel --ar 16:9 --v 6" },
    { title: "ChatGPT vs Claude", views: "3.2M", channel: "Tech Compare", image: "/images/thumbnails/thumb6.png", prompt: "Comparison video thumbnail 'ChatGPT vs CLAUDE', split screen design, VS battle format, AI logos facing each other, pastel gradient background, dramatic lighting --ar 16:9 --v 6" },
    { title: "Midjourney Tips & Tricks", views: "980K", channel: "AI Artist", image: "/images/thumbnails/thumb7.jpg", prompt: "Tips video thumbnail 'MIDJOURNEY SECRETS', beautiful AI artwork showcase, lavender cream gradient, lightbulb icon, numbered list preview, professional creator style --ar 16:9 --v 6" },
    { title: "Robotics Masterclass", views: "4.1M", channel: "Future Tech", image: "/images/thumbnails/thumb8.png", prompt: "16:9 ultra-realistic YouTube thumbnail, cinematic lighting, high contrast, professional HDR rendering. Theme: Robotics education and AI innovation in Sri Lanka. Subject: Damithra Fernando (Sri Lankan robotics engineer) teaching robotics and AI. Foreground: Damithra smiling confidently beside humanoid robots (NAO and Pepper) and a green tracked robot. Background: Futuristic classroom or exhibition booth, and “AI Robotics Portfolio”. Lighting: Blue and white glow with subtle reflections on robots, realistic depth of field, lens flare for cinematic effect. Text overlay: “ROBOTICS MASTER CLASS” in bold white and blue font at top; “Learn AI & Robotics” in yellow below; “Beginner to Advanced” in smaller white text. Accent graphics: Circuit patterns, glowing AI icons, and motion blur streaks for energy. Mood: Inspirational, futuristic, educational, professional. Color palette: Deep blue, silver, white, and red accents. Camera: Medium-wide shot, crisp focus on instructor and robots, soft bokeh background. --ar 16:9 --v 6 --q 2 --style raw --uplight" },
  ]
  
  const showPrompt = (item: { title: string; prompt: string }) => {
    setSelectedItem(item)
    setPromptModalOpen(true)
  }
  
  return (
    <section id="thumbnails" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-glow-cyan font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            // THUMBNAIL DESIGN
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Click-Worthy <span className="text-glow-cyan">Thumbnails</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            High-converting YouTube thumbnails that drive views and engagement
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {thumbnails.map((thumb, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-3">
                <img 
                  src={thumb.image}
                  alt={thumb.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60">
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => setEnlargedThumb(i)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-glow-cyan transition-colors"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Enlarge
                    </motion.button>
                    <motion.button
                      onClick={() => showPrompt(thumb)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass px-3 py-2 rounded-lg flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Prompt
                    </motion.button>
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 bg-background/80 px-1 sm:px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-mono">
                  10:24
                </div>
              </div>
              
              {/* Video info */}
              <div className="flex gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-medium text-foreground line-clamp-2 group-hover:text-glow-cyan transition-colors">
                    {thumb.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{thumb.channel}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{thumb.views} views</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enlarged thumbnail modal */}
        <AnimatePresence>
          {enlargedThumb !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setEnlargedThumb(null)}
            >
              <button
                onClick={() => setEnlargedThumb(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 glass p-2 sm:p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={thumbnails[enlargedThumb].image}
                  alt={thumbnails[enlargedThumb].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                  <p className="text-sm text-muted-foreground mb-1">{thumbnails[enlargedThumb].channel}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{thumbnails[enlargedThumb].title}</h3>
                  <motion.button
                    onClick={() => {
                      showPrompt(thumbnails[enlargedThumb])
                      setEnlargedThumb(null)
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 hover:border-primary/60 transition-all neon-blue"
                  >
                    <FileText className="w-4 h-4" />
                    View Prompt
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Prompt modal */}
        <AnimatePresence>
          {promptModalOpen && selectedItem && (
            <PromptModal
              isOpen={promptModalOpen}
              onClose={() => setPromptModalOpen(false)}
              title={selectedItem.title}
              prompt={selectedItem.prompt}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Video Showcase Section
function VideoSection() {
  const [promptModalOpen, setPromptModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{ title: string; prompt: string } | null>(null)
  
  // Add your video preview images to /public/images/videos/ as video1.jpg, video2.jpg, etc.
  const videos = [
    { 
      title: "Test 1: AI Product Commercial", 
      description: "Cinematic product showcase with AI-generated visuals and motion graphics",
      duration: "0:45",
      type: "Commercial",
      video: "/images/videos/video1.mp4",
      prompt: "Cinematic product commercial, sleek tech device floating in dark space, holographic UI elements surrounding it, smooth camera orbit, particle effects, professional color grading, 4K, Runway Gen-3 style --ar 16:9"
    },
    { 
      title: "Music Video - Synthetic Dreams", 
      description: "Full AI-generated music video with surreal landscapes and abstract visuals",
      duration: "3:24",
      type: "Music Video",
      video: "/images/videos/video2.jpg",
      prompt: "Surreal music video scene, ethereal figure walking through morphing dreamscape, liquid metal surfaces, bioluminescent plants, smooth transitions between environments, abstract visual poetry, Sora quality --ar 16:9"
    },
    { 
      title: "Brand Story Animation", 
      description: "Animated brand narrative using AI-powered character and scene generation",
      duration: "1:30",
      type: "Animation",
      video: "/images/videos/video3.mp4",
      prompt: "Stylized 3D animation, minimalist character design, smooth motion, clean geometric environments, brand story narrative, premium corporate feel, Pixar-inspired lighting, seamless scene transitions --ar 16:9"
    },
    { 
      title: "Tech Explainer Video", 
      description: "Educational content with AI-generated diagrams and visual explanations",
      duration: "5:12",
      type: "Educational",
      video: "/images/videos/video4.mp4",
      prompt: "Educational explainer video, complex concept visualization, animated diagrams, clean infographic style, professional voiceover pacing, clear visual hierarchy, Kurzgesagt inspired aesthetic --ar 16:9"
    },
  ]
  
  const showPrompt = (item: { title: string; prompt: string }) => {
    setSelectedItem(item)
    setPromptModalOpen(true)
  }
  
  return (
    <section id="videos" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 holographic opacity-10" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            // VIDEO GENERATION
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            AI-Powered <span className="text-primary">Videos</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            From commercials to music videos - creating motion content with Runway, Pika, and more
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group glass-strong rounded-xl sm:rounded-2xl overflow-hidden"
            >
              {/* Video preview area */}
              <div className="relative aspect-video">
                <video
                  src={video.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                
                {/* Animated lines for video feel */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
                      style={{ top: `${20 + j * 15}%` }}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: j * 0.5,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full glass-strong flex items-center justify-center neon-blue"
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary ml-1" />
                  </motion.div>
                  <motion.button
                    onClick={() => showPrompt(video)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Prompt
                  </motion.button>
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 glass px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-mono">
                  {video.duration}
                </div>
                
                {/* Type badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary/20 border border-primary/30 px-2 sm:px-3 py-1 rounded-lg text-xs font-mono text-primary">
                  {video.type}
                </div>
              </div>
              
              {/* Video info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Prompt modal */}
        <AnimatePresence>
          {promptModalOpen && selectedItem && (
            <PromptModal
              isOpen={promptModalOpen}
              onClose={() => setPromptModalOpen(false)}
              title={selectedItem.title}
              prompt={selectedItem.prompt}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">
            // LET&apos;S CREATE
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Bring Your<br />
            <span className="text-primary">Vision</span> to Life?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 px-4">
            Whether you need stunning AI artwork, eye-catching posters, viral thumbnails, 
            or captivating videos - I&apos;m here to help create something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <motion.a
              href="mailto:damithrafdo@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative flex items-center justify-center gap-2 text-primary-foreground">
                <Mail className="w-5 h-5" />
                Get in Touch
              </span>
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium border border-border hover:border-primary/50 transition-all flex items-center justify-center gap-2"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="relative py-6 sm:py-8 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <span className="font-sans font-bold text-base sm:text-lg">Damithra<span className="text-primary">Fdo</span></span>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground text-center">
          2026 DamithraFdo. Crafted with AI Powerd by Strydo Labs.
        </p>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <GridBackground />
      <Navigation />
      <HeroSection />
      <GallerySection />
      <PosterSection />
      <ThumbnailSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
