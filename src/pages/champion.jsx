import React from 'react'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './champion.css'

function Champion() {

    const [dataChampion, setChampion] = useState({})

    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_GB/champion.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let arrayChamp = []
                console.log(data.data);
                for (const key in data.data) {
                    arrayChamp.push(data.data[key])
                }
                // console.log(arrayChamp);
                setChampion(arrayChamp)
            });
    }, [])

    if (dataChampion) {
        return (

            <Col className='card-champion'>
                {Object.values(dataChampion).map((champ) => (
                    <Row>
                        <Card style={{ width: '18rem', marginTop: '1vw'}}>
                            <Card.Body>
                                <Card.Title>{champ.id}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{champ.title}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">{champ.tags[0]}</Card.Subtitle>
                                <Card.Img src={'tiles/' + champ.id + '_0.jpg'} />
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Col>
        )
    }
}
export default Champion
