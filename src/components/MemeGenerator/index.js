import {Component} from 'react'
import {
  AppMainContainer,
  SecondaryContainer,
  MemeGeneratorHeader,
  FormAndDisplayContainer,
  InputCardContainer,
  FormContainer,
  LabelAndInputEle,
  SelectContainer,
  LabelEle,
  InputEle,
  Options,
  SubmitButton,
  DisplayContainer,
  DisplayContext,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = e => {
    this.setState({imageUrlInput: e.target.value})
  }

  onChangeTopTextInput = e => {
    this.setState({topTextInput: e.target.value})
  }

  onChangeBottomTextInput = e => {
    this.setState({bottomTextInput: e.target.value})
  }

  onChangeFontSizeInput = e => {
    this.setState({fontSizeInput: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <InputCardContainer>
        <FormContainer onSubmit={this.onSubmit}>
          <LabelAndInputEle>
            <LabelEle htmlFor="url">Image URL</LabelEle>
            <InputEle
              id="url"
              type="text"
              placeholder="Enter the Image Url"
              onChange={this.onChangeImageUrl}
              value={imageUrlInput}
            />
          </LabelAndInputEle>
          <LabelAndInputEle>
            <LabelEle htmlFor="top">Top Text</LabelEle>
            <InputEle
              id="top"
              type="text"
              placeholder="Enter the Top Text"
              value={topTextInput}
              onChange={this.onChangeTopTextInput}
            />
          </LabelAndInputEle>
          <LabelAndInputEle>
            <LabelEle htmlFor="bottom">Bottom Text</LabelEle>
            <InputEle
              id="bottom"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomTextInput}
              onChange={this.onChangeBottomTextInput}
            />
          </LabelAndInputEle>
          <LabelAndInputEle>
            <LabelEle htmlFor="select">Font Size</LabelEle>
            <SelectContainer
              id="select"
              value={fontSizeInput}
              onChange={this.onChangeFontSizeInput}
            >
              {fontSizesOptionsList.map(each => (
                <Options value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </Options>
              ))}
            </SelectContainer>
          </LabelAndInputEle>

          <SubmitButton type="submit">Generate</SubmitButton>
        </FormContainer>
      </InputCardContainer>
    )
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <AppMainContainer>
        <SecondaryContainer>
          <MemeGeneratorHeader>Meme Generator</MemeGeneratorHeader>
          <FormAndDisplayContainer>
            {this.renderFormContainer()}
            <DisplayContainer data-testid="meme" imageUrl={imageUrl}>
              <DisplayContext fontSize={fontSize}>{topText}</DisplayContext>
              <DisplayContext fontSize={fontSize}>{bottomText}</DisplayContext>
            </DisplayContainer>
          </FormAndDisplayContainer>
        </SecondaryContainer>
      </AppMainContainer>
    )
  }
}

export default MemeGenerator
