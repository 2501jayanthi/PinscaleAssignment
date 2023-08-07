// Write your code here
import {useState} from 'react'

import {
  BackgroundContainer,
  ImageTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setLocked] = useState(false)
  const isLockedImage = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setLocked(prevState => !prevState)
  return (
    <BackgroundContainer>
      <ImageTextContainer>
        <Image src={isLockedImage} alt={altText} />
        <Text>{text}</Text>
        <Button onClick={onClickButton}>{buttonText}</Button>
      </ImageTextContainer>
    </BackgroundContainer>
  )
}

export default Unlock
