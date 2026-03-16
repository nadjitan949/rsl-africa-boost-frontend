import CustomImage from "@/app/_ui/Image"
import HeroImage from "@/app/assets/Rectangle 2.png"
import { Orbitron } from 'next/font/google' // Import de la bonne police

// Configuration de Orbitron (poids 900 pour l'aspect massif du logo)
const orbitron = Orbitron({ 
  weight: ['400'], 
  subsets: ['latin'] 
})

function Hero() {
  return (
    <section className="w-full h-screen absolute top-0 -z-10">
      <div className="w-full h-full relative">
        {/* L'image de fond */}
        <CustomImage 
          src={HeroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover" 
        />
        
        {/* L'overlay sombre */}
        <div className="absolute inset-0 bg-black/60 flex items-end p-10 md:p-20">
          
          <div className="flex flex-col">
            {/* On applique orbitron.className spécifiquement sur les titres */}
            <h1 className={`${orbitron.className} text-white text-[100px] md:text-[180px] leading-[0.8] tracking-[-0.05em] mb-5`}>
              RSL
            </h1>
            <h1 className={`${orbitron.className} text-white text-[100px] md:text-[180px] leading-[0.8] tracking-[-0.05em] mb-10`}>
              Africa boost
            </h1>
            
            {/* Description avec police système sans-serif pour garder le contraste */}
            <p className="text-white text-lg md:text-xl max-w-2xl font-sans opacity-90 leading-relaxed">
              Forum africain de guerre économique, édition <br />
              « DOUMONGUE » du <strong>20 - 27 septembre, 2026</strong> <br />
              <strong>à Lomé - TOGO.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero