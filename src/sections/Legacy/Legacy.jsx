import { useState, useRef, useEffect } from 'react'

import {
  StoryWrapper,
  TitleLegacy,
  MockupWrapper,
  Mockup,
  VideoContainer,
  LeftArrow,
  RightArrow,
  LeftArrowIcon,
  RightArrowIcon,
  AudioButton
} from './Style'

// imagens
import iphoneMockup from '../../assets/legacy/iphone_mockup.png'

// vídeos
import video1 from '../../assets/legacy/videos/anuncio_conf.mp4'
import video2 from '../../assets/legacy/videos/video1.mp4'
import video3 from '../../assets/legacy/videos/video3.mp4'
import video4 from '../../assets/legacy/videos/video2.mp4'
import video5 from '../../assets/legacy/videos/legacy_link_bio.mp4'

const videos = [video1, video2, video3, video4, video5]

const Legacy = () => {
  const [index, setIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % videos.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.volume = 0.3
            videoRef.current.play().catch((error) => {
              console.log('Autoplay prevented:', error)
            })
          } else {
            videoRef.current.pause()
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '100px'
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5
      videoRef.current.muted = isMuted
    }
  }, [index, isMuted])

  return (
    <StoryWrapper id="legacy">
      <TitleLegacy>WE ARE LEGACY</TitleLegacy>

      <MockupWrapper ref={containerRef}>
        <VideoContainer>
          <video
            key={videos[index]}
            ref={videoRef}
            controls={false}
            autoPlay
            muted={isMuted}
            playsInline
            onEnded={handleNext}
          >
            <source src={videos[index]} type="video/mp4" />
          </video>
        </VideoContainer>
        <Mockup src={iphoneMockup} alt="iPhone Mockup" />
        
        <LeftArrow onClick={handlePrev}>
          <LeftArrowIcon />
        </LeftArrow>
        <RightArrow onClick={handleNext}>
          <RightArrowIcon />
        </RightArrow>
        
        <AudioButton onClick={toggleMute}>
          {isMuted ? '🔇' : '🔊'}
        </AudioButton>
      </MockupWrapper>
    </StoryWrapper>
  )
}

export default Legacy
