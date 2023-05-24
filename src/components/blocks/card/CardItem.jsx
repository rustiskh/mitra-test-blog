import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import styles from './CardItem.module.scss'


function CardItem() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <div>
                    <Link to="#">
                        <Image title="Имя автора" src="holder.js/171x180" roundedCircle />
                        <Card.Text className={styles.test}>Имя автора</Card.Text>
                    </Link>

                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Читать...</Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;