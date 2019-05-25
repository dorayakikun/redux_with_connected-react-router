import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, Paper } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";
export interface PreviewProps {
  classes: {
    layout: any;
    paper: any;
  };
  firstName?: string;
  lastName?: string;
  email?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    }
  });

export const PurePreview = (props: PreviewProps) => (
  <main className={props.classes.layout}>
    <Paper className={props.classes.paper}>
      <Typography gutterBottom variant="h5" component="p">
        First Name: {props.firstName}
      </Typography>
      <Typography gutterBottom variant="h5" component="p">
        Last Name: {props.lastName}
      </Typography>
      <Typography gutterBottom variant="h5" component="p">
        E-mail: {props.email}
      </Typography>
    </Paper>
  </main>
);

export const Preview = withStyles(styles)(PurePreview);
