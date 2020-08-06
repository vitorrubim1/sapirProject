import * as React from "react";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "70%",
    height: "85%",
    paddingTop: "100px",
  },
  titlePrincipal: {
    color: "rgb(0, 52, 81)",
    fontWeight: "500",
    fontSize: "2.5rem",
  },
  input: {
    textAlign: "center",
    width: "100%",
  },
  dividerL: {
    backgroundColor: "#E9AF00",
    width: "75px",
    height: "3px",
    marginTop: "8px",
  },
  button: {
    backgroundColor: "rgb(0, 52, 81)",
    color: "rgb(255, 255, 255)",
    borderBottom: "3px solid rgb(0, 36, 56)",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(0, 36, 56)",
    },
  },
});

function Contato() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Box display="flex" flexDirection="column">
            <Box mt={3}>
              <Typography className={classes.titlePrincipal}>
                Entre em contato
              </Typography>
              <Divider className={classes.dividerL} orientation="horizontal" />
            </Box>
          </Box>

          <form noValidate autoComplete="off">
            <Box flexGrow={1} mt={6}>
              <Grid container spacing={4}>
                <Grid item xs>
                  <TextField
                    label="Nome"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs>
                  <TextField
                    label="Email"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Estado"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs>
                  <TextField
                    label="Cidade"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Assunto"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs>
                  <TextField
                    label="Mensagem"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs>
                  <TextField
                    label="Nome"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button type="submit" className={classes.button}>
                  Enviar
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Contato;
