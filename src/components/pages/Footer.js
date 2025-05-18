import Image from "next/image"

const Footer = () => {
    return(
      <footer className="bg-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col justify-between items-center space-y-6 md:space-y-0">
        
        <div className="w-full flex items-center justify-between">
          <div className="flex space-x-4">
          <a href="#" className="bg-white/50 w-8 h-8 p-[2px] rounded-full hover:bg-white transition flex items-center justify-center">
            <Image
              src="/logo/whatsapp.png"
              alt="logo"
              className="w-full h-full object-cover rounded-full"
              width={40}
              height={40}
            />
          </a>
          <a href="#" className="bg-white/50 w-8 h-8 rounded-full hover:bg-white transition flex items-center justify-center">
            <Image
              src="/logo/instagram.png"
              alt="logo"
              className="w-full h-full object-cover rounded-full"
              width={40}
              height={40}
            />
          </a>
          <a href="#" className="bg-white/50 w-8 h-8 p-[2px] rounded-full hover:bg-white transition flex items-center justify-center">
            <Image
              src="/logo/telegram.png"
              alt="logo"
              className="w-full h-full object-cover rounded-full"
              width={40}
              height={40}
            />
          </a>
          </div>

          <div className="text-xs text-gray-400 text-center md:text-right">
              Movies Review <a href="https://jojoapp.in/" target="_blank" rel="noopener noreferrer" className="text-[#F26E21] font-medium">JOJO</a>
            </div>
        </div>
    
        
        <div className="w-full flex items-center justify-center">
            <div className="text-xs text-gray-400 text-center md:text-right">
              Created by<a className="text-white font-medium" href="https://jackinfosoft.com/" target="_blank" rel="noopener noreferrer">@JackInfoSoft</a>
              {/* Illustrations by <span className="text-white font-medium">Mary</span> |
              Branding by <span className="text-white font-medium">Rosilba</span> |
              Animations by <span className="text-white font-medium">Airsen</span> */}
            </div>
          </div>
      </div>
    </footer>
    
    )
}

export default Footer