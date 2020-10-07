import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PetsIcon from '@material-ui/icons/Pets';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PokemonList from "./components/pokemonList";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'


function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Test for Senior Software Developer on Modyo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

 export const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height: '100%',
        width: '100%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const Album = ({pokemonList, next, previous}) =>  {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PetsIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Pokedex Modyo
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Pokedex
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Your local guide to the entire Pokemon world.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="outlined" color="primary" onClick={() => previous()}>
                                        Previous
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                        <PokemonList pokemonList={pokemonList}/>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    José Santiago Ardila Acuña
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Java Software Developer SSR Advance
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

class App extends Component  {

    render() {
        return (
            <Album pokemonList={this.state.pokemonList}
                   next={this.nextPage}
                   previous={this.previousPage}/>
        );
    }

    state = {
        pokemonList: [],
        previous: "",
        next: ""
    };

    previousPage = () => {
        fetch(`https://pokedexmodyospring.herokuapp.com/${this.state.previous}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ pokemonList: data.pokemonList, previous: data.previous, next: data.next})
                console.log(this.state.pokemonList)
            })
            .catch(console.log)
    }

    nextPage = () => {
        fetch(`hhttps://pokedexmodyospring.herokuapp.com/${this.state.next}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ pokemonList: data.pokemonList, previous: data.previous, next: data.next})
                console.log(this.state.pokemonList)
            })
            .catch(console.log)
    }

    componentDidMount() {
        fetch('https://pokedexmodyospring.herokuapp.com/pokemonList/0/20')
            .then(res => res.json())
            .then((data) => {
                this.setState({ pokemonList: data.pokemonList, previous: data.previous, next: data.next})
                console.log(this.state.pokemonList)
            })
            .catch(console.log)

    }

}

export default App;
