import * as React from 'react';
import styles from './SpfxBtn.module.scss';
import type { ISpfxBtnProps } from './ISpfxBtnProps';


export default class SpfxBtn extends React.Component<ISpfxBtnProps, {}> {
  public render(): React.ReactElement<ISpfxBtnProps> {
    const   
    {description} = this.props;

    return (
      <div className={styles.spfxBtn}>
     <button className={styles.myButton} onClick={this.btnPart}>
     {description || 'Click Me'}
      </button>
      </div>
    );
  }
  private btnPart()
  {
    console.log('button clicked');
    alert("button clicked!")
  }
}
