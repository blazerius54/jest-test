import { createMuiTheme } from '@material-ui/core/styles/index';

export const styles = {
  root: {
    flexGrow: 1,
  },
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Germania One'].join(','),
  },
});
