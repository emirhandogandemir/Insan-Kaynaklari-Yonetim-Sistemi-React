import React, { useState } from "react";
import "./Header.css";

import { Grid, Header, Icon, Search, Segment, Image } from "semantic-ui-react";

export default function Headerr() {
  return (
      <Segment
        inverted
        placeholder
        style={{ margin: "3em -2em 3em", padding: "30pm", height: "200px" }}
      >
        <Grid stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              <Image
                src={"../../../assets/employer.png"}
                size="medium"
                rounded
              />
            </Grid.Column>
            <Grid.Column width={3}>
             
            </Grid.Column>

            <Grid.Column width={3}>
            
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  );
}
