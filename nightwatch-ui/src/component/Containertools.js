import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import error from 'axios';
import Console from './Console';
import { nativeTouchData } from 'react-dom/cjs/react-dom-test-utils.development';
import { Spinner } from '../common/components';
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import { Alert } from 'bootstrap';
import AlertMessage from '../common/components/AlertMessage';


const Containertools = () => {

  const [data, setData] = useState([]);
  const [textConsole, setTextConsole] = useState("un text");
  const [playOnce, setplayOnce] = useState(true);
  const [kubeIpAddress, setKubeIpAddress] = useState();
  const [trivyImage, setTrivyImage] = useState();
  const [trivyUsername, setTrivyUsername] = useState();
  const [trivyPassword, setTrivyPassword] = useState();

  const [kubeconfig, setKubeConfig] = useState();
  const { promiseInProgress } = usePromiseTracker();
  const [onError, setOnError] = useState(false);

  useEffect(() => {

  }, [data]);

  function trivy(event, ipAddress) {
    const body = { "image": trivyImage, "username": trivyUsername, "password": trivyPassword };
    setOnError(null);
    trackPromise(
      axios
        .post(
          process.env.REACT_APP_ACCESS_URL+"/cisel-nightwatch-container/trivy", body
        )
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch(err => {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            setOnError(err.message);
          } else if (err.request) {
            // client never received a response, or request never left
            setOnError(err.message);
          } else {
            setOnError(err.message);
          }
        }));
    event.preventDefault();
  }
 

  return (
    <div className="Containertools">

      <Navigation />
      <br />

      <Container>
        <Row>
          <Col xs={6}>
            <Card className="bg-dark text-white">
              <Card.Header>Check your vulnerabilities regarding Container</Card.Header>
              <Card.Body>
                <Card.Title>Containertools </Card.Title>
                <Card.Text>
                  Using some opensource tools to scan container images
                </Card.Text>
                <Form onSubmit={(e) => trivy(e, kubeIpAddress)}>
                  <Form.Group className="mb-3" controlId="kubelintId">
                    <Form.Label>trivy</Form.Label>
                    <Row><Col><Form.Control required type="text" placeholder="Enter the docker image value like alpine:latest or alpine:3.15.2" value={trivyImage} onInput={e => setTrivyImage(e.target.value)} /></Col></Row>
                    <Row>
                      <Col><Form.Control type="text" placeholder="username" value={trivyUsername} onInput={e => setTrivyUsername(e.target.value)} /></Col>
                      <Col><Form.Control type="password" placeholder="password" value={trivyPassword} onInput={e => setTrivyPassword(e.target.value)} /><br /></Col>
                    </Row>
                    <br />
                    <Button type="submit" value="submit">
                      Go!
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

          </Col>
          <Col xs={6}>
            {onError ? <AlertMessage message={onError} /> : null}
            <Console asd={JSON.stringify(data, null, 2)} />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Containertools;