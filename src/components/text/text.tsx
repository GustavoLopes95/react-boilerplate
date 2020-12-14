import React, { PureComponent, Children } from "react";
import SizeEnum from '../../constants/size-enum';
import './text.scss';

enum TextAlignmentEnum {
  LEFT = 'LEFT',
  RIGTH = 'RIGTH',
  CENTER = 'CENTER',
  JUSTIFY = 'JUSTIFY'
}

interface ComponentProps {
  aligment?: TextAlignmentEnum;
  bold?: boolean;
  size?: SizeEnum;
  value: string;
}
class Text extends PureComponent<ComponentProps> {

  static defaultProps = {
    aligment: TextAlignmentEnum.LEFT,
    bold: false,
    size: SizeEnum.SMALL,
    value: ''
  }

  getTextValue = (): string => {
    const { children, value } = this.props;
    if (Children.count(children) > 0 && typeof children === 'string') {
      return children;
    }

    return value;
  }

  getClass = (): string => {
    const { size, bold } = this.props;

    const className: string[] = ['c-text', `c-text--${size}`];
    if (bold) {
      className.push('c-text--bold');
    }
    return className.join(' ');
  }

  render() {
    return (
      <div className={this.getClass()}>
        {this.getTextValue()}
      </div>
    )
  }
}
export default Text;