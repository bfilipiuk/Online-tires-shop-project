import React, { useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../assets/bmwfront.jpg';
import './login.css'

const defaultTheme = createTheme({
    typography: {
        fontFamily: '"Poppins", sans=serif',
    },
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });

        event.preventDefault();

        // Tutaj możesz dodać logikę wysyłania żądania do backendu
        // Na przykład za pomocą fetch lub axios
        try {
            const response = await fetch('URL_API', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            // Tutaj możesz obsłużyć odpowiedź, np. przekierować użytkownika
            // lub wyświetlić błąd logowania
        } catch (error) {
            console.error('Błąd logowania:', error);
            // Obsługa błędów
        }
    }

    //     const { login, password } = event.target.elemenets;

    //     if (login.value === 'user' && password.value === 'user') {
    //         setUser({ type: 'user' });
    //     }
    //     else if (login.value === 'admin' && password.value === 'admin') {
    //         setUser({ type: 'admin' });
    //     } else {
    //         alert('Nieprawidłowe dane logowania');
    //   }
    //   };

    return (
        <div>
            <Navbar/>
            <div className="main">
                <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                    <Grid className="obrazek"
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                    <Avatar sx={{ m: 1, bgcolor: '#0540F2' }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Zaloguj się
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Zapamiętaj mnie"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#0540F2'}}
                    >
                        Zaloguj się
                    </Button>
                    <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Zapomniałeś hasła?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Nie masz konta? Zarejestruj się"}
                    </Link>
                </Grid>
            </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
            </div>
            <Footer/>
        </div>
    );
}

export default Login;