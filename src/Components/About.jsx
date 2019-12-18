import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import Button from "./EnterButton";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const About = () => {
  return (
    <div className="about_page">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="Tingkap World"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "1em"
            }}
          />
          <Header
            as="h2"
            content="Welcome to Tingkap World , a social platform to connect with communities in your neighbourhood."
            inverted
            style={{
              fontSize: "1.5em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em"
            }}
          />
          <Header
            as="h3"
            content="Actively participate to promote growing society."
            inverted
            style={{
              fontSize: "1.2em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em"
            }}
          />
          <Header
            as="h4"
            content="Know your local businesses, engage in community events around you and send feedbacks to enhance quality of life."
            inverted
            style={{
              fontSize: "1em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em"
            }}
          />
          <br />
          <Button style={{ margin: "auto", padding: "2em" }} />
        </Container>
      </Segment>
    </div>
  );
};

export default About;
