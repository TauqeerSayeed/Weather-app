import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    const image_url ="https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



    return(
        <div className="InfoBox">
            {/* <h2>Weather Info</h2> */}
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={image_url}
                title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>
                    <p>{info.temp}</p>
                    <p>{info.feelslike}</p>
                    <p>{info.temp_max}</p>
                    <p>{info.temp_min}</p>
                    <p>{info.humidity}</p>
                    <p>{info.description}</p>
                </div>
                <br />
                <i><p style={{color:"blue"}}>This App is using API of Open weather map an open open source API</p></i>
                <i style={{color:"black"}}>Copyright reserved ©tauqeer_sayeed</i>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}