import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";
import UserProfile from "./UserProfile/UserProfile";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    handlePasswordReset,
    user,
    mail,
    handleRegister,
    handleEmail,
    handlePass,
    error,
    toggleLogin,
  } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white"
      }}
    >
      <Container id="login" maxWidth="xl">
        {user?.email ? (
          <>
            <UserProfile />
          </>
        ) : (
          <>
            <Container component="main" maxWidth="xs">
              <CssBaseline />

              <Box
                sx={{
                  marginTop: 15,
                  marginBottom: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src="logo.webp" />
                <Typography component="h1" variant="h4">
                  Log in to your account
                </Typography>
                <Grid
                  container
                  justifyContent="flex-end"
                  style={{ justifyContent: "center" }}
                >
                  <Grid item>
                    <Button onClick={toggleLogin(true)}>
                      <Link
                        className="body-link-text-style"
                        to="/register"
                        variant="body2"
                      >
                        New here? Register
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
                <Box component="div" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onBlur={handleEmail}
                        required
                        fullWidth
                        id="email"
                        color="success"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onBlur={handlePass}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        color="success"
                        autoComplete="new-password"
                      />
                      <Typography sx={{ p: 1 }} color="red">
                        {error}
                      </Typography>
                    </Grid>
                    {mail ? (
                      <Button
                        className="body-link-text-style"
                        variant="body2"
                        onClick={handlePasswordReset}
                      >
                        Forget Password? Reset now
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Grid>
                  <Button
                    onClick={handleRegister}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    color="success"
                  >
                    Sign in
                  </Button>
                </Box>
                
              </Box>
            </Container>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Login;
