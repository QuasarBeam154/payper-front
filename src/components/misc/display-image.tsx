import '../../../public/Outdoor.png'
import '../../../public/LogoSlogan.png'

interface DisplayImageProps {
  type: "logo" | "outdoor"
  className?: string
}

function DisplayImage({ type, className }: DisplayImageProps) {
  switch (type) {
    case "logo": {
      return <img src="LogoSlogan.png" alt="Payper: Sua folha em boas mãos." className={className}></img>
    }
    case "outdoor": {
      return <img src="Outdoor.png" alt="Payper Outdoor" className={'size-full ' + className}></img>
    }
  }
}

export default DisplayImage