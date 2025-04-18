import * as React from 'react';
import styles from './HomeWp.module.scss';
import { IHomeWpProps } from './IHomeWpProps';
import { Grid } from '@material-ui/core'
import Announcements from './Announcements/Announcements';

export default class HomeWp extends React.Component<IHomeWpProps, {}> {
  public render(): React.ReactElement<IHomeWpProps> {
    return (
      <div className={ styles.homeWp }>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}><Announcements context={ this.props.context }/></Grid>
      </div>
    );
  }
}
