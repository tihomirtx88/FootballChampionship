/* eslint-disable react/prop-types */
import FootballFieldContainer from "../../ui/FootballFieldContainer";
import {  useRenderPlayers } from "./useRenderPlayers";

export default function FootballField({ teamName, players }){
    return(
        <>
        <h4>{teamName} Formation:</h4>
        <FootballFieldContainer>
              <div className="outline border"></div>
              <div className="box left border"></div>
              <div className="box-d left border"></div>
              <div className="box right border"></div>
              <div className="box-d right border"></div>
              <div className="box right small border"></div>
              <div className="spot left border"></div>
              <div className="spot right border"></div>
              <div className="spot center border"></div>
              <div className="center-line border"></div>
              <div className="center-circle border"></div>
              <div className="center top left border"></div>
              <div className="center top right border"></div>
              <div className="corner top left border"></div>
              <div className="corner top right border"></div>
              <div className="corner bottom left border"></div>
              <div className="corner bottom right border"></div>
              <div className="grass"></div>
          {useRenderPlayers(players.slice(0, 11))}
        </FootballFieldContainer>
      </>
    );
};