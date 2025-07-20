import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

// imagens
import iphoneMockup from '../assets/legacy/iphone_mockup.png'
import backgroundLegacy from '../assets/legacy/fundo_legacy.png'

// vídeos
import video1 from '../assets/legacy/videos/anuncio_conf.mp4'
import video2 from '../assets/legacy/videos/video1.mp4'
import video3 from '../assets/legacy/videos/video3.mp4'
import video4 from '../assets/legacy/videos/video2.mp4'
import video5 from '../assets/legacy/videos/legacy_link_bio.mp4'

const videos = [video1, video2, video3, video4, video5]

const StoryWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundLegacy});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  position: relative;
`

const TitleLegacy = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 5.5rem;
  letter-spacing: 1.1rem;
`
const MockupWrapper = styled.div`
  position: relative;
  min-width: 25rem;
  height: 72%;
  z-index: 2;
`

const Mockup = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 98%;

  max-width: 25rem;
  z-index: 3;
`

const VideoContainer = styled.div`
  position: absolute;
  top: 2%; // ajuste fino conforme o mockup
  left: 5%; // ajuste fino conforme o mockup
  width: 90%; // ocupa proporcional ao mockup
  height: 95%; // idem
  z-index: 1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2.8rem; // ajuste conforme o mockup
  }
`

const ClickZone = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 3;
  cursor: pointer;
`

const LeftZone = styled(ClickZone)`
  left: 0;
`

const RightZone = styled(ClickZone)`
  right: 0;
`

const Legacy = () => {
  const [index, setIndex] = useState(0)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % videos.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [index])

  return (
    <StoryWrapper id="legacy">
      <TitleLegacy>WE ARE LEGACY</TitleLegacy>

      <MockupWrapper ref={containerRef}>
        <VideoContainer>
          <video
            key={videos[index]}
            ref={videoRef}
            controls={false}
            onEnded={handleNext}
          >
            <source src={videos[index]} type="video/mp4" />
          </video>
        </VideoContainer>
        <Mockup src={iphoneMockup} alt="iPhone Mockup" />
      </MockupWrapper>

      <LeftZone onClick={handlePrev} />
      <RightZone onClick={handleNext} />
    </StoryWrapper>
  )
}

export default Legacy
