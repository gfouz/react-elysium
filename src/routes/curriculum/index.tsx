import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Headline } from 'components/Headline';
import { Header } from 'components/Header';
import { OneButton } from 'components/OneButton';
import { overview, skills, experience, education, technologies } from './constants';

function Curriculum() {

  const navigate = useNavigate();
  const onButtonClick = () => {
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

  function CancelhandleClick() {
    navigate(-1);
  }

  return (
    <SummaryContainer>
      <SummaryHeader>
        <Headline bolder ml='1em'>
          gfouz curriculum
        </Headline>
      </SummaryHeader>
      <SummaryMain>
        <PictureContainer>
          <MainPicture />
        </PictureContainer>
        <Headline upper bolder mt>
          Overview
        </Headline>
        <Es6LiteralString dangerouslySetInnerHTML={{__html: overview}} ></Es6LiteralString>
        <Headline upper bolder mt>
          skills hightlights
        </Headline>
        <SummaryList>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </SummaryList>
        <Headline upper bolder mt>
          experience
        </Headline>
        <SummaryParagraph>{experience}</SummaryParagraph>
        <Headline upper bolder mt>
          EDUCATION OR OTHER SKILLS
        </Headline>
        <SummaryParagraph>{education}</SummaryParagraph>
        <Headline upper bolder mt>
          LIBRARIES OR TECHNOLOGIES
        </Headline>
        <SummaryParagraph>{technologies}</SummaryParagraph>
        <div>
          <Headline upper bolder center mt>
            Click on below button to download PDF file
          </Headline>
          <ButtonsContainer>
          <DownloadButton onClick={onButtonClick}>Download PDF</DownloadButton>
          <CancelButton onClick={CancelhandleClick}>Cancel</CancelButton>
          </ButtonsContainer>
        </div>
      </SummaryMain>
    </SummaryContainer>
  );
}

export default Curriculum;

const SummaryContainer = styled.div`
  margin: 0 auto;
  padding: 0 0 5em 0;
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
const SummaryMain = styled.div`
  padding: 1em;
`;
const SummaryParagraph = styled.p`
  text-align: left;
  font-size: 1.1em;
`;
const Es6LiteralString = styled.div`
  text-align: left;
  font-size: 1.1em;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
     color: #ff0000;
    }
  }
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
`;
const SummaryList = styled.ol`
  padding: 0 1em;
  display: flex;
  text-align: left;
  flex-direction: column;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
`;
const DownloadButton = styled(OneButton)`
`;
const CancelButton = styled(OneButton)`
  color: #888888;
  background-color: #99999950;
`;
/*
npm init @eslint/config

npm install eslint-config-airbnb-typescript --save-dev

*/
