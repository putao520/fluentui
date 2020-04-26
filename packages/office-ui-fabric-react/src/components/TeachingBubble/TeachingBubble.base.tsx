import * as React from 'react';
import { initializeComponentRef, classNamesFunction } from '../../Utilities';
import { TeachingBubbleContent } from './TeachingBubbleContent';
import {
  ITeachingBubbleProps,
  ITeachingBubbleStyleProps,
  ITeachingBubbleStyles,
  ITeachingBubbleSubComponentStyles,
} from './TeachingBubble.types';
import { Callout, ICalloutProps } from '../../Callout';
import { DirectionalHint } from '../../common/DirectionalHint';

const getClassNames = classNamesFunction<ITeachingBubbleStyleProps, ITeachingBubbleStyles>();

export interface ITeachingBubbleState {
  isTeachingBubbleVisible?: boolean;
}

export class TeachingBubbleBase extends React.Component<ITeachingBubbleProps, ITeachingBubbleState> {
  public static defaultProps = {
    /**
     * Default calloutProps is deprecated in favor of private `_defaultCalloutProps`.
     * Remove in next release.
     * @deprecated In favor of private `_defaultCalloutProps`.
     */
    calloutProps: {
      beakWidth: 16,
      gapSpace: 0,
      setInitialFocus: true,
      doNotLayer: false,
      directionalHint: DirectionalHint.rightCenter,
    },
  };

  public rootElement = React.createRef<HTMLDivElement>();
  private _defaultCalloutProps: ICalloutProps;

  // Constructor
  constructor(props: ITeachingBubbleProps) {
    super(props);

    initializeComponentRef(this);
    this.state = {};

    this._defaultCalloutProps = {
      beakWidth: 16,
      gapSpace: 0,
      setInitialFocus: true,
      doNotLayer: false,
      directionalHint: DirectionalHint.rightCenter,
    };
  }

  public focus(): void {
    if (this.rootElement.current) {
      this.rootElement.current.focus();
    }
  }

  public render(): JSX.Element {
    const {
      calloutProps: setCalloutProps,
      // tslint:disable-next-line:deprecation
      targetElement,
      onDismiss,
      // Default to deprecated value if provided.
      // tslint:disable-next-line:deprecation
      hasCloseButton = this.props.hasCloseIcon,
      isWide,
      styles,
      theme,
      target,
    } = this.props;
    const calloutProps = { ...this._defaultCalloutProps, ...setCalloutProps };
    const stylesProps: ITeachingBubbleStyleProps = {
      theme: theme!,
      isWide,
      calloutProps: { ...calloutProps, theme: calloutProps.theme! },
      hasCloseButton,
    };

    const classNames = getClassNames(styles, stylesProps);
    const calloutStyles = classNames.subComponentStyles
      ? (classNames.subComponentStyles as ITeachingBubbleSubComponentStyles).callout
      : undefined;

    return (
      <Callout
        target={target || targetElement}
        onDismiss={onDismiss}
        {...calloutProps}
        className={classNames.root}
        styles={calloutStyles}
        hideOverflow
      >
        <div ref={this.rootElement}>
          <TeachingBubbleContent {...this.props} />
        </div>
      </Callout>
    );
  }
}
