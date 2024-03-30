import '../../../public/Outdoor.png'
import '../../../public/LogoSlogan.png'

interface DisplayImageProps {
  type: "logo" | "outdoor"
}

function DisplayImage({ type }: DisplayImageProps) {
  switch (type) {
    case "logo": {
      return <img src="LogoSlogan.png" alt="Payper: Sua folha em boas mãos."></img>
    }
    case "outdoor": {
      return <img src="Outdoor.png" alt="Payper Outdoor" className='size-full'></img>
    }
  }
}

export default DisplayImage