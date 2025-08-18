import React from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  width: 80%;
  max-width: 90rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  margin: 5rem 0;
  scroll-margin-top: 8rem;
  scroll-snap-align: center;
  z-index: 10;

  @media (max-width: 1024px) {
    width: 85%;
    padding: 5rem 2rem;
    margin: 4rem 0;
    min-height: 75vh;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 3rem 1rem;
    margin: 2rem 0;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 2rem 3rem;
  }
`

const Section = React.forwardRef(({ children, id, className }, ref) => {
  return <SectionWrapper id={id} className={className} ref={ref}>{children}</SectionWrapper>
})

Section.displayName = 'Section'

export default Section
