import styled from 'styled-components';

// imagens
import backgroundLegacy from '../../assets/legacy/fundo_legacy.png'

export const StoryWrapper = styled.section`
  width: 100%;
  min-height: 80vh;
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
  z-index: 10;
  scroll-margin-top: 5rem;

  @media (max-width: 1024px) {
    min-height: 70vh;
    gap: 1.5rem;
    background-size: cover;
  }

  @media (max-width: 768px) {
    min-height: 60vh;
    gap: 1rem;
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    min-height: 50vh;
    padding: 1rem 0;
  }
`

export const TitleLegacy = styled.h2`
  letter-spacing: 1.1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const MockupWrapper = styled.div`
  position: relative;
  height: 54rem;
  width: 25rem;
  z-index: 2;

  @media (max-width: 1024px) {
    height: 45rem;
    width: 21rem;
  }

  @media (max-width: 768px) {
    height: 35rem;
    width: 16rem;
  }

  @media (max-width: 480px) {
    height: 30rem;
    width: 14rem;
  }
`

export const Mockup = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 98%;
  width: 100%;
  z-index: 3;
`

export const VideoContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 5%;
  width: 90%;
  height: 95%;
  z-index: 1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2.8rem;

    @media (max-width: 768px) {
      border-radius: 1.8rem;
    }
  }
`

export const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 480px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`

export const LeftArrow = styled(NavigationArrow)`
  left: -3.5rem;

  @media (max-width: 1024px) {
    left: -2.8rem;
  }

  @media (max-width: 768px) {
    left: -2.2rem;
  }

  @media (max-width: 480px) {
    left: -2rem;
  }
`

export const RightArrow = styled(NavigationArrow)`
  right: -3.5rem;

  @media (max-width: 1024px) {
    right: -2.8rem;
  }

  @media (max-width: 768px) {
    right: -2.2rem;
  }

  @media (max-width: 480px) {
    right: -2rem;
  }
`

export const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  transition: all 0.3s ease;
`

export const LeftArrowIcon = styled(ArrowIcon)`
  border-right: 0.6rem solid white;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
  margin-right: 0.1rem;

  @media (max-width: 768px) {
    border-right: 0.5rem solid white;
    border-top: 0.3rem solid transparent;
    border-bottom: 0.3rem solid transparent;
  }

  @media (max-width: 480px) {
    border-right: 0.4rem solid white;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
  }
`

export const RightArrowIcon = styled(ArrowIcon)`
  border-left: 0.6rem solid white;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
  margin-left: 0.1rem;

  @media (max-width: 768px) {
    border-left: 0.5rem solid white;
    border-top: 0.3rem solid transparent;
    border-bottom: 0.3rem solid transparent;
  }

  @media (max-width: 480px) {
    border-left: 0.4rem solid white;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
  }
`

export const AudioButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    bottom: 0.5rem;
    right: 0.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 1.8rem;
    height: 1.8rem;
    font-size: 0.7rem;
  }
`