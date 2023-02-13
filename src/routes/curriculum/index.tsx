import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Headline } from 'components/Headline';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { OneButton } from 'components/OneButton';
import { overview, skills, experience, education, technologies, fetchPdf} from './constants';

function Curriculum() {
  const [active, setActive]= useState( false);
  const [width, setWidth]= useState(0);
  const navigate = useNavigate();
  

  const onButtonClick = () => {
      setActive( true );
      fetchPdf();
   };

  function CancelhandleClick() {
    navigate(-1);
  }
  useEffect(()=> {
   let interval: NodeJS.Timer | undefined = undefined; 
   if (active && width < 100) {
       interval = setInterval(() => {
        setWidth(( st )=> st + 1 );
      }, 10);
    } else {
      setActive( false );
      clearInterval(interval);
      setWidth(0)
    }
    return () => {
      clearInterval(interval);
    };

  }, [active, width])
  
  return (
    <SummaryContainer>
      <SummaryHeader>
        <Headline bolder ml='1em' center>
          gfouz curriculum
        </Headline>
      </SummaryHeader>
      <SummaryMain>
        <PictureContainer>
          <MainPicture />
        </PictureContainer>
        <Subtitle upper bolder mt>
          Overview
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: overview }} />
        <Subtitle upper bolder mt>
          skills hightlights
        </Subtitle>
        <SummaryList>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </SummaryList>
        <Subtitle upper bolder mt>
          experience
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: experience }} />
        <Subtitle upper bolder mt>
          EDUCATION OR OTHER SKILLS
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: education }} />
        <Subtitle upper bolder mt>
          LIBRARIES OR TECHNOLOGIES
        </Subtitle>
        <Es6LiteralString dangerouslySetInnerHTML={{ __html: technologies }} />
        <DownloadSection>
          <Subtitle upper bolder center mt  color='#f1f1f1'>
            Click button to download PDF file
          </Subtitle>
          <ButtonsContainer>
            <DownloadButton onClick={onButtonClick}>Download PDF {width}%</DownloadButton>
            <CancelButton onClick={CancelhandleClick}>Cancel</CancelButton>
          </ButtonsContainer>
        
        <div 
          style=
          {{ width: `${width}%`, height: '2px', backgroundColor:'#06ade5', filter: 'drop-shadow(2em 0 1em #ffffff)' }}
        >
        </div>
         <SummaryFooter >gfouz</SummaryFooter>
        </DownloadSection> 
       
      </SummaryMain>

    </SummaryContainer>
  );
}

export default Curriculum;

const SummaryContainer = styled.div`
  margin: 0 auto;
  max-width: 735px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px #999999;
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`;
const SummaryHeader = styled(Header)``;
const SummaryFooter = styled(Footer)`

  color: #f1f1f1;
  background-color: transparent;
`;
const SummaryMain = styled.div``;
const Es6LiteralString = styled.div`
  padding: 0 0.5em;
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`;
const Subtitle = styled(Headline)`
  padding: 0.5em;
`;
const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MainPicture = styled.img.attrs({ src: './images/gfouzcoffee.jpg', alt: 'gfouz' })`
  max-width: 100%;
  height: auto;
  &:hover {
   transform: rotateY(180deg);
   transition: 1s;
  }
`;
const SummaryList = styled.ol`
  padding: 0 1.5em;
  display: flex;
  text-align: left;
  flex-direction: column;
`;
const DownloadSection = styled.div`
 padding: 1em 0;
 margin: 2em 0 0 0;
 background-color: #333333;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const DownloadButton = styled(OneButton)`
   background-color: #06ade5;
`;
const CancelButton = styled(OneButton)`
  color: #f1f1f1;
  background-color: #99999950;
`;

/*
npm init @eslint/config
npm install eslint-config-airbnb-typescript --save-dev
https://gfouz.github.io/react-elysium/


fetch('fouzsummary.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'fouzsummary.pdf';
        alink.click();
      });
    });
  };

*/
