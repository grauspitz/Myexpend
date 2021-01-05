import { Typography} from 'antd';
const { Paragraph} = Typography;
class Myexpend extends React.Component {
    state = {
      expand: false,
      counter: 0
    };
    typoExpand = () => {
      this.setState({
        expand: true,
        counter: !this.state.expand
          ? this.state.counter + 0
          : this.state.counter + 1
      });
    };
  
    typoClose = () => {
      this.setState({
        expand: false,
        counter: !this.state.expand
          ? this.state.counter + 0
          : this.state.counter + 1
      });
    };
  
    renderParagraph() {
      const { content } = this.props
      return (
        <div key={this.state.counter}>
          <Paragraph
            ellipsis={{
              rows: 3,
              expandable: true,
              symbol: '展开',
              onExpand: this.typoExpand
            }}
          >
            {content}
          </Paragraph>
        </div>
      );
    }
    render() {
      return (
        <div>
          {this.renderParagraph()}
          {this.state.expand && <a onClick={this.typoClose}>收起</a>}
        </div>
      );
    }
  }
//   use: <Myexpend content={content} />