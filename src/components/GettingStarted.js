import React, { Component } from "react";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Tab,
  Tabs,
  TextField,
  Typography
} from "@material-ui/core";
import { navigate } from "@reach/router";
// import { unstable_Box as Box } from "@material-ui/core/Box";
import { Formik, Field } from "formik";
import { TextField as ConnectedTextField } from "formik-material-ui";
import { palette, spacing, typography } from "@material-ui/system";
import styled from "styled-components";

const Box = styled.div`${palette}${spacing}${typography}`;
class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <React.Fragment>
        <Box mt={10}>
          <Typography>Getting Started</Typography>
          <Box mb={1} mx="auto" maxWidth={600}>
            <Paper position="static" color="default">
              <Tabs
                value={tabIndex}
                variant="fullWidth"
                onChange={(e, tabIndex) => {
                  this.setState({ tabIndex });
                }}
              >
                <Tab label="person" />
                <Tab label="business" />
              </Tabs>
            </Paper>
          </Box>
          {tabIndex === 0 ? (
            <Formik
              initialValues={{ name: "" }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
                // set user and roles context
                // go to app home
                navigate("/app/e/0");
              }}
              render={({ submitForm, isSubmitting }) => (
                <Box mx="auto" maxWidth={600}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={16}>
                        <Grid item sm container>
                          <Field
                            name="name"
                            label="Name"
                            margin="normal"
                            fullWidth
                            component={ConnectedTextField}
                          />
                          {/* <TextField label="Name" margin="normal" fullWidth /> */}
                        </Grid>
                        <Grid item sm container>
                          <TextField
                            label="Email"
                            value="email@email.com"
                            disabled
                            margin="normal"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid container justify="flex-end">
                        <Button color="secondary" onClick={submitForm}>
                          Next
                        </Button>
                      </Grid>
                    </CardActions>
                  </Card>
                </Box>
              )}
            />
          ) : (
            <Box mx="auto" maxWidth={600}>
              <Card>
                <CardContent>
                  <Grid container spacing={16}>
                    <Grid item sm container>
                      <TextField label="Name" margin="normal" fullWidth />
                    </Grid>
                    <Grid item sm container>
                      <TextField
                        label="Email"
                        value="email@email.com"
                        disabled
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item container sm={6}>
                      <TextField
                        label="Business Name"
                        margin="normal"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid container justify="flex-end">
                    <Button color="secondary">Next</Button>
                  </Grid>
                </CardActions>
              </Card>
            </Box>
          )}
        </Box>
      </React.Fragment>
    );
  }
}
export default GettingStarted;
