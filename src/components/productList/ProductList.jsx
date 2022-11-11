import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductList = ({ product, readProduct}) => {

    useEffect(() => {
        readProduct()
    }, [])
  return (
    <div>
        {product.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название: {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Описание: {item.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена: {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
        ))}
        
    </div>
  )
}

export default ProductList