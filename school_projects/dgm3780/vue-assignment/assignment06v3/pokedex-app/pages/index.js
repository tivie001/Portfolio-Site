import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import fetch from "isomorphic-unfetch";
import Link from 'next/link'
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import Search from "./Search";

const titleStyle = {
    fontFamily: "Pokemon Solid",
    fontSize: "4rem",
    color: "#FFDE00",
    textShadow: "5px 5px #3B4CCA",
    letterSpacing: "5px",
    margin: "0 0 1rem 0"
};
const secondBtn = {
    height: "50px",
    width: "100%",
    borderRadius: "20px",
    fontFamily: "Avenir",
    fontSize: "18px",
    fontWeight: "900",
    display: "flex",
    alignItems: 'center',
    color: "white",
    textShadow: "1px 1px black",
    backgroundColor: "#3B4CCA"
};




const Index = ({ pokemon }) => (
    <Layout>
        <Container maxWidth="lg">
            <Grid container direction="column" justify="center" alignItems="center">
                <h1 style={titleStyle}>Pokemon PokéDex</h1>
            </Grid>

            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={6} sm={4}>
                    <Link href="/random">
                        <Button variant="contained" color="primary" style={secondBtn}>
                            Random Pokémon
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center">
                <Search pokemon={pokemon}/>
            </Grid>
        </Container>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=807`);
    const data = await res.json();
    const pokemon = data.results;

    {pokemon.map((details, i) => {
        details.key = i;
    })}

    return { pokemon }
};
export default Index;
