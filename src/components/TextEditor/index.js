import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {
  BgContainer,
  Container,
  Heading,
  ImageContainer,
  Image,
  TextEditContainer,
  ListContainer,
  Button,
  Hr,
  StyledTextarea,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
  }

  onChangeTextValue = event => {
    this.setState({text: event.target.value})
  }

  onClickChangeButtonColor = style => {
    this.setState(prevState => ({
      [style]: !prevState[style],
    }))
  }

  render() {
    const {text, bold, italic, underline} = this.state
    return (
      <BgContainer>
        <Container>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextEditContainer>
            <ListContainer>
              <li>
                <Button
                  data-testid="bold"
                  onClick={() => this.onClickChangeButtonColor('bold')}
                  active={bold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  onClick={() => this.onClickChangeButtonColor('italic')}
                  active={italic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="underline"
                  onClick={() => this.onClickChangeButtonColor('underline')}
                  active={underline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ListContainer>
            <Hr />
            <StyledTextarea
              rows="40"
              cols="80"
              value={text}
              bold={bold}
              italic={italic}
              underline={underline}
              onChange={this.onChangeTextValue}
            />
          </TextEditContainer>
        </Container>
      </BgContainer>
    )
  }
}

export default TextEditor
